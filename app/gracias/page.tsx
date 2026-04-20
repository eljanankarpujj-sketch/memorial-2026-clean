"use client";

import { useEffect, useState } from "react";

export default function GraciasPage() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const res = await fetch("/api/candles");
        const data = await res.json();
        setCount(data.count ?? 0);
      } catch (error) {
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
      <div style={{ textAlign: "center", maxWidth: "900px" }}>
        <img
          src="/OIP.webp"
          alt="vela"
          style={{
            width: "220px",
            marginBottom: "20px",
            filter: "drop-shadow(0 0 25px rgba(255,180,80,0.8))",
          }}
        />

        <h1
          style={{ fontSize: "42px", marginBottom: "20px" }}
          dir="ltr"
        >
          Tu luz se ha unido a la memoria.
        </h1>

        <p
          style={{ fontSize: "26px", color: "#ead7a1", marginBottom: "28px" }}
          dir="ltr"
        >
          Cada vela mantiene vivo el recuerdo.
        </p>

        <div
          style={{ fontSize: "48px", marginTop: "20px" }}
          dir="ltr"
        >
          🕯️ {count === null ? "..." : count}
        </div>

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
            boxShadow: "0 10px 30px rgba(255,180,80,0.3)",
          }}
        >
          Encender otra vela
        </a>
      </div>
    </main>
  );
}
