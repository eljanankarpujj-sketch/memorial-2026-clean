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
        <img
  src="/vela-final.webp"
  alt="vela"
  style={{
    width: "220px",
    marginBottom: "20px",
    filter: "drop-shadow(0 0 25px rgba(255,180,80,0.8))"
  }}
/>

        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Gracias por encender una vela en su memoria
        </h1>

        <p
          style={{ fontSize: "26px", color: "#ead7a1" }}
          dir="ltr"
        >
          Personas que ya encendieron una vela:
        </p>

        <div style={{ fontSize: "48px", marginTop: "12px" }}>
          {count === null ? "..." : count}
        </div>
      </div>
    </main>
  );
}
