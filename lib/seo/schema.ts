import { getSiteSettings } from '@/lib/settings'

type SettingsMap = Record<string, string | null | undefined>

type PostalAddress = {
  '@type': 'PostalAddress'
  streetAddress: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  addressCountry: string
}

const PRODUCTION_DOMAIN = 'https://depolamasirketi.com.tr'
const ENV_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || ''
const FALLBACK_DOMAIN = ENV_DOMAIN && !ENV_DOMAIN.includes('localhost') ? ENV_DOMAIN : PRODUCTION_DOMAIN

function normalizeDomain(raw?: string | null) {
  const candidate = raw && raw.trim().length ? raw.trim() : FALLBACK_DOMAIN
  const withoutProto = candidate.replace(/^https?:\/\//, '')
  if (withoutProto.startsWith('localhost')) {
    return PRODUCTION_DOMAIN
  }
  return `https://${withoutProto}`
}

function getSiteUrl(raw?: string | null): string {
  return normalizeDomain(raw)
}

function buildBusinessBase(settings: SettingsMap = {}) {
  const siteUrl = getSiteUrl(settings.domain)
  const resolvedLogo = settings.logo_url
    ? (settings.logo_url.startsWith('http') ? settings.logo_url : `${siteUrl.replace(/\/$/, '')}${settings.logo_url}`)
    : undefined

  let address: PostalAddress | undefined
  if (settings.address) {
    address = {
      '@type': 'PostalAddress',
      streetAddress: settings.address,
      addressCountry: settings.address_country || settings.country || 'TR',
    }

    const fallbackLocality = settings.address_locality || settings.city || 'İstanbul'
    const fallbackPostal = settings.address_postal_code || settings.postal_code || '34394'
    const fallbackRegion = settings.address_region || 'İstanbul'

    address.addressLocality = fallbackLocality
    address.postalCode = fallbackPostal
    address.addressRegion = fallbackRegion
  }

  return {
    '@type': 'SelfStorage',
    name: settings.company_name || settings.site_title || 'Depolama Şirketi',
    description: settings.seo_description || 'Profesyonel eşya depolama hizmetleri sunuyoruz.',
    url: siteUrl,
    telephone: settings.phone,
    email: settings.email,
    image: resolvedLogo,
    logo: resolvedLogo
      ? {
          '@type': 'ImageObject',
          url: resolvedLogo,
        }
      : undefined,
    priceRange: settings.price_range || '$$',
    address,
    areaServed: {
      '@type': 'Country',
      name: settings.area_served || 'Türkiye',
    },
  }
}

export async function generateLocalBusinessSchema() {
  const settings = await getSiteSettings()

  return {
    '@context': 'https://schema.org',
    ...buildBusinessBase(settings),
  }
}

export function generateReviewSchema(reviews: any[], settings?: SettingsMap) {
  if (!reviews?.length) {
    return null
  }

  const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length

  return {
    '@context': 'https://schema.org',
    ...buildBusinessBase(settings),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Number(averageRating.toFixed(1)),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review, index) => ({
      '@type': 'Review',
      position: index + 1,
      author: {
        '@type': 'Person',
        name: review.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.comment,
      datePublished: review.createdAt,
    })),
  }
}

export function generateFAQSchema(faqs: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBlogPostSchema(post: any, settings: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.seoDesc,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: settings.company_name || settings.site_title,
    },
    publisher: {
      '@type': 'Organization',
      name: settings.company_name || settings.site_title,
      logo: {
        '@type': 'ImageObject',
        url: settings.logo_url,
      },
    },
  }
}
