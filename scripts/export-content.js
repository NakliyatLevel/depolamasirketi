const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const settings = await prisma.siteSetting.findMany()
  const services = await prisma.service.findMany({ orderBy: { order: 'asc' } })
  const solutions = await prisma.solution.findMany({ orderBy: { order: 'asc' } })
  const serviceAreas = await prisma.serviceArea.findMany({ orderBy: { order: 'asc' } })

  console.log(JSON.stringify({ settings, services, solutions, serviceAreas }, null, 2))
  process.exit(0)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
