// Joef 10/11: DUBBEL CHECKEN reaches the Lightspeed ticket. Runs the real Build Order Payload jsCode from the
// workflow snapshot against stub upstream nodes; nothing is sent to Lightspeed.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';

const wf = JSON.parse(readFileSync(path.join(__dirname, '../../docs/workflows/push_lightspeed_order.json'), 'utf8'));
const node = (name: string) => wf.nodes.find((n: { name: string }) => n.name === name);
const code: string = node('Build Order Payload').parameters.jsCode;

const order = {
  id: '00000000-0000-0000-0000-000000000001', source: 'shopify', external_ref: 'TEST-DC-1', location_key: 'LOC_AALST',
  order_type: 'delivery', customer: { name: 'Test Klant', email: 'test@example.com', address: { line1: 'Kerkstraat 1', postal_code: '9300', city: 'Aalst' } },
  items: [{ plu: 'A1', name: 'Friet groot', qty: 1, unit_price_cents: 450, modifiers: [] }],
  payment: { total_cents: 450, status: 'paid', method: 'card_online' }, raw_note_attributes: [], delivery_plu: 'D14',
};
const dim = { lightspeed_company_id: 1, ls_table_ids: {}, payment_type_ids: {}, timezone: 'Europe/Brussels' };

type Dubbel = 'throw' | unknown[];
function render(dubbel: Dubbel) {
  const items: Record<string, unknown[]> = {
    'Load Canonical Order': [{ json: order }], 'Load dim_location': [{ json: dim }],
    'POST /core/customer': [{ json: { body: 42 } }], 'Build Customer Payload': [{ json: { access_token: 't' } }],
    'Parse Messages': [{ json: { msg_id: 1 } }], 'Load LS Catalog SKUs': [],
  };
  const $ = (name: string) => ({
    all: () => {
      if (name === 'Load Dubbel Check') { if (dubbel === 'throw') throw new Error('node not executed'); return dubbel; }
      return items[name];
    },
  });
  const out = new Function('$', 'DateTime', 'require', code)($, undefined, () => { throw new Error('no luxon'); });
  return out[0].json.payload as { note: string };
}

describe('push_lightspeed_order: DUBBEL CHECKEN on the ticket', () => {
  const plain = render([{ json: { dubbel_check: null } }]);

  it('puts one line on top of the note when the customer complained (cold / missing item)', () => {
    const koud = render([{ json: { dubbel_check: 'koud' } }]);
    expect(koud.note.split('\n')[0]).toBe('!! DUBBEL CHECKEN: vorige keer koud !!');
    expect(koud.note.split('\n').slice(1).join('\n')).toBe(plain.note);
    expect(render([{ json: { dubbel_check: 'vergeten' } }]).note.split('\n')[0]).toBe('!! DUBBEL CHECKEN: vorige keer iets vergeten !!');
  });

  it('fail-open: no flag, lookup error item, empty output, node missing or unknown value = ticket unchanged', () => {
    expect(plain.note.startsWith('*** SHOPIFY · DELIVERY ***')).toBe(true);
    for (const d of [[{ json: {} }], [{ json: { error: 'canceling statement due to statement timeout' } }], [], 'throw', [{ json: { dubbel_check: 'constructor' } }]] as Dubbel[]) {
      expect(render(d).note).toBe(plain.note);
    }
  });

  it('the lookup node sits between Save LS Customer Id and Build Order Payload, never blocks, 1.5 s timeout', () => {
    const n = node('Load Dubbel Check');
    expect(n.onError).toBe('continueRegularOutput');
    expect(n.alwaysOutputData).toBe(true);
    expect(n.parameters.query).toMatch(/SET LOCAL statement_timeout = '1500ms'/);
    expect(n.parameters.query).toMatch(/delivery_klant_signaal/);
    expect(wf.connections['Save LS Customer Id'].main[0][0].node).toBe('Load Dubbel Check');
    expect(wf.connections['Load Dubbel Check'].main[0][0].node).toBe('Build Order Payload');
  });
});
