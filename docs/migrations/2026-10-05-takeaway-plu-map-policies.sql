-- takeaway_plu_map had RLS ON and zero policies (measured 05/10/2026), so Srova's own /menu
-- Takeaway tab read 0 rows and could save nothing: every unmapped Takeaway product stayed
-- unmapped (Frietbooster "Bicky Balls" and "Vegi mix" refused orders since 12/09). The
-- 08/09 backup has the table WITHOUT RLS; it was switched on later without a policy.
-- Same gate as Srova's other console tables (canonical_orders, dlq_alerts): an explicit
-- management/admin role, or developer. n8n writes with the service key and is unaffected.
-- Names follow <table>_<command> (fos-nachtwacht policy_naam).
begin;
create policy takeaway_plu_map_select on public.takeaway_plu_map for select to authenticated
  using (public.auth_is_developer()
         or coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role') in ('management', 'admin'), false));
create policy takeaway_plu_map_update on public.takeaway_plu_map for update to authenticated
  using (public.auth_is_developer()
         or coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role') in ('management', 'admin'), false))
  with check (public.auth_is_developer()
         or coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role') in ('management', 'admin'), false));
commit;
