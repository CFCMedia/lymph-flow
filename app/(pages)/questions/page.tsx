import SwellingLevel from "@/app/components/SwellingLevel";
import SwellLocationBlock from "@/app/components/SwellLocationBlock";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lymph Flow Reset – Questionnaire",
};

export default function QuestionnairePage() {
  return (
    <div className="bg-background-light min-h-screen font-display antialiased transition-colors duration-300">
      {/* APP CONTAINER */}
      <div className="relative min-h-screen w-full max-w-md mx-auto bg-background-light shadow-2xl overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#e8f5f0] to-transparent pointer-events-none z-0 opacity-70" />
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Header */}
        <div className="relative z-20 flex items-center px-6 py-5 justify-between backdrop-blur-md bg-background-light/80 sticky top-0 border-b border-gray-100">
          <Link
            href="/"
            className="flex size-10 items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors text-text-primary-light shadow-sm border border-gray-200"
          >
            <span className="material-symbols-outlined text-xl">
              arrow_back_ios_new
            </span>
          </Link>

          <span className="text-text-primary-light font-bold text-lg tracking-tight">
            Personalization
          </span>

          <div className="w-10" />
        </div>

        {/* Scrollable content */}
        <div className="relative z-10 bg-green-100/40 flex-1 overflow-y-auto no-scrollbar px-6 pb-36 pt-4 space-y-5">
          {/* Intro */}
          <div className="mb-6">
            <h1 className="text-text-primary-light text-2xl font-bold mb-2">
              Let&apos;s get to know you
            </h1>
            <p className="text-text-secondary-light text-sm font-medium">
              Complete your profile to calibrate the AI for your metabolic and
              lymphatic needs.
            </p>
          </div>

          {/* Age */}
          <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6">
            <label className="block text-text-primary-light font-bold mb-3">
              Age
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="e.g. 28"
                className="w-full bg-[#f3f6f4] rounded-xl px-4 py-3.5 text-lg font-medium text-text-primary-light placeholder-gray-400 focus:ring-0 focus:border-primary border border-transparent"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-text-secondary-light">
                years
              </span>
            </div>
          </div>

          {/* Weight */}
          <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6">
            <label className="block text-text-primary-light font-bold mb-3">
              Current Weight
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="e.g. 60"
                className="w-full bg-[#f3f6f4] rounded-xl px-4 py-3.5 text-lg font-medium text-text-primary-light placeholder-gray-400 focus:ring-0 focus:border-primary border border-transparent"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-text-secondary-light">
                kg
              </span>
            </div>
          </div>

          {/* Swelling Level */}
          <SwellingLevel />

          <SwellLocationBlock />

          {/* Health Conditions */}
          <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6">
            <label className="block text-text-primary-light font-bold mb-4">
              Health Conditions
            </label>

            {["High blood pressure", "Diabetes", "None", "Other"].map(
              (label) => (
                <label
                  key={label}
                  className="flex items-center cursor-pointer mb-4"
                >
                  <input
                    type="checkbox"
                    className="size-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="ml-3 font-medium text-text-primary-light">
                    {label}
                  </span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="absolute bottom-0 left-0 w-full z-20 p-6 bg-background-light/95 backdrop-blur-md border-t border-gray-100">
          <Link
            href={"/creating"}
            className="w-full bg-emerald-700 hover:bg-[#0fd673] active:scale-[0.98] transition-all text-neutral-100 [#0a2e1e] font-bold text-lg h-14 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group"
          >
            Generate My Plan
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
              auto_awesome
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
