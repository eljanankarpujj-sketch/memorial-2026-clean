import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  const body = await req.json();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  await supabase.from("candles").insert({
    honoree_name: body.name
  });

  return new Response(JSON.stringify({ ok: true }));
}
