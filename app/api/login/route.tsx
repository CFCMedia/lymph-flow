export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

/* ================= ENV ================= */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error("[LOGIN] ❌ Missing Supabase environment variables", {
    hasUrl: !!SUPABASE_URL,
    hasServiceRole: !!SERVICE_ROLE,
  });
}

/* ================= ROUTE ================= */

export async function POST(req: Request) {
  console.log("🟢 [LOGIN] Step 1: Route hit");

  try {
    /* ---------- Parse body ---------- */
    console.log("🟢 [LOGIN] Step 2: Parsing body");
    const { email } = await req.json();
    console.log("🟢 [LOGIN] Body:", { email });

    if (!email || typeof email !== "string") {
      console.log("🔴 [LOGIN] Invalid email payload");
      return NextResponse.json(
        { ok: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const normalized = email.trim().toLowerCase();

    /* ---------- Supabase client ---------- */
    console.log("🟢 [LOGIN] Step 3: Creating Supabase client");

    const supabase = createClient(SUPABASE_URL!, SERVICE_ROLE!);

    /* ---------- Query ---------- */
    console.log("🟢 [LOGIN] Step 4: Querying Supabase");

    const { data, error } = await supabase
      .from("shopify_orders")
      .select("id, email, is_active")
      .ilike("email", normalized)
      .maybeSingle();

    console.log("🟢 [LOGIN] Supabase result:", { data, error });

    /* ---------- Errors ---------- */
    if (error) {
      console.error("🔴 [LOGIN] Supabase query error:", error);
      return NextResponse.json(
        { ok: false, error: "Database query failed." },
        { status: 500 }
      );
    }

    // ❌ Email não encontrado
    if (!data) {
      console.warn("🔴 [LOGIN] Email not found:", normalized);
      return NextResponse.json(
        {
          ok: false,
          error: "Email not found. Access restricted to Neuraxis members.",
        },
        { status: 401 }
      );
    }

    // 🚫 Conta inativa
    if (data.is_active === false) {
      console.warn("🔴 [LOGIN] Inactive account:", normalized);
      return NextResponse.json(
        {
          ok: false,
          error: "Inactive account. Please renew your membership.",
        },
        { status: 403 }
      );
    }

    /* ---------- Success ---------- */
    console.log("🟢 [LOGIN] Step 5: Login authorized");

    const token = crypto.randomUUID();

    const res = NextResponse.json({
      ok: true,
      message: "Login authorized.",
      email: normalized,
    });

    // 🔐 Cookie de sessão
    res.cookies.set({
      name: "vip_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });

    return res;
  } catch (err: any) {
    console.error("🔥 [LOGIN] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
