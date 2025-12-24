"use client";
import { useState } from "react";

export default function SwellingLevel() {
  const options = ["Light", "Moderate", "Severe"] as const;
  const [selected, setSelected] =
    useState<(typeof options)[number]>("Moderate");

  return (
    <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6">
      <label className="block text-text-primary-light font-bold mb-4">
        Swelling Level
      </label>

      {options.map((label) => {
        const isActive = selected === label;

        return (
          <button
            key={label}
            type="button"
            onClick={() => setSelected(label)}
            className={`w-full flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all mb-3
              ${
                isActive
                  ? "border-2 border-emerald-500 bg-green-50"
                  : "bg-[#f3f6f4] hover:bg-[#eef3f0]"
              }`}
          >
            <span
              className={`font-medium ${
                isActive
                  ? "font-bold text-[#102219]"
                  : "text-text-primary-light"
              }`}
            >
              {label}
            </span>

            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center
                ${
                  isActive
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-gray-300 bg-white"
                }`}
            >
              {isActive && (
                <span className="w-2.5 h-2.5 bg-white rounded-full" />
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
