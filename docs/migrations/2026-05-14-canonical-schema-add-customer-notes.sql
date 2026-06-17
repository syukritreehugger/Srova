-- Migration: 2026-05-14 add customer.notes to canonical_order_schema_v1_1()
--
-- Background:
-- Takeaway order detail includes a top-level `remarks` field (customer's order note,
-- e.g. "Als het snel kan, graag snel"). To surface this to the Lightspeed cashier
-- via the order note, the Takeaway poller stores it in canonical_orders.customer.notes.
--
-- The original v1.1 schema function had additionalProperties:false on customer object,
-- rejecting any customer.notes field. This migration adds notes as an optional property.
--
-- Backward compatible: existing rows have no customer.notes, schema accepts both.
--
-- Already applied in production via direct SQL on 2026-05-14. This file captures the
-- change for git history.

CREATE OR REPLACE FUNCTION public.canonical_order_schema_v1_1()
 RETURNS json
 LANGUAGE sql
 IMMUTABLE PARALLEL SAFE
AS $function$
  SELECT $body$
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["schema_version","source","external_ref","location_key","order_type","status","customer","items","payment","vat_lines"],
  "additionalProperties": false,
  "properties": {
    "schema_version": { "const": "1.1" },
    "source": { "enum": ["shopify","takeaway","manual"] },
    "external_ref": { "type": "string", "minLength": 1, "maxLength": 128 },
    "location_key": { "enum": ["LOC_AALST","LOC_BERLARE","LOC_DENDER"] },
    "order_type": { "enum": ["delivery","pickup","dine_in"] },
    "status": { "enum": ["received","normalized","pushing_ls","ls_sent","ls_accepted","ls_rejected","ls_failed","shipday_sent","complete","cancelled"] },
    "customer": {
      "type": "object",
      "required": ["name"],
      "additionalProperties": false,
      "properties": {
        "name":  { "type": "string", "minLength": 1 },
        "email": { "type": ["string","null"] },
        "phone": { "type": ["string","null"] },
        "notes": { "type": ["string","null"] },
        "address": {
          "type": ["object","null"],
          "additionalProperties": false,
          "required": ["line1","postal_code","city","country"],
          "properties": {
            "line1":       { "type": "string" },
            "line2":       { "type": ["string","null"] },
            "postal_code": { "type": "string" },
            "city":        { "type": "string" },
            "country":     { "type": "string", "minLength": 2, "maxLength": 2 },
            "lat":         { "type": ["number","null"] },
            "lng":         { "type": ["number","null"] }
          }
        }
      }
    },
    "items": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "required": ["plu","name","qty","unit_price_cents"],
        "additionalProperties": false,
        "properties": {
          "plu":              { "type": "string", "minLength": 1 },
          "name":             { "type": "string", "minLength": 1 },
          "qty":              { "type": "integer", "minimum": 1 },
          "unit_price_cents": { "type": "integer", "minimum": 0 },
          "modifiers": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["plu","name","unit_price_cents"],
              "additionalProperties": false,
              "properties": {
                "plu":              { "type": "string" },
                "name":             { "type": "string" },
                "unit_price_cents": { "type": "integer", "minimum": 0 },
                "qty":              { "type": "integer", "minimum": 1 }
              }
            }
          },
          "notes": { "type": ["string","null"] }
        }
      }
    },
    "payment": {
      "type": "object",
      "required": ["method","status","total_cents","currency"],
      "additionalProperties": false,
      "properties": {
        "method":      { "enum": ["card_online","cash","bancontact","voucher","other"] },
        "status":      { "enum": ["paid","pending","refunded","partial_refund","failed"] },
        "total_cents": { "type": "integer", "minimum": 0 },
        "currency":    { "const": "EUR" }
      }
    },
    "vat_lines": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "required": ["rate_bp","base_cents","vat_cents"],
        "additionalProperties": false,
        "properties": {
          "rate_bp":    { "type": "integer", "minimum": 0, "maximum": 10000 },
          "base_cents": { "type": "integer", "minimum": 0 },
          "vat_cents":  { "type": "integer", "minimum": 0 }
        }
      }
    },
    "utm":            { "type": ["object","null"] },
    "refund_markers": { "type": ["object","null"] },
    "cancel_reason":  { "type": ["string","null"] }
  }
}
$body$::json;
$function$;
