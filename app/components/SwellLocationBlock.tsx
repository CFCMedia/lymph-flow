"use client";

import { useState } from "react";
import { FaWalking, FaShoePrints, FaHandPaper } from "react-icons/fa";
import { MdFace } from "react-icons/md";

type LocationOption = "legs" | "ankles" | "face" | "hands";

export default function SwellLocationBlock() {
  const [selected, setSelected] = useState<LocationOption>("ankles");

  const options = [
    {
      id: "legs" as LocationOption,
      label: "Legs",
      icon: <FaWalking className="text-emerald-600" size={28} />,
    },
    {
      id: "ankles" as LocationOption,
      label: "Ankles",
      icon: <FaShoePrints className="text-emerald-600" size={28} />,
    },
    {
      id: "face" as LocationOption,
      label: "Face",
      icon: <MdFace className="text-emerald-600" size={28} />,
    },
    {
      id: "hands" as LocationOption,
      label: "Hands",
      icon: <FaHandPaper className="text-emerald-600" size={28} />,
    },
  ];

  return (
    <div className="bg-white surface-light rounded-2xl shadow-soft border border-gray-200 p-6">
      <label className="block text-text-primary-light font-bold mb-4 text-base">
        Where do you swell most?
      </label>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => {
          const isActive = selected === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelected(option.id)}
              className={`flex flex-col items-center justify-center gap-2 rounded-2xl p-5 transition-all
                ${
                  isActive
                    ? "border-2 border-emerald-600 primary bg-green-50 primary/10"
                    : "bg-[#f3f6f4] border border-transparent hover:bg-[#eef3f0]"
                }`}
            >
              <div
                className={`${isActive ? "text-primary" : "text-[#6b8f7c]"}`}
              >
                {option.icon}
              </div>

              <span
                className={`text-sm font-semibold ${
                  isActive ? "text-primary-dark" : "text-text-primary-light"
                }`}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
