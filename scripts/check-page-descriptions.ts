import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const keys = [
    'page_desc_iletisim',
    'page_desc_blog',
    'page_desc_hizmetlerimiz',
    'page_desc_sss',
    'page_desc_referanslar',
    'page_desc_teklif_al',
    'page_desc_galeri',
    'page_desc_hizmet_bolgeleri',
    'contact_info_description',
    'contact_form_description',
    'footer_description',
    'services_description',
    'features_description',
    'process_description',
    'faq_description',
    'areas_description',
    'partners_description',
    'blog_description',
    'seo_description',
  ]

  const settings = await prisma.siteSetting.findMany({
    where: { key: { in: keys } },
    orderBy: { key: 'asc' },
  })

  settings.forEach((setting) => {
    console.log(`${setting.key}: ${setting.value}`)
  })
}

main()
  .catch((error) => {
    console.error('Sayfa açıklamaları okunurken hata oluştu:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
