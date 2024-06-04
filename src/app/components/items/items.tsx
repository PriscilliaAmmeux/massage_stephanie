import React from "react";

const items = ["Bien-être", "Massage", "Relaxation", "Chi Nei Tsang", "CQVT"];

export default function Items() {
  return (
    <div className="absolute flex gap-4 flex-row">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="text-lg italic font-semibold">{item}</div>
          {index < items.length - 1 && <div className="text-pink-500">•</div>}
        </React.Fragment>
      ))}
    </div>
  );
}
