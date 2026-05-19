const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function checkServices() {
  const services = await prisma.service.findMany({
    select: { id: true, slug: true, name: true }
  })
  console.log(JSON.stringify(services, null, 2))
  process.exit(0)
}

checkServices()
