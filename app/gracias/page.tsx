"use client";

import { useEffect, useState } from "react";

export default function GraciasPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("candleCount");
    const current = saved ? parseInt(saved) : 0;

    const newCount = current + 1;

    localStorage.setItem("candleCount", newCount.toString());
    setCount(newCount);
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
        <div style={{ fontSize: "80px", marginBottom: "20px" }}>🕯️</div>

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
          {count}
        </div>
      </div>
    </main>
  );
}
