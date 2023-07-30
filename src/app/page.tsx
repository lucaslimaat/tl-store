import Image from 'next/image'
import LigasList from '@/components/Ligas'

export default function Home() {
  return (
    <main className="flex flex-col">
      <LigasList />
    </main>
  )
}
