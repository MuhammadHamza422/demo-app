import React from "react";

export default function Separator({ width = 1180, height = 1519, top = 0, left = 130 }) {
  return (
    <div
      className="border-t border-[#E5E5E5] relative"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `${top}px`,
        left: `${left}px`,
        opacity: 1,
      }}
    ></div>
  );
}
