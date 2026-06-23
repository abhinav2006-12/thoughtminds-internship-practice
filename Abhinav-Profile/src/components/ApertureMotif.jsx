import React from "react";

/**
 * Signature decorative motif — a camera aperture / iris ring,
 * nodding to the videography side without being literal.
 * Used sparingly as a section accent, never as the focal content.
 */
export default function ApertureMotif({ size = 120, blades = 6, spin = false, className = "" }) {
  const radius = size / 2;
  const innerRadius = radius * 0.32;
  const bladeAngle = (Math.PI * 2) / blades;

  const bladePoints = Array.from({ length: blades }, (_, i) => {
    const a1 = i * bladeAngle;
    const a2 = a1 + bladeAngle;
    const outerX1 = radius + radius * 0.92 * Math.cos(a1);
    const outerY1 = radius + radius * 0.92 * Math.sin(a1);
    const outerX2 = radius + radius * 0.92 * Math.cos(a2);
    const outerY2 = radius + radius * 0.92 * Math.sin(a2);
    const innerX = radius + innerRadius * Math.cos(a1 + bladeAngle / 2);
    const innerY = radius + innerRadius * Math.sin(a1 + bladeAngle / 2);
    return `${outerX1},${outerY1} ${innerX},${innerY} ${outerX2},${outerY2}`;
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={spin ? { animation: "spinSlow 40s linear infinite" } : undefined}
      aria-hidden="true"
    >
      <circle cx={radius} cy={radius} r={radius - 1} fill="none" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.4" />
      {bladePoints.map((pts, i) => (
        <polygon key={i} points={pts} fill="none" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.5" />
      ))}
      <circle cx={radius} cy={radius} r={innerRadius * 0.6} fill="none" stroke="var(--accent-amber)" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}
