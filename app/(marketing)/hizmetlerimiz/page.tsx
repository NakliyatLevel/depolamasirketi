import { getSiteSettings } from '@/lib/settings'
import { Metadata } from 'next'
import { PageHeading } from '@/components/ui/page-heading'
import Link from 'next/link'
import {
  Home,
  GraduationCap,
  Package,
  Briefcase,
  Building2,
  Archive,
  FileText,
  Snowflake,
  Boxes,
  ArrowRight,
} from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  
  return {
    title: `Hizmetlerimiz | ${settings.site_title}`,
    description: 'Ev, ofis, arşiv ve özel paket depolama çözümlerimizi tek sayfada keşfedin.',
  }
}

const services = {
  bireysel: [
    { name: 'Ev Eşyası Depolama', slug: 'ev-esyasi-depolama', icon: Home },
    { name: 'Öğrenci Eşya Depolama', slug: 'ogrenci-esya-depolama', icon: GraduationCap },
    { name: 'Parça Eşya Depolama', slug: 'parca-esya-depolama', icon: Package },
  ],
  kurumsal: [
    { name: 'Ofis Eşyası Depolama', slug: 'ofis-esyasi-depolama', icon: Briefcase },
    { name: 'Büro Depolama', slug: 'buro-depolama', icon: Building2 },
    { name: 'Arşiv Depolama', slug: 'arsiv-depolama', icon: Archive },
    { name: 'Evrak Depolama', slug: 'evrak-depolama', icon: FileText },
  ],
  ozel: [
    { name: 'Beyaz Eşya Depolama', slug: 'beyaz-esya-depolama', icon: Snowflake },
    { name: 'Koli Depolama', slug: 'koli-depolama', icon: Boxes },
  ],
}

export default async function HizmetlerimizPage() {
  const settings = await getSiteSettings()

  return (
    <div className="min-h-screen">
      <PageHeading
        title="Hizmetlerimiz"
        description={settings.page_desc_hizmetlerimiz || 'Ev, ofis ve özel paket depolama ihtiyaçlarınız için klima kontrollü ve sigortalı çözümler sunuyoruz.'}
        breadcrumbs={[{ label: 'Hizmetlerimiz' }]}
      />

      {/* Bireysel Depolama */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Bireysel Depolama</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              şehir değişimi, dönem arası veya kısa süreli ihtiyaçlar için ev, öğrenci ve parça eşyalarınızı klima kontrollü alanlarda saklıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {services.bireysel.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmet/${service.slug}`}
                className="group bg-white border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                      {service.name}
                    </h3>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kurumsal Depolama */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Kurumsal Depolama</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofis mobilyalarından arşiv kutularına kadar tüm kurumsal varlıklarınızı raf kodlu, sigortalı depolama altyapımızda koruruz.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.kurumsal.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmet/${service.slug}`}
                className="group bg-white border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition">
                    {service.name}
                  </h3>
                  <div className="flex items-center justify-center text-primary text-sm font-medium">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Özel Paketler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Özel Paketler</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyaz eşya ve koli bazlı çözümlerimizle hacme göre fiyatlandırma ve esnek teslim planları sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.ozel.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmet/${service.slug}`}
                className="group bg-white border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition">
                    {service.name}
                  </h3>
                  <div className="flex items-center justify-center text-primary text-sm font-medium">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">Size Özel Çözümler Sunuyoruz</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            İhtiyacınıza özel paket ve hizmetler için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teklif-al"
              className="px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition"
            >
              Ücretsiz Teklif Al
            </Link>
            {settings.phone && (
              <a
                href={`tel:${settings.phone}`}
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition"
              >
                {settings.phone}
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
