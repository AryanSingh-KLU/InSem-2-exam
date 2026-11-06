import React from "react";
import { createRoot } from "react-dom/client";
import Notification from "./Notification";
import "./style.css";

function App() {
  return (
    <main className="container">
      <h1>Notification Messages</h1>
      <p className="subtitle">React component using message and type props</p>

      <Notification
        message="This is an information message."
        type="info"
      />

      <Notification
        message="Warning! Please check your details before continuing."
        type="warning"
      />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
