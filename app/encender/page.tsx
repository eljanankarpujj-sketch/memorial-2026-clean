"use client";

import { useState } from "react";

export default function EncenderPage() {
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"solo" | "dedicar">("solo");
  const [rememberedName, setRememberedName] = useState("");

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
          maxWidth: "520px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "72px", marginBottom: "16px" }}>🕯️</div>

        <h1
          style={{
            fontSize: "40px",
            lineHeight: 1.2,
            marginBottom: "28px",
            fontWeight: 500,
          }}
        >
          Encendido de vela conmemorativa
        </h1>

        <div style={{ textAlign: "left", marginBottom: "10px", fontSize: "22px" }}>
          Su nombre
        </div>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escriba su nombre"
          style={{
            width: "100%",
            padding: "16px",
            fontSize: "22px",
            borderRadius: "10px",
            border: "1px solid #7a541d",
            background: "rgba(0,0,0,0.45)",
            color: "#fff7df",
            marginBottom: "26px",
            boxSizing: "border-box",
          }}
        />

        <div style={{ textAlign: "left", marginBottom: "14px", fontSize: "22px" }}>
          Seleccione una opción
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "24px",
            textAlign: "left",
            fontSize: "22px",
          }}
        >
          <label>
            <input
              type="radio"
              name="mode"
              checked={mode === "solo"}
              onChange={() => setMode("solo")}
              style={{ marginRight: "10px" }}
            />
            Encender solo una vela
          </label>

          <label>
            <input
              type="radio"
              name="mode"
              checked={mode === "dedicar"}
              onChange={() => setMode("dedicar")}
              style={{ marginRight: "10px" }}
            />
            Dedicar esta vela a alguien
          </label>
        </div>

        {mode === "dedicar" && (
          <>
            <div style={{ textAlign: "left", marginBottom: "10px", fontSize: "22px" }}>
              Nombre de la persona recordada
            </div>

            <input
              value={rememberedName}
              onChange={(e) => setRememberedName(e.target.value)}
              placeholder="Escriba el nombre"
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "22px",
                borderRadius: "10px",
                border: "1px solid #7a541d",
                background: "rgba(0,0,0,0.45)",
                color: "#fff7df",
                marginBottom: "28px",
                boxSizing: "border-box",
              }}
            />
          </>
        )}

        <a
          href="/gracias"
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
