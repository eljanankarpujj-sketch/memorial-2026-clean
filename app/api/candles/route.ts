import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  const { user_name, remembered_name } = body;

  // שמירת נר
  const { error } = await supabase.from("candles").insert([
    {
      user_name,
      remembered_name,
    },
  ]);

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  // עדכון מונה
  await supabase.rpc("increment_counter");

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
