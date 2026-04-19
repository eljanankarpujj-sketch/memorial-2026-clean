"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const submit = async () => {
    await fetch("/api/candles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    window.location.href = "/thank-you";
  };

  return (
    <main style={{
      background: "black",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>Día de memoria 2026 | יום הזיכרון 2026</h1>
      <input
        placeholder="לזכר מי"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submit}>הדלק נר</button>
    </main>
  );
}
