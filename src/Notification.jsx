import React from "react";

export default function Notification({ message, type = "info" }) {
  return (
    <div className={`notification ${type}`} role="alert">
      <strong>{type === "warning" ? "Warning" : "Information"}</strong>
      <span>{message}</span>
    </div>
  );
}
