const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const allowedStorageSlugs = [
  'ev-esyasi-depolama',
  'ofis-esyasi-depolama',
  'parca-esya-depolama',
  'arsiv-depolama',
  'buro-depolama',
  'evrak-depolama',
  'koli-depolama',
  'ogrenci-esya-depolama',
  'beyaz-esya-depolama',
]

async function deleteNonStorageServices() {
  try {
    const deleted = await prisma.service.deleteMany({
      where: {
        slug: {
          notIn: allowedStorageSlugs,
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

deleteNonStorageServices()
