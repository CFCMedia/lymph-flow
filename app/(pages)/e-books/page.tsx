import BottomNavbar from "@/app/components/Navbar";
import Link from "next/link";

export default function EbooksPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark pb-24">
        {/* Header */}
        <div className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between">
          <Link
            href="/homepage"
            className="flex size-12 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              arrow_back
            </span>
          </Link>

          <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Digital Library
          </h2>
        </div>

        {/* Intro */}
        <div className="flex flex-col px-6 pt-4 pb-6 text-center">
          <h1 className="font-serif text-[32px] font-medium leading-[1.2] mb-3">
            Curated wisdom for your journey
          </h1>
          <p className="text-text-muted text-base leading-relaxed px-2">
            Ancient wisdom, curated for your modern ritual to accelerate your
            Lymph Flow Reset.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 px-4 pb-4">
          {/* CARD 1 */}
          <EbookCard
            tag="Morning Ritual"
            time="7 mins read"
            title="Accelerated Metabolism"
            description="Includes bed movements & sabotaging foods guide to kickstart your day."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA_qZmD72vQKJ0JZCNtxXYdNrO0t3kQMQYw-Ja7LDjmUbTD-VK-TnK2OwZRl_uzfIBLJb0v5r4P0xd8V0mFk7OcwTFusE_HCbZtWlW-KIw0zkZpj0spoWAJ36hmuoZHoVmxptyPofejNmIaYKWHOS2Vwqg660l8AULOAiwqOkOjC1-ORZlyi0Y5ka99HrtLeH2COrHdyd6swQzKJhxMD0S-Pp7wrJi518O4HkJc1Adix5Hj3Bm3eo6H55RvxP--Rj4VmV6gh42wKpHq"
            primary
          />

          {/* CARD 2 */}
          <EbookCard
            tag="Mindfulness"
            time="90 secs read"
            title="Anti-Cortisol Protocol"
            description="Master your stress with Monk's breathing & Serenity tea recipe."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBYVvKBGnZ9Cb28-OiwOHD-OZz31W1cMRDORdq2kWa-0W5aD0bIFIBuuTmbsGBrJs_SKbGFaT__Vagqsc60GnRdBL7tqPbhkvBHkVw6lCErBrzp4qFr27GpAGk_LisOjOkTA2l4DIWfJEJbShirjsymF_yU9GLOmOXYLpoH8mVduT8srTOOgO7856aEQt972zvTHPx25wNISZKhBkEcHP57PBoaxowij9sI9XOGVpUaHAsuK98zvmqhSxcrKf4GKc9-SwFKUbNzx-s9"
            primary
          />

          {/* CARD 3 */}
          <EbookCard
            tag="Beauty"
            time="12 mins read"
            title="Secret for Radiant Skin"
            description="Go beyond surface level with lymphatic facial massage & skin nutrition."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDPh7iMnqF193YQX9gizaqkcatKFdj3q_6D1uA8Snm-saAehjGX7KnN9AvGqnB9_Vbw_8JHNIRx6OtBgwwt75bUPSdu-Wa58pQEKv_swgghtOU3VRW91Gw0bhkfc7rWzVxWpfHkB5w-9IEcfZ_2dfHXC1F4zkf0ZxwqNBWI1Qyor_iS_P2lhLfPrJcglit8CjZIzbkhj2pFtmesE_eIVyapZSFWF8Ud1amqpyHydedEBTNalW6LkCvzCjCNwb6nv47b9w40JtrU8AVd"
            primary
          />
        </div>

        {/* Quote */}
        <div className="pb-16 text-center px-8">
          <p className="text-text-muted/60 text-xs font-serif italic">
            "The body heals with play, the mind heals with laughter, and the
            spirit heals with joy."
          </p>
        </div>

        <BottomNavbar />
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function EbookCard({
  tag,
  time,
  title,
  description,
  image,
  primary,
}: {
  tag: string;
  time: string;
  title: string;
  description: string;
  image: string;
  primary?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-white shadow-lg hover:shadow-md transition overflow-hidden">
      <div className="aspect-[4/3] bg-[#eef2f0] flex items-center justify-center p-6">
        <div
          className="w-[140px] aspect-[1/1.4] rounded shadow-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
              {tag}
            </span>
            <span className="text-xs text-text-muted font-medium">{time}</span>
          </div>

          <h3 className="font-serif text-2xl font-medium leading-tight">
            {title}
          </h3>

          <p className="text-text-muted text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <button
          className={`h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition
            ${
              primary
                ? "bg-emerald-500 hover:bg-emerald-600 text-white [#0d3323]"
                : "border-2 border-primary text-[#0d3323] hover:bg-primary"
            }`}
        >
          <span className="material-symbols-outlined text-[20px]">
            download
          </span>
          Download PDF
        </button>
      </div>
    </div>
  );
}

function BottomNavItem({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative flex flex-1 flex-col items-center justify-center gap-1 p-2 transition-colors
        ${
          active
            ? "text-primary font-bold"
            : "text-text-muted hover:text-text-main"
        }`}
    >
      {active && (
        <div className="absolute -top-[17px] w-8 h-1 bg-primary rounded-b-full shadow-lg" />
      )}
      <span className="material-symbols-outlined text-[24px]">{icon}</span>
      <span className="text-[10px] tracking-wide">{label}</span>
    </Link>
  );
}
