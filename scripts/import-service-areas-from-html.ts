import fs from 'fs'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const SOURCE_DIR = path.resolve('/Users/karakar/Downloads/1')

const collator = new Intl.Collator('tr', { sensitivity: 'base' })

function slugify(text: string): string {
  return text
    .replace(/İ/g, 'i')
    .replace(/I/g, 'i')
    .replace(/Ğ/g, 'g')
    .replace(/Ü/g, 'u')
    .replace(/Ş/g, 's')
    .replace(/Ö/g, 'o')
    .replace(/Ç/g, 'c')
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ')
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

interface ParsedArea {
  city: string
  slug: string
  description: string
  content: string | null
  metaTitle: string
  metaDescription: string
}

function parseHtmlFile(filePath: string): ParsedArea {
  const raw = fs.readFileSync(filePath, 'utf8')
  const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  const h1Match = raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  const focusKeywordMatch = raw.match(/<strong>Odak Anahtar Kelime:<\/strong>\s*([^<]+)/i)
  const displayTitle = normalizeWhitespace(focusKeywordMatch?.[1] || titleMatch?.[1] || h1Match?.[1] || path.basename(filePath, path.extname(filePath)))
  const metaDescriptionMatch = raw.match(/<strong>Meta Açıklama:<\/strong>\s*([^<]+)/i)
  const metaDescription = normalizeWhitespace(metaDescriptionMatch?.[1] || '')

  const baseCity = normalizeWhitespace(displayTitle.replace(/\s+eşya\s+depolama$/i, ''))
  const city = baseCity || displayTitle

  const articleMatch = raw.match(/<article[^>]*>([\s\S]*?)<\/article>/i)
  let articleHtml = articleMatch?.[1] || ''
  articleHtml = articleHtml.replace(/<div[^>]*class=['"]meta['"][^>]*>[\s\S]*?<\/div>/i, '')
  articleHtml = articleHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '')
  const cleanedContent = articleHtml.trim()

  const firstParagraphMatch = cleanedContent.match(/<p[\s\S]*?>([\s\S]*?)<\/p>/i)
  const firstParagraphText = normalizeWhitespace(stripHtml(firstParagraphMatch?.[1] || ''))
  const descriptionSource = firstParagraphText || metaDescription || displayTitle
  const description = descriptionSource.length > 240 ? `${descriptionSource.slice(0, 237).trimEnd()}...` : descriptionSource

  return {
    city,
    slug: slugify(displayTitle),
    description,
    content: cleanedContent || null,
    metaTitle: displayTitle,
    metaDescription: metaDescription || description,
  }
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    throw new Error(`Kaynak klasör bulunamadı: ${SOURCE_DIR}`)
  }

  const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((file) => file.toLowerCase().endsWith('.html'))
    .map((file) => path.join(SOURCE_DIR, file))

  if (files.length === 0) {
    throw new Error('HTML dosyası bulunamadı')
  }

  const parsedAreas = files.map((filePath) => parseHtmlFile(filePath))
  parsedAreas.sort((a, b) => collator.compare(a.city, b.city))

  const data = parsedAreas.map((area, index) => ({
    city: area.city,
    slug: area.slug,
    description: area.description,
    content: area.content,
    image: null,
    metaTitle: area.metaTitle,
    metaDescription: area.metaDescription,
    order: (index + 1) * 10,
    active: true,
  }))

  const existingCount = await prisma.serviceArea.count()
  console.log(`Mevcut hizmet bölgesi sayısı: ${existingCount}`)

  await prisma.$transaction([
    prisma.serviceArea.deleteMany({}),
    prisma.serviceArea.createMany({ data }),
  ])

  console.log(`Toplam ${data.length} hizmet bölgesi içe aktarıldı.`)
}

main()
  .catch((error) => {
    console.error('İçe aktarma sırasında hata oluştu:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
