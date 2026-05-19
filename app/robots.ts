import { MetadataRoute } from 'next'

function normalizeBaseUrl(url?: string | null) {
  const fallback = 'https://depolamasirketi.com.tr'
  if (!url) return fallback
  const trimmed = url.trim()
  if (!trimmed) return fallback
  return trimmed.startsWith('http') ? trimmed : `https://${trimmed.replace(/^\/\//, '')}`
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL)

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/karakar/', '/api/'],
      },
    ],
    sitemap: new URL('/sitemap.xml', baseUrl).toString(),
  }
}
