"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed.");
        return;
      }

      // ✅ Login OK → cookie set by server
      router.push("/homepage");
    } catch (err) {
      setError("Unexpected error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F6F8F6] font-display antialiased text-[#111813]">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#E0F5E5] to-transparent -z-10 opacity-60 pointer-events-none" />

      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Top Bar */}
        <div className="flex items-center px-4 py-4 justify-between">
          <Link
            href="/"
            className="flex size-12 items-center justify-center rounded-full hover:bg-slate-100 transition"
          >
            <span className="material-symbols-outlined text-[24px]">
              arrow_back
            </span>
          </Link>
        </div>

        {/* Hero */}
        <div className="flex flex-col items-center pt-4 pb-6 px-6">
          <div className="size-24 rounded-full bg-gradient-to-tr from-[#DBE6DE] to-white shadow-sm flex items-center justify-center mb-6 border border-white/60">
            <div
              className="size-16 rounded-full bg-cover bg-center opacity-80"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDInIRnRKZygy5_avyg7ubgxxxvXw2i8FfZSNk-2v20c6DP1Ev5Wskl-IHsLtFTcb_e6cfrX6uO7bJoHWIvumIFX9TbdE5v6ggvVcBzUpt9BoF0DGjoO4Qb-IDgnF9RWXc8zTCCG1Q9bCZ8LTiRsgL7NStfTJfD4hCi7G6MgLTjblcjIibJiyqn_Mwvow5jkWaNU23ZbdEaNqXGDsYykWH7D7kwoyAFzXKBmXhL31qiHbS1ZN-x6cd65GhCoIcjjMP7Z4SOd5NbVEuE')",
              }}
            />
          </div>

          <h1 className="text-[32px] font-bold tracking-tight text-center">
            Welcome Back
          </h1>
          <p className="text-[#61896B] text-base font-medium pt-2 text-center max-w-xs">
            Enter your email to access the Lymph Flow Reset.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="flex-1 w-full max-w-[480px] mx-auto px-6 flex flex-col gap-5"
        >
          {/* Email */}
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold ml-1">Email</span>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#61896B] material-symbols-outlined">
                mail
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-14 rounded-xl border border-[#DBE6DE] bg-white pl-12 pr-4 text-base focus:border-[#13EC49] focus:ring-1 focus:ring-[#13EC49]/40 transition"
              />
            </div>
          </label>

          {/* Error */}
          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

          {/* Login */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full h-14 rounded-xl bg-emerald-700 [#13EC49] text-white [#102215] font-bold shadow-sm hover:brightness-105 active:scale-[0.98] transition disabled:opacity-60"
          >
            {loading ? "Checking access..." : "LogIn"}
          </button>
        </form>

        {/* Footer */}
        <div className="py-8 text-center">
          <p className="text-[#61896B] text-sm">
            Access restricted to Neuraxis members
          </p>
        </div>
      </div>
    </div>
  );
}
