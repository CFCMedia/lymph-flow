import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("vip_token")?.value;

  // 🔒 Rotas que exigem login
  const protectedRoutes = ["/homepage", "/e-books", "/recipe"];

  // 🌍 Rotas públicas (não podem ser acessadas se logado)
  const publicRoutes = ["/", "/login"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isPublicRoute = publicRoutes.includes(pathname);

  /**
   * 🔒 Tentando acessar rota protegida SEM token
   */
  if (isProtectedRoute && !token) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.searchParams.set("from", pathname); // opcional
    return NextResponse.redirect(loginUrl);
  }

  /**
   * 🚫 Tentando acessar / ou /login COM token
   */
  if (isPublicRoute && token) {
    const homeUrl = request.nextUrl.clone();
    homeUrl.pathname = "/homepage";
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/", // homepage pública
    "/login", // login
    "/homepage/:path*", // protegidas
    "/e-books/:path*",
    "/recipe/:path*",
  ],
};
