-- Contract test for 2026-10-05-takeaway-plu-map-policies.sql, run as the real roles.
-- Always rolls back. Run: psql -v ON_ERROR_STOP=1 -f docs/migrations/tests/takeaway-plu-map-policies.test.sql
-- Each failure raises an exception (exit code 3); success prints PASS.
begin;

create function pg_temp.als(p_rol jsonb, p_sql text) returns bigint language plpgsql as $$
declare n bigint;
begin
  perform set_config('request.jwt.claims', jsonb_build_object('sub', gen_random_uuid(), 'role', 'authenticated', 'app_metadata', p_rol)::text, true);
  set local role authenticated;
  execute p_sql into n;
  reset role;
  return n;
end $$;

do $$
declare n bigint;
begin
  if (select count(*) from public.takeaway_plu_map) = 0 then raise exception 'test needs at least one mapping row'; end if;

  n := pg_temp.als('{"role":"management"}', 'select count(*) from public.takeaway_plu_map');
  if n = 0 then raise exception 'FAIL: management reads 0 mapping rows'; end if;

  n := pg_temp.als('{}', 'select count(*) from public.takeaway_plu_map');
  if n <> 0 then raise exception 'FAIL: an account without a role reads % mapping rows', n; end if;

  n := pg_temp.als('{"role":"cashier"}', 'select count(*) from public.takeaway_plu_map');
  if n <> 0 then raise exception 'FAIL: a cashier reads % mapping rows', n; end if;

  n := pg_temp.als('{"role":"management"}',
    'with u as (update public.takeaway_plu_map set ls_product_name = ls_product_name where id = (select min(id) from public.takeaway_plu_map) returning 1) select count(*) from u');
  if n <> 1 then raise exception 'FAIL: management cannot save a mapping'; end if;

  n := pg_temp.als('{}',
    'with u as (update public.takeaway_plu_map set ls_product_name = ls_product_name returning 1) select count(*) from u');
  if n <> 0 then raise exception 'FAIL: an account without a role changed % mapping rows', n; end if;

  raise notice 'PASS takeaway_plu_map policies';
end $$;

rollback;
