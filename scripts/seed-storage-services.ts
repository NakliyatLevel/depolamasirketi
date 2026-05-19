import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type TableRow = {
  paket: string
  kapasite: string
  koruma: string
}

type RawService = {
  name: string
  slug: string
  description: string
  icon: string
  order: number
  metaTitle: string
  metaDescription: string
  image?: string | null
  active?: boolean
  showOnHomepage?: boolean
  benefits: string[]
  paragraphs: string[]
  tableRows: TableRow[]
  listItems: string[]
}

const rawServices: RawService[] = [
  {
    name: 'Ev Eşyası Depolama',
    slug: 'ev-esyasi-depolama',
    description:
      'Ev eşyalarınızı klima kontrollü depolarda barkodlu takip ve sigortalı güvenceyle saklıyoruz.',
    icon: 'Home',
    order: 1,
    metaTitle: 'Ev Eşyası Depolama | Sigortalı ve Klimali Depolar',
    metaDescription:
      'Ev eşyası depolama hizmetimizle tadilat, tayin veya seyahat dönemlerinde tüm mobilyalarınızı sigortalı, klima kontrollü alanlarda güvenle saklıyoruz.',
    active: true,
    showOnHomepage: true,
    benefits: [
      'Klima kontrollü ve 7/24 izlenen depolar',
      'Barkodlu sandık takibi ve online raporlar',
      'Sigortalı taşıma ve depolama güvencesi',
      'Mobilya söküm ve kurulum desteği',
      'Fotoğraf destekli teslim raporları',
      'İhtiyaca göre esnek teslim planı',
    ],
    paragraphs: [
      'Ev eşyası depolama hizmetimiz, şehir değiştirirken, tadilat sürecindeyken veya mevsimlik konaklamalar yaparken yaşam alanınızı ferahlatmanızı sağlar. Klima kontrollü depolarımızda her paket için barkodlu envanter oluşturur, nem ve sıcaklık değerlerini sensörlerle izleyerek kumaş, ahşap ve cam yüzeyleri deformasyondan koruruz. Teslim aldığımız gün detaylı fotoğraf raporu paylaşır, raf yerleşimini onayınıza sunar ve dilediğiniz anda çevrim içi panelden sandık bazında stok durumu takibi yapabilmeniz için şeffaf dashboard erişimi açarız. Termal kamera raporlarını aylık olarak e posta ile iletir, sandık bazında nem ölçümlerini PDF çıktısı halinde paylaşıp tüm kayıtları dijital imza ile doğrularız.',
      'Taşıma aşamasında mobilyalarınız profesyonel ekipler tarafından sökülüp antibakteriyel ambalajlarla kaplanır, hassas elektronikler darbe emici köpük kasalara yerleştirilir ve koli etiketleri üzerinde varış tarihleri ile sorumluların imzası bulunur. Talep ettiğinizde sigorta poliçesini anında e posta ile gönderiyor, haftalık durum raporlarıyla fotoğraf güncellemesi paylaşıyor ve arşivlenen her hareketi ISO 9001 prosedürlerine uygun şekilde kaydediyoruz. Böylece uzun süreli beklemelerde bile ev düzeninizi bozmadan, dilediğiniz parçayı gün içinde kapınıza getirebiliyoruz. Operasyon merkezimiz Türkçe ve İngilizce müşteri temsilcileriyle haftanın her günü ulaşılabilir, ihtiyaç halinde bağımsız denetim raporunu paylaşarak şeffaflığı korur.',
    ],
    tableRows: [
      { paket: 'Compact Raf', kapasite: '5 m³', koruma: 'Tekstil kılıf + nem bariyeri' },
      { paket: 'Standart Kabin', kapasite: '12 m³', koruma: 'Çift kat kraft + RFID kilit' },
      { paket: 'Premium Oda', kapasite: '20 m³', koruma: 'İklim kontrollü bağımsız bölüm' },
    ],
    listItems: [
      'Tadilat döneminde oda boşaltmak',
      'Yurtdışı görevi boyunca eşyaları saklamak',
      'Mevsimsel dekor rotasyonunu düzenlemek',
      'Uzun süreli seyahatlerde evinizi kapatmak',
    ],
  },
  {
    name: 'Ofis Eşyası Depolama',
    slug: 'ofis-esyasi-depolama',
    description:
      'Kurumsal taşınmalar için raf kodlu, kamera izlemeli ve ERP uyumlu ofis depolama çözümleri sunuyoruz.',
    icon: 'Briefcase',
    order: 2,
    metaTitle: 'Ofis Eşyası Depolama | Kurumsal Lojistik Çözümleri',
    metaDescription:
      'Ofis eşyası depolama paketimiz, server dolaplarından tasarım mobilyalarına kadar tüm kurumsal varlıkları kodlu raflama, kamera izlemesi ve sigortalı güvenceyle korur.',
    active: true,
    showOnHomepage: true,
    benefits: [
      'ERP uyumlu barkod ve raporlama',
      'Kamera ile izlenen kafesli raflar',
      'Server ve elektronikler için antistatik alan',
      'Zamanlanan parsiyel teslimatlar',
      'Kurumsal sigorta poliçesi ve SLA',
      'Haftalık durum raporu paylaşımı',
    ],
    paragraphs: [
      'Ofis eşyası depolama paketimiz, taşınma takvimini esnetmek isteyen şirketlere modüler raf sistemleri, raf arası kamera izleme ve anlık erişim logları sunar. Sunucu kabinleri için antistatik yükseltilmiş zemin, yönetici mobilyaları için keçe destekli iskeletler, dekoratif objeler için UV filtreli kapalı kutular kullanırız. Sevkiyat planı değiştiğinde stok kodlarına göre yeni teslim sırası düzenleyebilir, her parçanın konumunu ERP uyumlu CSV raporlarıyla insan kaynakları veya satınalma ekipleriyle paylaşabiliriz. Ayrıca SLA kapsamında belirlenen KPI değerlerini dashboard üzerinden raporlar, süreç boyunca IT ve operasyon yöneticilerinizi proaktif bildirimlerle bilgilendiririz.',
      'Operasyonu desteklemek adına vardiya planlı ekipler görevlendiriyor, talimatlara göre parsiyel çıkış yapıyor ve teslim edilen her sandık için dijital teslim tutanağı oluşturuyoruz. Yangın, su baskını ve hırsızlığa karşı kademeli alarm sistemleriyle alanı korurken, iş istasyonlarınızı kapalı kafeslerde mühürlü şekilde saklıyoruz. Böylece yeni ofis katınız hazır olduğunda kablo setlerinden arşiv dolaplarına kadar tüm bileşenleri kayıtlı biçimde geri alıp, kesintisiz çalışma düzeni için yeniden kurabiliyorsunuz. Gerektiğinde gece teslimatı organize edip, aynı gün içinde farklı şubelere dağıtım gerçekleştirecek filo planlamasını da üstleniyoruz. Talep eden şirketlere operasyon sonrası ayrıntılı geri bildirim raporu sunarak sürekli iyileştirme döngüsü oluşturuyoruz.',
    ],
    tableRows: [
      { paket: 'Startup Rafı', kapasite: '8 m³', koruma: 'Kafesli raf + kamera' },
      { paket: 'Kurumsal Modül', kapasite: '18 m³', koruma: 'Antistatik platform + kartlı giriş' },
      { paket: 'Executive Suite', kapasite: '28 m³', koruma: 'Özel oda + iklim kontrolü' },
    ],
    listItems: [
      'Kat birleşimi öncesi geçici depolama',
      'Yeni dekorasyon öncesi mobilya muhafazası',
      'Merkez ofis taşınması sırasında envanter paylaşımı',
      'Fuara giden ekipmanların geri dönüşüne kadar saklama',
    ],
  },
  {
    name: 'Parça Eşya Depolama',
    slug: 'parca-esya-depolama',
    description:
      'Az sayıda koli veya mobilyayı kısa ya da uzun dönem uygun fiyatla depoluyoruz.',
    icon: 'Package',
    order: 3,
    metaTitle: 'Parça Eşya Depolama | Esnek ve Hızlı Çözümler',
    metaDescription:
      'Parça eşya depolama hizmetimiz, sezonluk spor ekipmanından tek odalık mobilyaya kadar az hacimli ürünleri sigortalı ve uygun fiyatlı depolarda korur.',
    active: true,
    showOnHomepage: true,
    benefits: [
      'Hacme göre öde modeli',
      'Günlük giriş çıkış takibi',
      'İçerik fotoğrafı ve QR etiket',
      '48 saat içinde teslim opsiyonu',
      'Paylaşımlı ama kilitli kabinler',
      'Nem ve haşere bariyerleri',
    ],
    paragraphs: [
      'Parça eşya depolama çözümümüz, şehir içinde sık seyahat eden profesyonellerin, sezonluk ekipmanlarını kaldırmak isteyen spor tutkunlarının veya stok fazlasını geçici olarak park etmek isteyen butik markaların tercihi oluyor. Her paket teslim edildiğinde içeriğin fotoğrafını çekiyor, QR kodlu kartlarla kayıt altına alıyor ve aynı gün e posta ile tarafınıza gönderiyoruz. Depo içinde paylaşımlı alan kullanılsa bile her müşteri için kilitli kafes modülleri bulunuyor ve hacme göre fiyatlandırma sayesinde kullanılmayan metrekare için ödeme yapmıyorsunuz. Ayrıca mobil uygulamamızdan kolilerinizi yeniden adlandırabilir, içerik notları ekleyebilir ve anlık sigorta durumunu görüntüleyebilirsiniz.',
      'Talep ettiğinizde iki iş günü içinde kapınıza geri teslim gerçekleştirebiliyor, dilerseniz belirli kolileri farklı adreslere yönlendirebiliyoruz. Nem bariyerli paletler, koku tutmayan tekstil kılıfları ve kemirgen sensörlü kapan sistemi ile eşyalarınızı uzun süre bekletsek bile ilk günkü temizliğini koruyoruz. Bu sayede bağımsız depolama sözleşmesi imzalamadan, ihtiyacınız oldukça devreye giren mikro depolama altyapısına erişmiş oluyorsunuz. Koli hareketleri müşteriye SMS ile bildirilir, böylece şehir dışındayken bile sürece hâkim olmaya devam edersiniz. İhtiyaç halinde koli içeriğini yeniden paketleyip kırılgan ürünleri ekstra köpükle destekleriz ve talep ettiğinizde hasar tespiti için ayrıntılı fotoğraflar yollarız.',
    ],
    tableRows: [
      { paket: 'Mikro Raf', kapasite: '3 m³', koruma: 'Paylaşımlı kafes + QR etiket' },
      { paket: 'Hobi Modülü', kapasite: '6 m³', koruma: 'Nem bariyerli palet + kilit' },
      { paket: 'Stok Kabini', kapasite: '10 m³', koruma: 'Çelik kafes + 48 saat teslim' },
    ],
    listItems: [
      'Butik e ticaret stok fazlalarını saklamak',
      'Spor ekipmanlarını sezon dışında korumak',
      'Kiralık evler arasında eşya bekletmek',
      'Tatildeyken hobi atölyesini boşaltmak',
    ],
  },
  {
    name: 'Arşiv Depolama',
    slug: 'arsiv-depolama',
    description:
      'Yangına dayanıklı raflarda, kataloglanmış şekilde kurumsal arşivlerinizi saklıyoruz.',
    icon: 'Archive',
    order: 4,
    metaTitle: 'Arşiv Depolama | TS 13298 Uyumlu Çözümler',
    metaDescription:
      'Arşiv depolama hizmetimiz, TS 13298 ve KVKK süreçlerine uygun şekilde belgelerinizi iklim kontrollü, yangına dayanıklı raf sistemlerinde saklar.',
    active: true,
    showOnHomepage: true,
    benefits: [
      'TS 13298 ve KVKK uyumu',
      'Yangına dayanıklı çelik raflar',
      'Nem %50 altında tutma garantisi',
      'Sayısal kataloglama ve etiket',
      'Talep edilen dosyayı 4 saat içinde ulaştırma',
      'Gizlilik sözleşmeli personel',
    ],
    paragraphs: [
      'Arşiv depolama operasyonumuzda kağıt bazlı evrak, plan, sözleşme ve muhasebe dosyalarını çelik raflı, FM onaylı yangın söndürme sistemleriyle korunan özel salonda saklarız. Her kutu için TS 13298 standardına uygun katalog numarası üretir, bar kodlu raf haritalarıyla kutunun raf, sıra ve seviye bilgilerini dijital ortama aktarırız. Nem oranı yüzde ellinin altına düşmediğinde alarm veren sensörler, çift kapılı erişim yetkisi ve gece görüşlü kameralarla belgelerin bütünlüğünü garanti ederiz. Ayrıca giriş yapan personeli biyometrik okuyucularla doğrular ve tüm hareketleri dakikalık loglara işleriz. İhtiyaç duyarsanız raf bazında canlı görüntü paylaşarak denetimlerinizi uzaktan yönetmenizi sağlarız.',
      'Talep edilen evrağı dört saat içerisinde danışılan adrese güvenli kurye ile ulaştırıyor, teslim formunu elektronik imza ile kapatıyor ve süreci KVKK loglarında saklıyoruz. Periyodik imha taleplerini noter onaylı tutanaklarla gerçekleştiriyor, dijitalleştirme hizmeti almak isteyen kurumlara yüksek çözünürlüklü tarama hattı sunuyoruz. Böylece ofisinizde yer açarken mevzuata uygun saklama sürelerini yerine getirir, denetimler için ihtiyaç duyduğunuz belgelere dakikalar içinde ulaşabilirsiniz. Her çeyrekte hazırladığımız uyum raporunu paylaşarak denetim ekiplerinin sorularını önceden yanıtlamış oluruz ve gerektiğinde uzmanlarımızla çevrim içi toplantı organize ederiz; tüm bu süreçlerde SLA performans göstergelerini anlık panelde görebilirsiniz.',
    ],
    tableRows: [
      { paket: 'Temel Arşiv', kapasite: '100 kutu', koruma: 'Çelik raf + CCTV' },
      { paket: 'KVKK Paketi', kapasite: '250 kutu', koruma: 'Yetki matrisi + alarm' },
      { paket: 'Kurumsal Kasa', kapasite: '500 kutu', koruma: 'Yangın odası + biyometrik giriş' },
    ],
    listItems: [
      'Finansal evrakların mevzuata uygun saklanması',
      'Mimari proje rulolarının zarar görmeden korunması',
      'Personel dosyalarının KVKK uyumlu arşivlenmesi',
      'Sözleşme ve garanti belgelerinin hızlı erişimi',
    ],
  },
  {
    name: 'Büro Depolama',
    slug: 'buro-depolama',
    description:
      'Showroom, ajans ve danışmanlık ofisleri için dekor, cihaz ve ekipman depolama.',
    icon: 'Building2',
    order: 5,
    metaTitle: 'Büro Depolama | Esnek Yerleşim ve Hızlı Teslim',
    metaDescription:
      'Büro depolama çözümlerimiz, showroom dekorlarından demo cihazlarına kadar tüm ekipmanları raf kodlu, esnek sözleşmelerle saklar ve istenen gün geri ulaştırır.',
    active: true,
    showOnHomepage: true,
    benefits: [
      'Showroom setleri için ayrı bölümler',
      'Esnek süreli sözleşmeler',
      'Hafta içi her gün teslim slotu',
      'Dekor ve aksesuar için kumaş kılıflar',
      'Demo cihazları için şarj istasyonları',
      'Online rezervasyon paneli',
    ],
    paragraphs: [
      'Büro depolama hizmetimiz, sık sık konsept yenileyen showroomlar, saha ekiplerini destekleyen ajanslar ve danışmanlık ofisleri için tasarlandı. Dekor panellerini düşey raflarda asılı biçimde saklıyor, kumaş numunelerini nefes alan askı torbalarında koruyor, demo cihazlarını ise şarj döngüsü kontrol edilen kilitli dolaplarda bekletiyoruz. Teslim alırken tüm aksesuarları checklist ile sayıyor, fotoğraflı teslim tutanağını dijital arşive aktarıyor ve yeni dekor planınız geldiğinde hangi kombinasyonun önce çıkacağını sipariş ekranından seçmenizi sağlıyoruz. Ayrıca stand kurulum ekiplerinize özel paketleme talimatı hazırlayarak parçaların hangi sırayla yüklenip indirileceğini ayrıntılandırıyoruz.',
      'Yerleşim ihtiyaçları sezonluk olarak değiştiğinde sözleşmeyi esnetebiliyor, hafta içi her gün saatlik teslim slotları açıyor ve kurye ekiplerimizi doğrudan ofisinize yönlendiriyoruz. Depolama süresince aksesuarların tozlanmaması için HEPA filtreli hava devri kullanıyor, kırılgan objeler için köpük destekli raf ayırıcıları yerleştiriyoruz. Böylece yeni kampanyaya geçtiğinizde stand kurulumuna dakikalar içinde başlayabilir, şehir içindeki tüm showroomlarınızı tek panelden yönetebilirsiniz. Dilerseniz stok takibini CRM sisteminize bağlayıp lokasyona göre raporlayarak eşya döngüsünü kolaylaştırıyoruz ve gerektiğinde kurye ekiplerine dijital teslim formu imzalatıyoruz. Kampanya değişimlerinde hangi dekorun önce çıkacağını planlanabilir görev listeleriyle paylaşarak saha ekiplerinize rehberlik ediyoruz.',
    ],
    tableRows: [
      { paket: 'Atölye Rafı', kapasite: '7 m³', koruma: 'Askı torbası + HEPA hava' },
      { paket: 'Showroom Odası', kapasite: '15 m³', koruma: 'Düşey raf + aksesuar kasası' },
      { paket: 'Ajans Süiti', kapasite: '25 m³', koruma: 'Şarj dolabı + özel kurye' },
    ],
    listItems: [
      'Sezonluk vitrin değişimlerini saklamak',
      'Demo cihazlarını güvenle depolamak',
      'Etkinlik sonrası ekipmanları toparlamak',
      'Ajans setlerini şehre göre paylaştırmak',
    ],
  },
  {
    name: 'Evrak Depolama',
    slug: 'evrak-depolama',
    description:
      'Sözleşme, fatura ve özlük dosyalarını sayısal katalogla yönetilen kasalarda saklıyoruz.',
    icon: 'FileText',
    order: 6,
    metaTitle: 'Evrak Depolama | Güvenli ve Erişilebilir Arşiv',
    metaDescription:
      'Evrak depolama servisimiz, sözleşme ve finans belgelerini şeffaf kataloglama, hızlı getirme ve yetkilendirilmiş erişim kontrolleriyle saklar.',
    active: true,
    showOnHomepage: true,
    benefits: [
      'Yetkilendirilmiş erişim seviyeleri',
      'Dijital katalog ve arama motoru',
      'Hızlı tarama ve e gönderim opsiyonu',
      'Nem kontrollü evrak kasaları',
      'Düzenli zararlı canlı kontrolü',
      'Şifreli teslim zinciri',
    ],
    paragraphs: [
      'Evrak depolama senaryolarında yalnızca fiziksel güvenlik değil, erişim hızının da kritik olduğunu biliyoruz. Bu yüzden her dosya sınıfı için renk kodlu kutular, akıllı raf numaraları ve yetkili kişilere özel arama paneli sunuyoruz. Talep edilen evrakı tarayıp imzalı PDF şeklinde gönderebilir, orijinali gerektiğinde güvenli kurye ile teslim ederiz. Nem kontrollü kasalar sayesinde mürekkep solması önlenir, zararlı canlı riskine karşı doğal feromon tuzakları kullanılır ve her giriş çıkış anlık SMS ile raporlanır. Talepleriniz SLA süreleriyle güvence altına alınır ve dashboard üzerinden ölçümlenebilir.',
      'Periyodik denetimlerde hızlı doğrulama yapabilmeniz için sayım raporlarını otomatik hazırlar, isterseniz kendi ERP sisteminize entegrasyon için API erişimi açarız. İmha süresi dolan evraklar onayınız sonrası çapraz kesim yapan endüstriyel makinelerle yok edilir ve süreç video kaydıyla belgelenir. Böylece artan kağıt yükünü ofis dışına taşıyıp yasal yükümlülükleri yerine getirirken, istenen belgeye dakikalar içinde ulaşıp operasyonel çevikliği koruyabilirsiniz. Tüm operasyon personeli gizlilik sözleşmesiyle çalışır ve her dosya hareketi şifreli loglarda tutulur; dilerseniz bu logları periyodik olarak kendi denetim ekibinizle paylaşabiliriz ve tutanakları dijital imza ile teyit ederiz.',
    ],
    tableRows: [
      { paket: 'Standart Dosya', kapasite: '80 kutu', koruma: 'Nem kontrollü kasa' },
      { paket: 'Hızlı Erişim', kapasite: '150 kutu', koruma: 'API arşiv + tarama' },
      { paket: 'Uyum Plus', kapasite: '300 kutu', koruma: 'İmha raporu + video kayıt' },
    ],
    listItems: [
      'Vergi incelemelerinde ihtiyaç duyulan faturalar',
      'Personel özlük dosyalarının güvenli saklanması',
      'Uzun süre saklanması gereken sözleşmeler',
      'Garanti ve servis belgelerinin düzenlenmesi',
    ],
  },
  {
    name: 'Koli Depolama',
    slug: 'koli-depolama',
    description:
      'Etiketli kolilerinizi hacim bazlı ücretlendirme ve hızlı teslim garantisiyle depoluyoruz.',
    icon: 'Boxes',
    order: 7,
    metaTitle: 'Koli Depolama | Hacme Göre Öde Modeli',
    metaDescription:
      'Koli depolama servisimiz, mevsimlik ürünleri veya taşınma kolilerini barkodlu izleme, nem bariyeri ve uygun lojistik maliyetlerle korur.',
    active: true,
    showOnHomepage: true,
    benefits: [
      'Kolibaşı barkod ve içerik fotoğrafı',
      'Nem bariyerli paletleme',
      '48 saat içinde istediğin koli teslimi',
      'Hacim bazlı fiyatlandırma',
      'Opak güvenlik mühürleri',
      'Hafta sonu teslim seçeneği',
    ],
    paragraphs: [
      'Koli depolama altyapımız, taşınma öncesi etap etap paketleyen ailelerin ve sezonluk stoklarını şehir dışına çıkarmak isteyen markaların hayatını kolaylaştırmak için kuruldu. Teslim aldığımız her koliyi tartıp ölçer, içeriğini fotoğraflar, barkod etiketini yapıştırır ve detayları uygulamamızda sizinle paylaşırız. Koli sayınız artsa bile hacme göre ücretlendirme yaptığımız için gereksiz metrekare ücreti ödemezsiniz; ayrıca opak güvenlik mühürleri sayesinde koli açıldığında anında bildirim alırsınız. İsterseniz kolileri kategori bazlı gruplara ayırır ve uygulamada renkli etiketlerle takip edebilirsiniz; adres tarihleri, oda bilgileri ve içerik notları tek ekranda görünür.',
      'Depo içinde kolileri nem bariyerli paletler üzerinde istifler, rutubet ve kokuyu engellemek için aktif karbon filtreli hava döngüsü kullanırız. Hafta sonu teslim randevusu açabildiğimiz için acele ihtiyaçlarınızı bekletmeden karşılayabilir, belirli kolileri farklı adreslere yönlendirebiliriz. Böylece taşınma temposunu kendi planınıza göre ayarlayıp, hangi kolide hangi ürünün olduğunu kaybetmeden süreci yönetirsiniz. Gerektiğinde koli içeriğini yeniden paketleyip sigorta değerini güncelleyerek ekstra güvence sağlar, teslim öncesi temizlik talebini de yerine getiririz ve teslim anında koli etiketlerini güncelleyip yeni adres fişi bırakırız. Talep ederseniz koli bazlı QR raporunu paylaşıp arşivlemenize yardımcı oluruz.',
    ],
    tableRows: [
      { paket: 'Mini Paket', kapasite: '10 koli', koruma: 'Barkod + fotoğraf raporu' },
      { paket: 'Orta Paket', kapasite: '25 koli', koruma: 'Nem bariyeri + opak mühür' },
      { paket: 'Mega Paket', kapasite: '50 koli', koruma: 'Çift palet + hızlı teslim' },
    ],
    listItems: [
      'Taşınma kolilerini aşama aşama depolamak',
      'E ticaret sezon stoklarını saklamak',
      'Butik mağaza dekorlarını paket halinde korumak',
      'Seyahatlerde valiz ve kutuları bırakmak',
    ],
  },
  {
    name: 'Öğrenci Eşya Depolama',
    slug: 'ogrenci-esya-depolama',
    description:
      'Dönem aralarında öğrenci eşyalarını kapıdan alıp dönem başında tekrar teslim ediyoruz.',
    icon: 'GraduationCap',
    order: 8,
    metaTitle: 'Öğrenci Eşya Depolama | Dönemlik Kolaylık',
    metaDescription:
      'Öğrenci depolama hizmetimiz, yurtlar arası geçişlerde veya yaz tatillerinde eşyaları kapıdan alıp okula dönerken tekrar ulaştırır.',
    active: true,
    showOnHomepage: true,
    benefits: [
      'Kapıdan al kapıya teslim hizmeti',
      'Sabit dönemlik paketler',
      'Bisiklet ve enstrüman için özel koruma',
      'Kredi kartı ile taksitli ödeme',
      'Velilere durum bildirimi',
      'Toplu arkadaş indirimi',
    ],
    paragraphs: [
      'Öğrenci eşya depolama paketimiz, dönem sonunda yurttan ayrılan veya yazı memleketinde geçirmek isteyen gençlere vakit kazandırır. Belirlediğiniz gün kapınıza gelir, valizleri, kitap kutularını, çalışma sandalyesini ve müzik enstrümanlarını sigortalı şekilde teslim alırız. Her parça için renkli etiket kullanır, velilere SMS ile bilgilendirme gönderir ve eşyalarınızı karışmayacak biçimde kişisel kabinlere yerleştiririz. Ödeme planlarını dönemlik taksitlere bölebilir, arkadaş grubunuza özel indirim kodu tanımlayabiliriz. Ayrıca teslim videolarını paylaşarak aklınızdaki tüm soru işaretlerini ortadan kaldırırız ve çağrı merkezimizden 7/24 destek sunarız; depolama sözleşmesini dijital imza ile anında onaylayabilirsiniz.',
      'Depolama süresince bisikletler askılı raylarda, bilgisayar ekipmanları sünger dolgulu kasalarda, kıyafetler ise hava alan tekstil torbalarında tutulur. Dönüş tarihiniz netleştiğinde uygulamadan teslim talebi açmanız yeterlidir; ekiplerimiz yeni yurt adresinize gidip eşyaları odanıza kadar çıkarır. Böylece aile desteğine ihtiyaç duymadan, taşınma stresini dakikalar içinde çözer ve enerjinizi sınavlara veya staj projelerine ayırabilirsiniz. İsterseniz teslim günü oda kurulum desteği sağlayıp, çalışma masanızı yeniden monte edebiliriz ve dileyen öğrenciler için kolileri yeni eve göre etiketleyip yerleşim planı çıkarırız. Final haftasında kampüste olamasanız bile teslimat adımlarını uygulamadan canlı takip edersiniz.',
    ],
    tableRows: [
      { paket: 'Mini Dönem', kapasite: '6 koli + valiz', koruma: 'Kişisel kabin + SMS bilgilendirme' },
      { paket: 'Standart Dönem', kapasite: '10 koli + bisiklet', koruma: 'Askı rayı + sünger kasa' },
      { paket: 'Max Dönem', kapasite: '15 koli + enstrüman', koruma: 'Yastıklı oda + taksitli ödeme' },
    ],
    listItems: [
      'Yaz tatilinde yurttan çıkarken eşyaları saklamak',
      'Erasmus programı süresince odanızı boşaltmak',
      'Şehir değiştiren öğrencilerin eşyalarını bekletmek',
      'Staj dönemi boyunca ev bulana kadar depolamak',
    ],
  },
  {
    name: 'Beyaz Eşya Depolama',
    slug: 'beyaz-esya-depolama',
    description:
      'Beyaz eşyalarınızı dikey pozisyonda, sensörlü ortamda korur ve iç temizlik sonrası teslim ederiz.',
    icon: 'Snowflake',
    order: 9,
    metaTitle: 'Beyaz Eşya Depolama | Nem Kontrollü Güvence',
    metaDescription:
      'Beyaz eşya depolama hizmetimiz, buzdolabı, çamaşır makinesi ve ankastre setlerini dikey pozisyonda, nem kontrollü depolara alıp teslim öncesi bakımdan geçirir.',
    active: true,
    showOnHomepage: true,
    benefits: [
      'Dikey sabitleme aparatları',
      'Yağ ve koku önleyici bakım',
      '2 saatlik teslim randevusu',
      'Sensörlü nem ve sıcaklık takibi',
      'Profesyonel söküm montaj ekibi',
      'Test raporlu geri teslim',
    ],
    paragraphs: [
      'Beyaz eşya depolama kapsamında buzdolabı, çamaşır makinesi, kurutma makinesi ve ankastre setlerinizi taşıma öncesinde profesyonelce söküyor, su girişlerini kapatıyor ve cihazları darbeye dayanıklı köpük panellerle sarıyoruz. Depoda her cihaz dikey sabitleme aparatlarına bağlanır, tambur kilitleme vidaları takılır ve enerji kabloları numaralı bandrollerle tutulur. Nem sensörleri yüzde kırk beş ile elli aralığını korur, olası sapmalarda otomatik nem alma sistemleri devreye girer. Ayrıca titreşim ölçerler sayesinde cihaz kasalarında en ufak hareketi algılayıp raporları e posta ile paylaşıyoruz ve kritik alarmları operasyona SMS ile bildiriyoruz.',
      'Teslim öncesinde cihazların dış yüzeylerini mikrofiber bezlerle temizler, iç hazneleri doğal deodorantlarla havalandırır ve test çalıştırması yaparak rapor hazırlarız. Taşınacağınız gün iki saatlik zaman dilimi içinde ekiplerimiz adrese ulaşır, cihazları yerine yerleştirir ve bağlantıları sızdırmazlık testinden geçirir. Böylece elektronik altyapısı hassas olan beyaz eşyalarınızı depoda bekletirken performans kaybı yaşamaz, yeni evinizde aynı gün kullanmaya devam edersiniz. Talep eden müşteriler için enerji verimliliği kontrolü yapar, filtre temizliği sonrası fotoğrafları sisteme yükleriz ve çalıştırma testinin sonuçlarını PDF olarak göndeririz; dilerseniz bakım önerilerini içeren kısa video da iletiriz.',
    ],
    tableRows: [
      { paket: 'Çift Cihaz', kapasite: '2 büyük cihaz', koruma: 'Dikey sabitleme + nem takip' },
      { paket: 'Aile Seti', kapasite: '4 büyük cihaz', koruma: 'Tambur kilidi + bakım raporu' },
      { paket: 'Ankastre Plus', kapasite: '6 cihaz', koruma: 'Köpük panel + test çalışması' },
    ],
    listItems: [
      'Yeni ev hazır olana kadar beyaz eşyayı bekletmek',
      'Tadilat süresince mutfak cihazlarını korumak',
      'Kısa dönemli kiralamalarda cihaz değişimini yönetmek',
      'Showroom değişimlerinde teşhir ürünlerini saklamak',
    ],
  },
]

