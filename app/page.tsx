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
          "radial-gradient(circle at center, rgba(120,60,10,0.6) 0%, rgba(20,10,2,0.95) 40%, #000 80%)",
        color: "#f5e7be",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        {/* כותרת עליונה */}
        <div
          style={{
            fontSize: "22px",
            letterSpacing: "2px",
            marginBottom: "20px",
            color: "#e7d19a",
          }}
        >
          EMBAJADA DE ISRAEL EN PARAGUAY
        </div>

        {/* כותרת מרכזית */}
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "30px",
            fontWeight: 500,
            color: "#f6e9c6",
          }}
        >
          DÍA DE MEMORIA 2026
        </h1>

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
            borderRadius: "14px",
            fontSize: "28px",
            fontWeight: 600,
            color: "#fff7df",
            background:
              "linear-gradient(180deg, #d9a44c 0%, #a86e2c 50%, #6f4316 100%)",
            boxShadow:
              "0 0 40px rgba(217,164,76,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
            marginBottom: "60px",
          }}
        >
          Encender vela
        </a>

        {/* נר יפה (תמונה אמיתית) */}
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
            alt="vela"
            style={{
              width: "120px",
              filter: "drop-shadow(0 0 20px rgba(255,180,80,0.6))",
            }}
          />
        </div>
      </div>
    </main>
  );
}
