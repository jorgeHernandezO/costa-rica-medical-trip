import { NextResponse } from 'next/server'

const locales = ['es', 'en']
const defaultLocale = 'es'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Verifica si la URL ya tiene el idioma (ej: /en/tratamientos)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Si no tiene idioma, redirige al español por defecto de manera invisible
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Evita que el middleware bloquee tus imágenes, estilos o archivos internos
    '/((?!_next|api|favicon.ico|images).*)',
  ],
}