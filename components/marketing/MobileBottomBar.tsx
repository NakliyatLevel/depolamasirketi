import { Phone, MessageCircle } from 'lucide-react'

interface MobileBottomBarProps {
  phone?: string | null
  whatsapp?: string | null
}

export function MobileBottomBar({ phone, whatsapp }: MobileBottomBarProps) {
  const sanitizedPhone = phone?.replace(/[^0-9+]/g, '')
  const whatsappNumber = whatsapp?.replace(/[^0-9]/g, '')

  if (!sanitizedPhone && !whatsappNumber) return null

  const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-gray-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      {sanitizedPhone && (
        <a
          href={`tel:${sanitizedPhone}`}
          className="flex flex-1 items-center justify-center gap-2 py-4 bg-primary text-white font-semibold text-sm active:opacity-90 transition"
        >
          <Phone className="w-5 h-5" />
          <span>{phone || 'Telefon'}</span>
        </a>
      )}
      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 py-4 bg-green-500 text-white font-semibold text-sm active:opacity-90 transition"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      )}
    </div>
  )
}
