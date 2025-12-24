import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-50 font-display antialiased text-[#111814] dark:text-[#f6f8f7] selection:bg-primary selection:text-[#102219] min-h-screen">
      <div className="relative flex h-full min-h-screen w-full flex-col justify-between overflow-x-hidden md:max-w-md mx-auto bg-background-light dark:bg-background-dark transition-colors duration-300">
        {/* Header */}
        <header className="flex items-center justify-center px-6 py-6 z-10 animate-fade-in">
          <div className="flex items-center gap-2 opacity-90">
            <span className="material-symbols-outlined text-3xl text-green-500 ">
              spa
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-500 dark:text-black [#f6f8f7]">
              Lymph Flow
            </span>
          </div>
        </header>

        {/* Main Visual */}
        <main className="flex-1 flex flex-col items-center px-4 md:px-6 relative w-full justify-center">
          <div className="w-full h-full max-h-[60vh] relative rounded-[32px] overflow-hidden shadow-2xl shadow-[#618975]/10 dark:shadow-none mb-4 group/image">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover/image:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZcdg-yRUdNI8dYFjnoxTHkZOcXm0YdbHqb1i49MT07CEW7g4qgECbiMv8TmiAFP63i1g-ZAIRhvjhJQyLBUe9hS8_pQlhVPKkCo_kB5Ygwe_fgacXwgviOaeQkIPOgn_9oHfL5MlqNHKYe7eY9TTAsIDifThKWXnXK3wXQpizmE1mMWDUazLqOmGdTbwxQrEE6cs4Oy8IQp9naqcViQC-kuU-rH1lQ1q2ppqyME844cQlsaVABIyv0pAPY376oqaJAVuuREe8qFbr')",
              }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-light/10 via-transparent to-transparent dark:from-background-dark/20" />
            <div className="absolute inset-0 bg-[#618975]/10 mix-blend-overlay" />
          </div>
        </main>

        {/* Footer / Content */}
        <footer className="flex flex-col items-center w-full px-6 pb-10 pt-4 z-10 bg-background-light dark:bg-background-dark">
          {/* Headline */}
          <div className="flex flex-col items-center text-center gap-2 mb-8 w-full">
            <h1 className="text-black [#102219] dark:text-black [#f6f8f7] text-[32px] md:text-4xl font-bold leading-[1.15] tracking-tight">
              Reactivate Your <br />
              <span className="text-[#618975] dark:text-primary font-light italic">
                Lymphatic Flow
              </span>
            </h1>

            <p className="text-[#618975] dark:text-gray-400 text-base font-normal leading-relaxed max-w-[280px] pt-2">
              Personalized recipes based on your body.
            </p>
          </div>

          {/* Indicators */}
          <div aria-hidden="true" className="flex gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#102219] dark:bg-primary transition-all duration-300" />
            <div className="w-2 h-2 rounded-full bg-neutral-200 " />
            <div className="w-2 h-2 rounded-full bg-neutral-200 " />
          </div>

          {/* CTA */}
          <Link
            href="/login"
            // >
            // <button/
            className="w-full max-w-120 h-12 bg-emerald-600 text-white hover:bg-[#0fdc75] active:scale-[0.98] transition-all duration-300 rounded-xl flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
          >
            <span className="text-white text-base font-bold tracking-[0.015em]">
              Start Now
            </span>
            <span className="material-symbols-outlined text-white text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
            {/* </button> */}
          </Link>

          {/* Secondary link */}
          <div className="mt-4 pt-1">
            <Link
              href={"/login"}
              className="text-[#618975] dark:text-[#9aaeb5] hover:text-[#102219] dark:hover:text-primary text-sm font-medium transition-colors cursor-pointer"
            >
              I already have an account
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
