'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Menu, ChevronDown, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './MobileMenu'
import { useState } from 'react'

type SettingsMap = Record<string, string | null | undefined>

interface HeaderProps {
  settings: SettingsMap
}

export default function Header({ settings }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Mobilde gizli */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              {settings.phone && (
                <a href={`tel:${settings.phone}`} className="flex items-center gap-2 hover:text-white/80">
                  <Phone className="w-4 h-4" />
                  {settings.phone}
                </a>
              )}
              {settings.email && (
                <a href={`mailto:${settings.email}`} className="flex items-center gap-2 hover:text-white/80">
                  <Mail className="w-4 h-4" />
                  {settings.email}
                </a>
              )}
            </div>
            <div className="flex items-center gap-4">
              {settings.facebook && (
                <a
                  href={settings.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {settings.instagram && (
                <a
                  href={settings.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {settings.twitter && (
                <a
                  href={settings.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {settings.linkedin && (
                <a
                  href={settings.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {settings.youtube && (
                <a
                  href={settings.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt={settings.site_title || 'Evden Eve Nakliyat'}
              width={207}
              height={69}
              priority
              className="h-[55px] w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/hakkimizda" className="hover:text-primary transition">
              Hakkımızda
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-primary transition">
                Çözümlerimiz
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/cozum/ucretsiz-ekspertiz" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Ücretsiz Ekspertiz
                </Link>
                <Link href="/cozum/sozlesmeli-nakliyat" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Sözleşmeli Evden Eve Nakliyat
                </Link>
                <Link href="/cozum/sigortali-nakliyat" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Sigortalı Evden Eve Nakliyat
                </Link>
                <Link href="/cozum/asansorlu-nakliyat" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Asansörlü Evden Eve Nakliyat
                </Link>
                <Link href="/cozum/ambalaj-paketleme" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Ambalaj ve Paketleme
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link href="/hizmetlerimiz" className="flex items-center gap-1 hover:text-primary transition">
                Hizmetlerimiz
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Bireysel Taşımacılık</p>
                </div>
                <div className="py-1">
                  <Link href="/hizmet/ev-tasima" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Ev Taşıma
                  </Link>
                  <Link href="/hizmet/villa-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Villa Taşımacılığı
                  </Link>
                  <Link href="/hizmet/yali-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Yalı Taşımacılığı
                  </Link>
                  <Link href="/hizmet/parca-esya-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Parça Eşya Taşımacılığı
                  </Link>
                  <Link href="/hizmet/sehir-ici-nakliyat" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Şehir içi Nakliyat
                  </Link>
                  <Link href="/hizmet/sehirler-arasi-nakliyat" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Şehirler Arası Nakliyat
                  </Link>
                </div>
                <div className="px-4 py-3 border-y border-border bg-muted/40">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Kurumsal Taşımacılık</p>
                </div>
                <div className="py-1">
                  <Link href="/hizmet/ofis-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Ofis Taşımacılığı
                  </Link>
                  <Link href="/hizmet/kurumsal-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Kurumsal Taşımacılık
                  </Link>
                  <Link href="/hizmet/fabrika-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Fabrika Taşımacılığı
                  </Link>
                  <Link href="/hizmet/banka-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Banka Taşımacılığı
                  </Link>
                  <Link href="/hizmet/fuar-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Fuar Taşımacılığı
                  </Link>
                  <Link href="/hizmet/hastane-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Hastane Taşımacılığı
                  </Link>
                </div>
                <div className="px-4 py-3 border-t border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Diğer Hizmetler</p>
                </div>
                <div className="py-1">
                  <Link href="/hizmet/konsolosluk-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Konsolosluk Taşımacılığı
                  </Link>
                  <Link href="/hizmet/universite-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Üniversite Taşımacılığı
                  </Link>
                  <Link href="/hizmet/arsiv-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Arşiv Taşımacılığı
                  </Link>
                  <Link href="/hizmet/muze-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Müze Taşımacılığı
                  </Link>
                  <Link href="/hizmet/bankamatik-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Bankamatik Taşımacılığı
                  </Link>
                  <Link href="/hizmet/para-kasasi-tasimaciligi" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Para Kasası Taşımacılığı
                  </Link>
                </div>
                <div className="px-4 py-3 border-t border-border bg-muted/50">
                  <Link href="/hizmetlerimiz" className="block text-center text-sm font-semibold text-primary">
                    Tüm Hizmetleri Gör
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/referanslar" className="hover:text-primary transition">
              Referanslar
            </Link>
            <div className="relative group">
              <Link href="/galeri" className="flex items-center gap-1 hover:text-primary transition">
                Galeri
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/galeri/araclarimiz" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Araçlarımız
                </Link>
                <Link href="/galeri/paketleme" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Paketleme
                </Link>
              </div>
            </div>
            <Link href="/hizmet-bolgeleri" className="hover:text-primary transition">
              Hizmet Bölgeleri
            </Link>
            <Link href="/blog" className="hover:text-primary transition">
              Blog
            </Link>
            <Link href="/iletisim" className="hover:text-primary transition">
              İletişim
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/teklif-al">
              <Button className="bg-secondary hover:bg-secondary/90">
                Teklif Al
              </Button>
            </Link>
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
