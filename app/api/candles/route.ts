import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 🔥 יצירת נר
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_name, remembered_name } = body;

    const { error } = await supabase.from("candles").insert([
      {
        user_name,
        remembered_name,
      },
    ]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}

// 🔥 ספירת נרות
export async function GET() {
  try {
    const { count, error } = await supabase
      .from("candles")
      .select("*", { count: "exact", head: true });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ count }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
