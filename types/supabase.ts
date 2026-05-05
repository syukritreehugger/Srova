// Supabase type definitions — hand-maintained from migrations until gen types is wired.
// RFC-009: extended with audit_log, dlq_alerts, canonical_orders, order_state_history.
// GenericTable requires Relationships: [] to satisfy @supabase/supabase-js GenericSchema.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type OrderSource = 'shopify' | 'takeaway' | 'manual';
export type OrderChannelType = 'delivery' | 'pickup' | 'dine_in';
export type OrderState =
  | 'received'
  | 'normalized'
  | 'pushing_ls'
  | 'ls_sent'
  | 'ls_accepted'
  | 'ls_rejected'
  | 'ls_failed'
  | 'shipday_sent'
  | 'complete'
  | 'cancelled';

export interface Database {
  public: {
    Tables: {
      canonical_orders: {
        Row: {
          id: string;
          schema_version: string;
          source: OrderSource;
          external_ref: string;
          location_key: string;
          order_type: OrderChannelType;
          status: OrderState;
          customer: Json;
          items: Json;
          payment: Json;
          vat_lines: Json;
          utm: Json | null;
          refund_markers: Json | null;
          cancel_reason: string | null;
          raw_payload_id: number | null;
          ls_order_id: string | null;
          ls_pushed_at: string | null;
          shipday_order_id: string | null;
          shipday_pushed_at: string | null;
          correlation_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          schema_version?: string;
          source: OrderSource;
          external_ref: string;
          location_key: string;
          order_type: OrderChannelType;
          status?: OrderState;
          customer: Json;
          items: Json;
          payment: Json;
          vat_lines: Json;
          utm?: Json | null;
          refund_markers?: Json | null;
          cancel_reason?: string | null;
          raw_payload_id?: number | null;
          ls_order_id?: string | null;
          ls_pushed_at?: string | null;
          shipday_order_id?: string | null;
          shipday_pushed_at?: string | null;
          correlation_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['canonical_orders']['Insert']>;
        Relationships: [];
      };
      raw_orders: {
        Row: {
          id: number;
          source: OrderSource | null;
          location_key: string;
          external_ref: string | null;
          raw_payload: Json | null;
          headers: Json | null;
          hmac_valid: boolean | null;
          received_at: string;
          shopify_order_id: number;
          shopify_order_name: string | null;
          line_items: Json | null;
        };
        Insert: {
          id?: number;
          source?: OrderSource | null;
          location_key: string;
          external_ref?: string | null;
          raw_payload?: Json | null;
          headers?: Json | null;
          hmac_valid?: boolean | null;
          received_at?: string;
          shopify_order_id: number;
          shopify_order_name?: string | null;
          line_items?: Json | null;
        };
        Update: Partial<Database['public']['Tables']['raw_orders']['Insert']>;
        Relationships: [];
      };
      order_state_history: {
        Row: {
          id: number;
          canonical_order_id: string;
          from_state: OrderState | null;
          to_state: OrderState;
          reason: string | null;
          attempt: number;
          correlation_id: string;
          occurred_at: string;
        };
        Insert: {
          id?: number;
          canonical_order_id: string;
          from_state?: OrderState | null;
          to_state: OrderState;
          reason?: string | null;
          attempt?: number;
          correlation_id: string;
          occurred_at?: string;
        };
        Update: Record<string, never>;
        Relationships: [];
      };
      dlq_alerts: {
        Row: {
          id: number;
          queue_name: string;
          msg_id: number;
          canonical_order_id: string | null;
          external_ref: string | null;
          source: OrderSource | null;
          location_key: string | null;
          last_error: Json;
          attempt_count: number;
          raw_payload_id: number | null;
          alerted_at: string | null;
          resolved_at: string | null;
          resolution_action: 'retry' | 'edit_and_replay' | 'discard' | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          queue_name: string;
          msg_id: number;
          canonical_order_id?: string | null;
          external_ref?: string | null;
          source?: OrderSource | null;
          location_key?: string | null;
          last_error: Json;
          attempt_count: number;
          raw_payload_id?: number | null;
          alerted_at?: string | null;
          resolved_at?: string | null;
          resolution_action?: 'retry' | 'edit_and_replay' | 'discard' | null;
          created_at?: string;
        };
        Update: Partial<Omit<Database['public']['Tables']['dlq_alerts']['Insert'], 'id'>>;
        Relationships: [];
      };
      audit_log: {
        Row: {
          id: number;
          actor_user_id: string | null;
          actor_email: string | null;
          action: string;
          subject_type: string;
          subject_id: string | null;
          location_key: string | null;
          before: Json | null;
          after: Json | null;
          occurred_at: string;
        };
        Insert: {
          id?: number;
          actor_user_id?: string | null;
          actor_email?: string | null;
          action: string;
          subject_type: string;
          subject_id?: string | null;
          location_key?: string | null;
          before?: Json | null;
          after?: Json | null;
          occurred_at?: string;
        };
        Update: Record<string, never>;
        Relationships: [];
      };
      dim_location: {
        Row: {
          location_key: string;
          display_name: string;
          ls_company_id: number;
          timezone: string | null;
          created_at: string;
        };
        Insert: {
          location_key: string;
          display_name: string;
          ls_company_id: number;
          timezone?: string | null;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['dim_location']['Insert']>;
        Relationships: [];
      };
      snooze_items: {
        Row: {
          id: string;
          location_key: string;
          plu: string;
          item_name: string;
          available: boolean;
          snoozed_until: string | null;
          snoozed_by: string | null;
          updated_at: string;
        };
        Insert: {
          id?: string;
          location_key: string;
          plu: string;
          item_name?: string;
          available?: boolean;
          snoozed_until?: string | null;
          snoozed_by?: string | null;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['snooze_items']['Insert']>;
        Relationships: [];
      };
      restaurant_status: {
        Row: {
          id: string;
          location_key: string;
          online: boolean;
          reason: string | null;
          changed_by: string | null;
          updated_at: string;
        };
        Insert: {
          id?: string;
          location_key: string;
          online?: boolean;
          reason?: string | null;
          changed_by?: string | null;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['restaurant_status']['Insert']>;
        Relationships: [];
      };
      opening_times: {
        Row: {
          id: string;
          location_key: string;
          day_of_week: number;
          open_time: string | null;
          close_time: string | null;
          is_closed: boolean;
          updated_at: string;
          changed_by: string | null;
        };
        Insert: {
          id?: string;
          location_key: string;
          day_of_week: number;
          open_time?: string | null;
          close_time?: string | null;
          is_closed?: boolean;
          updated_at?: string;
          changed_by?: string | null;
        };
        Update: Partial<Database['public']['Tables']['opening_times']['Insert']>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      order_source: OrderSource;
      order_channel_type: OrderChannelType;
      order_state: OrderState;
    };
  };
}
