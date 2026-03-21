-- Run this in Supabase SQL Editor to set up the licenses table

create table licenses (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  license_key text unique not null,
  download_token text unique not null,
  download_used boolean default false,
  downloaded_at timestamptz,
  machine_id text,
  activated_at timestamptz,
  product text default 'AIGO Media Setup',
  amount_paid numeric,
  stripe_session_id text,
  expires_at timestamptz,
  created_at timestamptz default now()
);

-- Index for fast lookups
create index on licenses(license_key);
create index on licenses(download_token);
create index on licenses(email);

-- Row level security (only service key can write)
alter table licenses enable row level security;

create policy "Service key full access"
  on licenses for all
  using (true)
  with check (true);
