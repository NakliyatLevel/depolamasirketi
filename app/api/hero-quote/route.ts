import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { sendHeroQuickQuoteEmail } from '@/lib/email/send'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, phone, fromCity, toCity, roomType, priceMin, priceMax } = body

    if (!fullName?.trim() || !phone?.trim() || !roomType?.trim()) {
      return NextResponse.json({ error: 'Lütfen tüm alanları doldurun.' }, { status: 400 })
    }

    const normalizedFromCity = typeof fromCity === 'string' && fromCity.trim().length > 0 ? fromCity.trim() : 'Belirtilmedi'
    const normalizedToCity = typeof toCity === 'string' && toCity.trim().length > 0 ? toCity.trim() : 'Belirtilmedi'

    const rooms = Number.parseInt(roomType, 10) || Number.parseInt(roomType.split('+')[0], 10) || 1

    const quote = await prisma.quote.create({
      data: {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: body.email?.trim() || 'hero-form@levelnakliyat.com',
        preferredDate: null,
        fromAddress: normalizedFromCity,
        fromFloor: 0,
        fromElevator: false,
        toAddress: normalizedToCity,
        toFloor: 0,
        toElevator: false,
        distance: null,
        propertyType: 'quick_form',
        rooms,
        furnitureCount: 0,
        hasFragileItems: false,
        hasPiano: false,
        hasAntiques: false,
        specialItems: null,
        needsPacking: false,
        needsDisassembly: false,
        needsStorage: false,
        needsInsurance: false,
        additionalNotes: null,
      },
    })

    try {
      await sendHeroQuickQuoteEmail({
        fullName: fullName.trim(),
        phone: phone.trim(),
        fromCity: normalizedFromCity,
        toCity: normalizedToCity,
        roomType: roomType.trim(),
        priceMin,
        priceMax,
      })
    } catch (emailError) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Hero quote email failed:', emailError)
      }
    }

    return NextResponse.json({ success: true, quoteId: quote.id })
  } catch (error) {
    return NextResponse.json({ error: 'Talebiniz alınamadı.' }, { status: 500 })
  }
}

