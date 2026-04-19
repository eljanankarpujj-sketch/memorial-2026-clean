"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background:
          "radial-gradient(circle at center, rgba(94,52,10,0.55) 0%, rgba(26,12,3,0.92) 35%, #000 75%)",
        color: "#f5e7be",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "620px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "88px",
            marginBottom: "18px",
            filter: "drop-shadow(0 0 18px rgba(255,190,90,0.35))",
          }}
        >
          🕯️
        </div>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: 1.15,
            margin: "0 0 28px 0",
            fontWeight: 500,
            color: "#f6e9c6",
            textShadow: "0 0 24px rgba(255,210,120,0.08)",
          }}
        >
          Bienvenidos a la Embajada de Israel en Paraguay
        </h1>

        <p
          style={{
            fontSize: "28px",
            lineHeight: 1.6,
            margin: "0 0 40px 0",
            color: "#e7d19a",
          }}
        >
          Para encender una vela en memoria, presione aquí
        </p>

        <a
          href="/encender"
          style={{
            display: "inline-block",
            textDecoration: "none",
            padding: "18px 42px",
            borderRadius: "12px",
            fontSize: "32px",
            fontWeight: 600,
            color: "#fff7df",
            background:
              "linear-gradient(180deg, #c08a39 0%, #9b6826 45%, #734818 100%)",
            boxShadow:
              "0 0 28px rgba(192,138,57,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
          }}
        >
          Encender vela
        </a>
      </div>
    </main>
  );
}
