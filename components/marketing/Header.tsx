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
                  Sözleşmeli Ev Taşıma
                </Link>
                <Link href="/cozum/sigortali-nakliyat" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Sigortalı Evden Eve Nakliyat
                </Link>
                <Link href="/cozum/asansorlu-nakliyat" className="block px-4 py-3 hover:bg-muted transition text-sm">
                  Asansörlü Nakliyat
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
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Bireysel Depolama</p>
                  <p className="text-sm text-muted-foreground">Ev ve kişisel eşyalar için</p>
                </div>
                <div className="py-1">
                  <Link href="/hizmet/ev-esyasi-depolama" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Ev Eşyası Depolama
                  </Link>
                  <Link href="/hizmet/ogrenci-esya-depolama" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Öğrenci Eşya Depolama
                  </Link>
                  <Link href="/hizmet/beyaz-esya-depolama" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Beyaz Eşya Depolama
                  </Link>
                  <Link href="/hizmet/parca-esya-depolama" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Parça Eşya Depolama
                  </Link>
                </div>
                <div className="px-4 py-3 border-y border-border bg-muted/40">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Kurumsal Depolama</p>
                  <p className="text-sm text-muted-foreground">Ofis, arşiv ve doküman güvenliği</p>
                </div>
                <div className="py-1">
                  <Link href="/hizmet/ofis-esyasi-depolama" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Ofis Eşyası Depolama
                  </Link>
                  <Link href="/hizmet/buro-depolama" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Büro Depolama
                  </Link>
                  <Link href="/hizmet/arsiv-depolama" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Arşiv Depolama
                  </Link>
                  <Link href="/hizmet/evrak-depolama" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Evrak Depolama
                  </Link>
                </div>
                <div className="px-4 py-3 border-t border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Özel Paketler</p>
                  <p className="text-sm text-muted-foreground">Esnek hacim ve hızlı teslim</p>
                </div>
                <div className="py-1">
                  <Link href="/hizmet/koli-depolama" className="block px-4 py-2 hover:bg-muted transition text-sm">
                    Koli Depolama
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
