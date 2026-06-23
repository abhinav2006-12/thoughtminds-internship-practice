import React from "react";
import { useReveal } from "../hooks/useReveal.js";

export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const { ref, visible } = useReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
