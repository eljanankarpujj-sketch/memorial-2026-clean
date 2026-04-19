"use client";

export default function Home() {
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
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "56px", marginBottom: "18px" }}>🕯️</div>

        <h1
          style={{
            fontSize: "44px",
            lineHeight: 1.2,
            marginBottom: "24px",
            fontWeight: 500,
          }}
        >
          Bienvenidos a la Embajada de Israel en Paraguay
        </h1>

        <p
          style={{
            fontSize: "24px",
            lineHeight: 1.6,
            marginBottom: "36px",
            color: "#ead7a1",
          }}
        >
          Para encender una vela en memoria, presione aquí
        </p>

        <a
          href="/encender"
          style={{
            display: "inline-block",
            background: "linear-gradient(180deg, #b8873a 0%, #7a541d 100%)",
            color: "#fff7df",
            textDecoration: "none",
            padding: "16px 34px",
            borderRadius: "10px",
            fontSize: "28px",
            fontWeight: 600,
            boxShadow: "0 0 24px rgba(184,135,58,0.28)",
          }}
        >
          Encender vela
        </a>
      </div>
    </main>
  );
}