const WORD_MIN = 80
const WORD_MAX = 120

function countWords(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

function validateParagraphs(name: string, paragraphs: string[]) {
  paragraphs.forEach((paragraph, index) => {
    const words = countWords(paragraph)
    if (words < WORD_MIN || words > WORD_MAX) {
      throw new Error(
        `${name} hizmetindeki ${index + 1}. paragraf ${words} kelime. Limit ${WORD_MIN}-${WORD_MAX}.`
      )
    }
  })
}

function buildContent(paragraphs: string[], tableRows: TableRow[], listItems: string[]) {
  const paragraphHtml = paragraphs.map((p) => `<p>${p}</p>`).join('\n')
  const tableHtml = `
<h4>Depolama Paketleri</h4>
<table class="service-table w-full text-sm border border-border">
  <thead>
    <tr class="bg-muted/40">
      <th class="p-2 text-left">Paket</th>
      <th class="p-2 text-left">Hacim</th>
      <th class="p-2 text-left">Koruma</th>
    </tr>
  </thead>
  <tbody>
    ${tableRows
      .map(
        (row) => `
    <tr>
      <td class="p-2 font-semibold">${row.paket}</td>
      <td class="p-2">${row.kapasite}</td>
      <td class="p-2 text-muted-foreground">${row.koruma}</td>
    </tr>`
      )
      .join('')}
  </tbody>
</table>
`
  const listHtml = `
<h4>Öne Çıkan Kullanımlar</h4>
<ul>
  ${listItems.map((item) => `<li>${item}</li>`).join('\n  ')}
</ul>
`

  return [paragraphHtml, tableHtml, listHtml].join('\n')
}

async function main() {
  for (const service of rawServices) {
    validateParagraphs(service.name, service.paragraphs)
  }

  for (const service of rawServices) {
    const content = buildContent(service.paragraphs, service.tableRows, service.listItems)
    const benefits = service.benefits.join('\n')

    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {
        name: service.name,
        description: service.description,
        content,
        image: service.image || null,
        icon: service.icon,
        benefits,
        metaTitle: service.metaTitle,
        metaDescription: service.metaDescription,
        order: service.order,
        active: service.active ?? true,
        showOnHomepage: service.showOnHomepage ?? true,
      },
      create: {
        name: service.name,
        slug: service.slug,
        description: service.description,
        content,
        image: service.image || null,
        icon: service.icon,
        benefits,
        metaTitle: service.metaTitle,
        metaDescription: service.metaDescription,
        order: service.order,
        active: service.active ?? true,
        showOnHomepage: service.showOnHomepage ?? true,
      },
    })

    console.log(`Hizmet güncellendi/oluşturuldu: ${service.name}`)
  }
}

main()
  .catch((error) => {
    console.error('Depolama hizmetleri tohumlanamadı:', error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
