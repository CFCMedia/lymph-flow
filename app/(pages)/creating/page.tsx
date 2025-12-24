import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading AI – Lymph Flow Reset",
};

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-[#F4FBF7] font-display antialiased flex flex-col items-center justify-between relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ECF9F2] via-[#F4FBF7] to-[#F4FBF7] pointer-events-none" />

      {/* Header */}
      <header className="pt-14 pb-4 z-10">
        <p className="text-[#8FA899] text-[11px] font-semibold tracking-[0.25em] uppercase">
          Lymph Flow Reset
        </p>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center z-10 px-6 w-full max-w-md">
        {/* Circle image */}
        <div className="relative w-56 h-56 mb-10">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#2F6F55]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmoTsU48LFY5bmmVyBXorfcu7--yeJAhXwN3LGzVaezcqFrlaehDxReKTwDxcduzOm5ILpdHmTnKO29fHlN-WBJhNc8uWjY_b3lFIxqTD9oEZwXJVEu-1kyZk9nj65LVmPcXIAEpIkxXerV9spo7uI0uapWrfDwvYCxDWr55GLWCu_MFOPdWdDnGuhjtj2t3_aCzE3mwxhqAGCZ4I8683COVHotVD5dVoAn_-xgmjXlsGCV7vHvcPtRPV4kPHUR_ZW426rTus-wE4x"
              alt="Lymphatic flow visualization"
              className="w-full h-full object-cover opacity-95"
            />
          </div>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-5xl">
              water_drop
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center space-y-3">
          <h2 className="text-[#102219] text-[22px] font-semibold leading-snug">
            Creating your <br /> personalized recipe...
          </h2>

          <div className="flex items-center justify-center gap-2 text-[#6B8F7C]">
            <span className="material-symbols-outlined text-[16px]">
              biotech
            </span>
            <p className="text-sm font-medium">
              Analyzing retention, metabolism, and safety.
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full max-w-[220px] mt-8 space-y-2">
          <div className="h-[3px] w-full bg-[#D9EDE3] rounded-full overflow-hidden">
            <div
              className="h-full bg-green-600 [#13EC80]"
              style={{ width: "65%" }}
            />
          </div>

          <div className="flex justify-between text-[10px] font-semibold tracking-wide">
            <span className="text-green-700 [#13EC80] uppercase">
              AI Processing
            </span>
            <span className="text-[#9CB8AA]">65%</span>
          </div>
        </div>
      </main>

      {/* Bottom spacing */}
      <div className="h-12" />
    </div>
  );
}
