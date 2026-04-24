"use client";

import { useChat } from "ai/react";
import { useState } from "react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>💬 Chat Groq</h1>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 16,
          height: 400,
          overflowY: "auto",
          marginBottom: 16,
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              marginBottom: 12,
              padding: 8,
              backgroundColor: msg.role === "user" ? "#e3f2fd" : "#f5f5f5",
              borderRadius: 4,
            }}
          >
            <strong>{msg.role === "user" ? "Você" : "Groq"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
        {isLoading && <div style={{ color: "#999" }}>⏳ Groq digitando...</div>}
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Sua mensagem..."
          style={{
            flex: 1,
            padding: 10,
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
