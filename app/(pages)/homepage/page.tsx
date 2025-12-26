import BottomNavbar from "@/app/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lymph Flow Reset – Recipe",
};

export default function RecipePage() {
  return (
    <>
      <div className="bg-[#F6F8F7] min-h-screen font-display antialiased">
        {/* APP CONTAINER */}
        <div className="relative min-h-screen w-full max-w-md mx-auto bg-[#F6F8F7] shadow-2xl overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#E8F5F0] to-transparent pointer-events-none z-0 opacity-60" />
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#13EC80]/10 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Header */}
          <header className="relative z-20 flex items-center px-6 py-5 justify-between sticky top-0 bg-[#F6F8F7]/90 backdrop-blur-md border-b border-gray-200">
            {/* <button className="flex size-10 items-center justify-center rounded-full bg-white/70 hover:bg-white transition shadow-sm border border-white/40">
              <span className="material-symbols-outlined text-xl text-[#111814]">
                arrow_back_ios_new
              </span>
            </button> */}

            <span className="mx-auto font-bold text-lg tracking-tight text-[#111814]">
              Recipe Details
            </span>

            {/* <button className="flex size-10 items-center justify-center rounded-full bg-white/70 hover:bg-white transition shadow-sm border border-white/40">
              <span className="material-symbols-outlined text-xl text-[#111814]">
                share
              </span>
            </button> */}
          </header>

          {/* Content */}
          <main className="relative z-10 flex-1 overflow-y-auto no-scrollbar px-5 pb-32 pt-4 space-y-8">
            {/* Intro */}
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-[#618975] text-xs font-bold tracking-wide uppercase mb-3">
                <span className="material-symbols-outlined text-base">eco</span>
                Natural Diuretic
              </div>

              <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111814] mb-3">
                JAPANESE <br /> ANTI-SWELLING RECIPE
              </h1>

              <p className="text-sm text-[#618975] leading-relaxed px-2">
                Based on scientific evidence of proven natural diuretic
                ingredients to eliminate fluid retention.
              </p>
            </div>

            {/* Ingredients */}
            <section className="bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden">
              <div className="bg-[#E0F2F1]/60 p-4 border-b border-gray-200 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#618975]">
                  grocery
                </span>
                <h2 className="font-bold text-sm tracking-wide uppercase text-[#111814]">
                  Ingredients
                </h2>
              </div>

              <div className="p-5 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#618975] mb-3">
                    Main Base
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "2 cups seedless watermelon cubes",
                      "1 medium cucumber chopped (with skin)",
                      "1 handful fresh parsley (approx. 1/4 cup)",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="material-symbols-outlined text-[#13EC80] text-lg">
                          check_circle
                        </span>
                        <span className="text-sm font-medium text-[#111814]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#618975] mb-3">
                    Optional to Boost
                  </h3>
                  <ul className="space-y-3 opacity-80">
                    {["Juice of 1 lemon", "1 glass cold water (200ml)"].map(
                      (item) => (
                        <li key={item} className="flex gap-3">
                          <span className="material-symbols-outlined text-[#618975] text-lg">
                            add_circle
                          </span>
                          <span className="text-sm text-[#111814]">{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* Why ingredients */}
            <section>
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#111814]">
                <span className="material-symbols-outlined text-[#13EC80]">
                  science
                </span>
                Why these 3 ingredients?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    name: "Watermelon",
                    text: "92% water, rich in potassium and L-citrulline. Helps relax blood vessels and flush fluids.",
                    source: "Dr. Axe",
                  },
                  {
                    name: "Cucumber",
                    text: "Rich in water & potassium. Naturally stimulates the kidneys to filter out toxins and reduce swelling.",
                    source: "Tua Saúde",
                  },
                  {
                    name: "Parsley",
                    text: "Potent natural diuretic high in chlorophyll. Can multiply urine production to quickly expel retention.",
                    source: "Vinmec",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold text-[#111814]">{item.name}</h3>
                      <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-md text-[#618975]">
                        Source: {item.source}
                      </span>
                    </div>
                    <p className="text-sm text-[#618975]">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* CTA */}
          {/* <div className="absolute bottom-6 left-0 w-full z-20 px-6">
            <button className="w-full bg-[#13EC80] hover:bg-[#0fd673] active:scale-[0.98] transition-all text-[#0A2E1E] font-bold text-lg h-14 rounded-xl shadow-lg shadow-[#13EC80]/30 flex items-center justify-center gap-2">
              Start 14-Day Cycle
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
          </div> */}
        </div>
      </div>
      <BottomNavbar />
    </>
  );
}
