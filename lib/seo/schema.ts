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

function getSiteUrl(raw?: string | null): string {
  if (!raw || raw.trim().length === 0) {
    return process.env.NEXT_PUBLIC_SITE_URL || 'https://depolamasirketi.com.tr'
  }
  const hasProtocol = raw.startsWith('http://') || raw.startsWith('https://')
  return hasProtocol ? raw : `https://${raw.replace(/^https?:\/\//, '')}`
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

    if (settings.address_locality || settings.city) {
      address.addressLocality = settings.address_locality || settings.city || undefined
    }
    if (settings.address_region) {
      address.addressRegion = settings.address_region
    }
    if (settings.address_postal_code || settings.postal_code) {
      address.postalCode = settings.address_postal_code || settings.postal_code || undefined
    }
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
