import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const reviews = [
  {
    name: 'Esra Yıldırım',
    comment:
      'Tadilat süresince ev eşyalarımızı depoya almak zorundaydık. Kabinlere tek tek barkod yapıştırmaları ve online panelden sandık durumunu görmemiz büyük rahatlık sağladı. Teslim günü ekip tüm mobilyaları çiziksiz kurdu.',
    location: 'İstanbul',
    rating: 5,
    createdAt: new Date('2024-12-02T10:00:00Z'),
  },
  {
    name: 'Baran Aksu',
    comment:
      'Ofis taşınmamız sırasında arşiv kutularını geçici depoya aldılar. Nem sensörlü odalar ve haftalık raporlar sayesinde hiçbir evrak zarar görmedi. Planlanan tarihte hepsini yeni lokasyona taşıdılar.',
    location: 'Ankara',
    rating: 5,
    createdAt: new Date('2024-11-25T09:30:00Z'),
  },
  {
    name: 'Selin Uçar',
    comment:
      'Yurtdışı görevi boyunca mobilyalarımı klima kontrollü depolarında tuttular. Sigorta poliçesi ve fotoğraf raporları düzenli geldi, dönüşte eşyalarım aynen teslim edildi. Profesyonelliklerine hayran kaldım.',
    location: 'İzmir',
    rating: 5,
    createdAt: new Date('2024-11-10T08:15:00Z'),
  },
  {
    name: 'Kerem Doğan',
    comment:
      'Beyaz eşyalarımı kurutma makinesi dahil dikey sabitleme aparatlarıyla sakladılar. Teslim öncesi bakım raporu paylaşıp yerinde montaj yaptılar. Depolama ücretleri de hacme göre netti.',
    location: 'Bursa',
    rating: 5,
    createdAt: new Date('2024-11-05T14:45:00Z'),
  },
  {
    name: 'Hale Erdem',
    comment:
      'Showroom dekorlarımızı sezon aralarında teslim ediyoruz. Raf düzeni ve aksesuar listeleri kusursuz. Acele ihtiyaçta 24 saat içinde geri getiriyorlar, tüm süreçte WhatsApp desteği açık.',
    location: 'Antalya',
    rating: 4,
    createdAt: new Date('2024-10-28T11:20:00Z'),
  },
  {
    name: 'Mert Şen',
    comment:
      'Öğrenci evinden çıkarken kolilerimi ve gitarımı depoya bıraktım. Randevu saatinde gelip hepsini paketlediler, dönüşte yeni adrese taşıdılar. Uygun fiyatlı ve güvenilir bir hizmet.',
    location: 'Kocaeli',
    rating: 5,
    createdAt: new Date('2024-10-15T13:05:00Z'),
  },
]

async function main() {
  await prisma.review.deleteMany({})
  await prisma.review.createMany({
    data: reviews.map((review) => ({
      ...review,
      approved: true,
    })),
  })

  console.log('Depolama odaklı müşteri yorumları güncellendi.')
}

main()
  .catch((error) => {
    console.error('Yorumlar tohumlanamadı:', error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
