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
        {/* כותרת ראשית */}
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "10px",
            fontWeight: 500,
            color: "#f6e9c6",
          }}
        >
          DÍA DE MEMORIA 2026
        </h1>

        {/* תת כותרת */}
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "30px",
            fontWeight: 400,
            color: "#e7d19a",
          }}
        >
          Bienvenidos a la Embajada de Israel en Paraguay
        </h2>

        {/* טקסט */}
        <p
          style={{
            fontSize: "24px",
            marginBottom: "40px",
            color: "#e7d19a",
          }}
        >
          Para encender una vela en memoria, presione aquí
        </p>

        {/* כפתור */}
        <a
          href="/encender"
          style={{
            display: "inline-block",
            textDecoration: "none",
            padding: "18px 42px",
            borderRadius: "12px",
            fontSize: "28px",
            fontWeight: 600,
            color: "#fff7df",
            background:
              "linear-gradient(180deg, #c08a39 0%, #9b6826 45%, #734818 100%)",
            boxShadow:
              "0 0 28px rgba(192,138,57,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
            marginBottom: "50px",
          }}
        >
          Encender vela
        </a>

        {/* הנר למטה */}
        <div
          style={{
            fontSize: "80px",
            filter: "drop-shadow(0 0 18px rgba(255,190,90,0.4))",
          }}
        >
          🕯️
        </div>
      </div>
    </main>
  );
}
