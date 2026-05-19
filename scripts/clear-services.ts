import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  try {
    const result = await prisma.service.deleteMany()
    console.log(`Silinen hizmet sayısı: ${result.count}`)
  } catch (error) {
    console.error('Hizmetler silinirken hata oluştu:', error)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

main()
