import Header from '@/components/marketing/Header'
import Footer from '@/components/marketing/Footer'
import { WhatsAppButton } from '@/components/marketing/WhatsAppButton'
import { MobileBottomBar } from '@/components/marketing/MobileBottomBar'
import { getSiteSettings } from '@/lib/settings'

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()
  const phone = settings.phone ?? null
  const whatsapp = settings.whatsapp ?? null

  return (
    <div className="flex flex-col min-h-screen">
      <Header settings={settings} />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
      <WhatsAppButton whatsapp={whatsapp} />
      <MobileBottomBar phone={phone} whatsapp={whatsapp} />
    </div>
  )
}
