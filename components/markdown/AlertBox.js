import React from "react";

export default function AlertBox({ color = "blue", children }) {
  const colors = {
    red: {
      bg: "bg-red-50",
      border: "border-red-600",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-600",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-600",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-600",
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-600",
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-600",
    },
  };

  return (
    <div
      className={`border rounded-md mb-4 ${colors[color]?.bg} ${colors[color]?.border} px-4 py-2`}
    >
      {children}
    </div>
  );
}
