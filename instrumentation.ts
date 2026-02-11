// Next.js instrumentation hook — runs once on server startup

const SCHEMA_SQL = `CREATE TABLE IF NOT EXISTS propertys (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS agents (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS neighborhoods (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);`

const SEED_SQL = `INSERT INTO propertys ()
VALUES
  (),
  (),
  (),
  (),
  ()
ON CONFLICT DO NOTHING;

INSERT INTO agents ()
VALUES
  (),
  (),
  (),
  (),
  ()
ON CONFLICT DO NOTHING;

INSERT INTO blog_posts ()
VALUES
  (),
  (),
  (),
  (),
  ()
ON CONFLICT DO NOTHING;

INSERT INTO testimonials ()
VALUES
  (),
  (),
  (),
  (),
  ()
ON CONFLICT DO NOTHING;

INSERT INTO neighborhoods ()
VALUES
  (),
  (),
  (),
  (),
  ()
ON CONFLICT DO NOTHING;`

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    if (!process.env.DATABASE_URL) {
      console.warn('[db] DATABASE_URL not set — skipping schema initialization')
      return
    }

    try {
      const sql = (await import('./lib/db')).default
      await sql.unsafe(SCHEMA_SQL)
      await sql.unsafe(SEED_SQL)
      console.log('[db] Schema + seed data initialized')
    } catch (error) {
      console.error('[db] Initialization failed (non-fatal):', error)
    }
  }
}
