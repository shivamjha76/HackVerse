"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("Failed to connect to backend ❌");
      });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">HackVerse</h1>

        <p className="text-lg">{message}</p>
      </div>
    </main>
  );
}