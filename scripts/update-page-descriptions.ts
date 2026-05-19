import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const descriptions: Record<string, string> = {
  page_desc_iletisim:
    'Depolama ihtiyaçlarınıza en uygun çözümü ve net fiyat bilgisini hızlıca paylaşalım; formu bırakın, Depolama Şirketi ekibi sizi hemen arasın.',
  page_desc_blog:
    'Depolama süreçleri, güvenli paketleme ve lojistik planlamaya dair uzman yazılarımızı inceleyerek taşınma kararlarını bilinçli verin.',
  page_desc_hizmetlerimiz:
    'Ev, ofis ve ticari depolama taleplerinizi sigortalı altyapı ve 7/24 güvenlik izleme ile yönetiyor, her ihtiyaca özel paketler sunuyoruz.',
  page_desc_sss:
    'Depolama süresi, fiyatlandırma modeli, sigorta kapsamı ve teslimat akışı hakkında sık sorulan soruların cevaplarını burada topladık.',
  page_desc_referanslar:
    'Depolama Şirketi’ni tercih eden firmaların ve ailelerin gerçek projelerini inceleyerek güvenilir hizmet yaklaşımımızı yakından görün.',
  page_desc_teklif_al:
    'Depolanacak eşya tipini ve süre ihtiyacını paylaşın; size özel plan ve fiyat teklifini dakikalar içinde hazırlayalım.',
  page_desc_galeri:
    'Modern depolama depolarımızı, güvenlik katmanlarımızı ve saha operasyonlarımızı gösteren fotoğraf arşivimizi inceleyin.',
  page_desc_hizmet_bolgeleri:
    'Depolama Şirketi’nin aktif hizmet verdiği şehir ve ilçeleri görün, size en yakın profesyonel çözümü kolayca seçin.',
  contact_info_description:
    'Depolama Şirketi operasyon merkezi 7/24 aktif ekiplerle sigortalı depolama süreçlerini izleyerek her talebiniz için anlık destek sağlar.',
  contact_form_description:
    'Depolama Şirketi iletişim formuna bıraktığınız bilgiler uzman müşteri temsilcilerimizin on dakika içinde size dönüş yapabilmesi için güvenle işlenir.',
  footer_description:
    'Depolama Şirketi ev ve ofis eşyalarını şehir içi ve şehirler arası süreçlerde güvenle depolar, planlama, paketleme ve zamanında teslimatı disiplin haline getiren deneyimli bir depolama markasıdır.',
  services_description:
    'Depolama Şirketi keşif, paketleme, taşıma ve güvenli depolamayı tek çatı altında toplayarak her metrekare ihtiyacına uygun, izlenebilir hizmet planları sunar.',
  features_description:
    'Depolama Şirketi tercih edildiğinde sigortalı güvenlik, izleme raporları, dijital envanter ve uzman koordinasyonla huzurlu bir depolama deneyimi yaşarsınız.',
  process_description:
    'Depolama Şirketi önce ihtiyacınızı dinler, ölçüm ve planlama yapar, eşyalarınızı profesyonelce paketler ve depolama süreci boyunca raporlayarak teslim eder.',
  faq_description:
    'Depolama Şirketi SSS alanı sözleşme süresi, sigorta kapsamı, fiyatlandırma ve teslim süreçlerine dair sık sorulan soruları sade cevaplarla açıklar.',
  areas_description:
    'Depolama Şirketi hizmet ağında İstanbul başta olmak üzere çevre illerdeki depolama tesislerimizle lokasyonunuza en yakın profesyonel ekipleri yönlendiriyoruz.',
  partners_description:
    'Depolama Şirketi iş ortakları lojistik, sigorta ve teknoloji alanlarında güvenilir şirketlerden oluşur ve hizmet kalitemizi her projede sürdürülebilir kılar.',
  blog_description:
    'Depolama Şirketi blogu depolama hazırlıkları, paketleme tüyoları, sigorta süreçleri ve operasyon yönetimine dair güncel rehberler sunar.',
  seo_description:
    'Depolama Şirketi şehirler arası depolama taleplerini sigortalı güvenlik, 7/24 izleme ve uzman operasyon ekibiyle yöneterek uygun maliyetli çözümler sunar.',
}

async function main() {
  const operations = Object.entries(descriptions).map(([key, value]) =>
    prisma.siteSetting.upsert({
      where: { key },
      update: { value, updatedAt: new Date() },
      create: { key, value },
    })
  )

  await Promise.all(operations)
  console.log('Page description entries güncellendi.')
}

main()
  .catch((error) => {
    console.error('Sayfa açıklamaları güncellenirken hata oluştu:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
