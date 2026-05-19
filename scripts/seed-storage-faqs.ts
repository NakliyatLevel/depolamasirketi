import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const storageFaqs = [
  {
    question: 'Eşya depolama hizmeti adım adım nasıl ilerler?',
    answer:
      'Adresinizden sigortalı şekilde teslim aldığımız eşyaları kategori bazlı barkodlayıp antibakteriyel ambalajlarla sarıyoruz. Klima kontrollü depoya girişte her sandık fotoğraflanıyor, kabin numaraları panelinize işleniyor ve istediğiniz tarihe göre teslim planı oluşturuluyor.',
  },
  {
    question: 'Depolama alanlarının güvenliği ve iklim koşulları nasıl sağlanıyor?',
    answer:
      'Tesislerimiz 7/24 kamera, hareket ve duman sensörleriyle izleniyor; girişler kartlı turnikelerle sınırlandırılıyor. Nem ve sıcaklık değerleri otomasyonla takip edilerek ahşap, tekstil ve elektronik cihazların formunu koruyan %50 nem, 18-24°C sıcaklık bandı sabit tutuluyor.',
  },
  {
    question: 'Eşyalarım sigortalanıyor mu ve sözleşmede neler yer alıyor?',
    answer:
      'Her müşteri için depolama poliçesi düzenlenerek sandık listesi, teminat limiti ve muafiyetler sözleşmeye eklenir. Teslim öncesi poliçe numarası sizinle paylaşılır, süreç boyunca gerçekleşen her hareket dijital teslim tutanaklarında imzalanır.',
  },
  {
    question: 'Hangi ürünleri depolayabiliyorum ve paketleme malzemelerini siz mi sunuyorsunuz?',
    answer:
      'Mobilya, beyaz eşya, arşiv kutusu, enstrüman ve sezonluk dekorlar depoya kabul edilir; bozulabilir gıda ile yanıcı kimyasallar alınmaz. Koli, streç, balonlu naylon ve özel sandıklar tarafımızca temin edilip fiyatlandırmaya dâhil edilir.',
  },
  {
    question: 'Depoda duran eşyalarıma nasıl erişirim ve teslim süresi nedir?',
    answer:
      'Online panelden hangi kabinde ne olduğunu görebilir, teslim talebini gün ve saat seçerek oluşturabilirsiniz. Şehir içi taleplerde 24 saat, şehirlerarası sevkiyatlarda 48-72 saat içinde kapınıza teslimat planlarız.',
  },
  {
    question: 'Ödeme planları ve minimum depolama süresi nasıl?',
    answer:
      'Hacme göre öde modeliyle aylık faturalandırma yapıyor, kredi kartı, havale veya otomatik tahsilat seçenekleri sunuyoruz. Minimum depolama süresi 30 gündür; uzun dönem sözleşmelerde indirimli tarifeler ve ücretsiz transfer hakkı tanımlanır.',
  },
]

async function upsertSetting(key: string, value: string) {
  await prisma.siteSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  })
}

async function main() {
  await prisma.fAQ.deleteMany({})
  await prisma.fAQ.createMany({
    data: storageFaqs.map((faq, index) => ({
      question: faq.question,
      answer: faq.answer,
      category: 'Eşya Depolama',
      order: index + 1,
      active: true,
    })),
  })

  await upsertSetting(
    'faq_description',
    'Klima kontrollü depolar, sigortalı teslim zinciri ve esnek erişim süreçleri hakkında merak ettiklerinizin yanıtları',
  )

  await upsertSetting(
    'page_desc_sss',
    'Eşya depolama hizmetimize dair süreç, güvenlik, sigorta ve ödeme adımlarını aşağıdaki sorularda detaylandırdık.',
  )

  console.log('Eşya depolama SSS içerikleri güncellendi.')
}

main()
  .catch((error) => {
    console.error('SSS içerikleri yüklenemedi:', error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
