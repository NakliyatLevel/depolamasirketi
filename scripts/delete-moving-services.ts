const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const movingServiceSlugs = [
  'ev-tasima',
  'villa-tasimaciligi',
  'parca-esya-tasimaciligi',
  'sehir-ici-evden-eve-nakliyat',
  'sehirler-arasi-evden-eve-nakliyat',
  'ofis-tasimaciligi',
  'banka-tasimaciligi',
  'hastane-tasimaciligi',
  'arsiv-tasimaciligi',
]

async function deleteMovingServices() {
  try {
    const deleted = await prisma.service.deleteMany({
      where: {
        slug: {
          in: movingServiceSlugs,
        },
      },
    })

    console.log(`${deleted.count} taşıma hizmeti silindi`)
    process.exit(0)
  } catch (error) {
    console.error('Hata:', error)
    process.exit(1)
  }
}

deleteMovingServices()
