"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function GraciasPage() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const loadCount = async () => {
      const { count, error } = await supabase
        .from("candles")
        .select("*", { count: "exact", head: true });

      if (!error) {
        setCount(count ?? 0);
      } else {
        setCount(0);
      }
    };

    loadCount();
  }, []);

  return (
    <main
      style={{
        background: "radial-gradient(circle at center, #2a1a0a 0%, #000 55%)",
        color: "#f4e7c1",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ textAlign: "center" }}>

        {/* נר גדול */}
        <img
          src="/OIP.webp"
          alt="vela"
          style={{
            width: "220px",
            marginBottom: "20px",
            filter: "drop-shadow(0 0 25px rgba(255,180,80,0.8))"
          }}
        />

        {/* כותרת */}
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Tu luz se ha unido a la memoria
        </h1>

        {/* טקסט */}
        <p style={{ fontSize: "26px", color: "#ead7a1" }}>
          Cada vela mantiene viva la memoria
        </p>

        {/* מונה */}
        <div style={{ fontSize: "48px", marginTop: "20px" }}>
          {count === null ? "..." : count} 🕯️
        </div>

        {/* כפתור לחזור */}
        <a
          href="/encender"
          style={{
            display: "inline-block",
            marginTop: "40px",
            padding: "14px 28px",
            background: "linear-gradient(180deg, #c89b3c, #8a5a1f)",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 10px 30px rgba(255,180,80,0.3)"
          }}
        >
          Encender otra vela
        </a>

      </div>
    </main>
  );
}
