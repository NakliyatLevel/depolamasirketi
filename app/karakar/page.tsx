import { redirect } from 'next/navigation'
import { auth } from '@/auth'

export default async function KarakarIndexPage() {
  const session = await auth()

  if (session?.user) {
    redirect('/karakar/dashboard')
  }

  redirect('/karakar/login')
}
