import BottomNavbar from "@/app/components/Navbar";
import Link from "next/link";
export default function HomeDashboardPage() {
  return (
    <div className="bg-[#F6F8F7] font-display text-[#111814] antialiased min-h-screen">
      <div className="relative min-h-screen max-w-md mx-auto bg-[#F6F8F7]">
        {/* HEADER */}
        <header className="flex items-center justify-between px-4 pt-4 pb-2">
          {/* <span className="material-symbols-outlined text-2xl">menu</span> */}
          <h1 className="mx-auto py-2 text-sm font-bold tracking-tight">
            Your Daily Reset
          </h1>
          {/* <span className="material-symbols-outlined text-2xl">
            account_circle
          </span> */}
        </header>

        <main className="px-4 pb-24 space-y-4">
          {/* MAIN CARD */}
          <section className="bg-white rounded-2xl overflow-hidden border border-gray-100">
            <div className="relative aspect-video bg-gray-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtfaX0Exg-T3lTN6FGEj8q9kSzIIsdAdSdDG4JleTDcwaFK8pHm-WCG-K7E-FW36zEywjqBy3wNx_utNCZwXLu9vlGN-wSEJQ8L5NIRgL5oupBrSFiYlyUk10MnKM3aRvXpA9TIoxcnxr-nyMFtDfMDWdRF29rUI0Uvas05-HXnqgA7f6HGKZEVh_vtvxyMXv0BpHiLCnIn7_4WAmrFqzEJFSXwN-UsvsnXNHo2N-42vHw4JAt3dzkeyQ-10gXPim19sVLy-Dv-YKn"
                className="w-full h-full object-cover"
                alt=""
              />

              <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">
                  auto_awesome
                </span>
                AI Generated
              </span>
            </div>

            <div className="p-4 space-y-3">
              <p className="text-[11px] font-semibold text-emerald-600 [#13EC80] uppercase">
                Recommended for Swelling Reduction
              </p>

              <h2 className="text-xl font-bold leading-tight">
                Japanese Anti-Edema Detox Recipe
              </h2>

              <div className="flex gap-4 text-xs text-[#618975]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  5 min prep
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    local_fire_department
                  </span>
                  45 kcal
                </span>
              </div>

              <button className="w-full h-11 rounded-xl bg-emerald-600 [#13EC80] text-white [#102219] font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98]">
                <span className="material-symbols-outlined text-base">
                  refresh
                </span>
                Generate New Recipe
              </button>
            </div>
          </section>

          {/* INFO */}
          <section className="grid grid-cols-2 gap-3">
            <InfoBox
              icon="schedule"
              title="Best Time"
              value="08:00 AM"
              desc="30 mins before breakfast"
            />
            <InfoList
              icon="science"
              title="The Science"
              items={["Improves lymph circulation", "Reduces fluid retention"]}
            />
          </section>

          {/* INGREDIENTS */}
          <section className="bg-white rounded-2xl border border-gray-100">
            <div className="p-4 pb-2">
              <h3 className="font-bold text-sm">Ingredients</h3>
            </div>

            <div className="px-4 pb-2">
              <div className="flex items-center gap-2 bg-[#F0F7F3] border border-[#13EC80]/30 rounded-xl p-3 text-xs">
                <span className="material-symbols-outlined text-emerald-500 [#13EC80] text-base">
                  tune
                </span>
                Smart adjustment: Low sodium preference
              </div>
            </div>

            <ul className="px-4 pb-4 space-y-2">
              {[
                "Ceremonial Matcha (2g)",
                "Warm Water (200ml)",
                "Fresh Ginger (5g)",
                "Manuka Honey (optional)",
              ].map((item) => (
                <li
                  key={item}
                  className="flex ps-4 items-center gap-3 text-sm last:border-0 py-2"
                >
                  <span className="w-5 h-5 rounded-md border border-emerald-500 [#13EC80] flex items-center justify-center">
                    <span className="w-2 h-2 bg-emerald-500 [#13EC80] rounded-full" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* PREPARATION */}
          <section>
            <div className="flex justify-between items-center mb-2 px-1">
              <h3 className="font-bold text-sm">Preparation Guide</h3>
              <span className="text-xs text-emerald-600 [#13EC80] font-semibold">
                View full steps
              </span>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzNMToWFPmuBYYP7bLvNc5RZRqk7yY5sQXwOpnYoK6qTOrHQdLlfPMvUqf13PU9jUJWxUKj8DVzwlJ66b2yWmQUVPzG_VOob8Tw-RgMdzIZtLBm8VoCcZnNWiVxn1JyxLmu7W8r1nYK5b5DOcRzK2sfUfNNUdodvnh-QsIVGizS0YRboK5FhL-_0YsGQl9AkLg1M04IvVGLqlJvlQAXJJhhFL-58Osl_aQm8ieZEs_VmdKqIwkOrHGkJPgZJc6rO7N9D1sHSORQGp1"
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl">
                    play_arrow
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* WARNING */}
          <section className="bg-[#FFF4E8] border border-[#FFD9B5] rounded-2xl p-4 flex gap-3">
            <span className="material-symbols-outlined text-orange-500">
              warning
            </span>
            <p className="text-xs leading-relaxed">
              Contains ginger. Limit intake if using blood thinners or consult a
              specialist.
            </p>
          </section>

          <div className=" bottom-0 left-0 right-0 bg-[#F6F8F7] px-4 pb-6 pt-3 max-w-md mx-auto">
            <button className="w-full h-14 rounded-xl bg-[#111814] text-white font-bold text-base flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              Log as Consumed
            </button>
          </div>
        </main>

        {/* FIXED CTA */}

        <BottomNavbar />
      </div>
    </div>
  );
}

/* ======= SMALL COMPONENTS ======= */

function InfoBox({
  icon,
  title,
  value,
  desc,
}: {
  icon: string;
  title: string;
  value: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4">
      <div className="flex items-center gap-2 text-emerald-600 [#13EC80] mb-2">
        <span className="material-symbols-outlined text-sm">{icon}</span>
        <span className="text-xs font-bold uppercase">{title}</span>
      </div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs text-[#618975]">{desc}</p>
    </div>
  );
}

function InfoList({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4">
      <div className="flex items-center gap-2 text-emerald-600 [#13EC80] mb-2">
        <span className="material-symbols-outlined text-sm">{icon}</span>
        <span className="text-xs font-bold uppercase">{title}</span>
      </div>
      <ul className="space-y-1">
        {items.map((i) => (
          <li key={i} className="text-xs flex gap-2">
            <span className="w-1.5 h-1.5 mt-1 rounded-full bg-green-600 [#13EC80]" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
