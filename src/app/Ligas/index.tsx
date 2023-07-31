import Image from 'next/image'
import LigasList from '@/components/Ligas'

export default function Ligas() {
  return (
    <main className="flex flex-col">
      <LigasList />
      <LigasList />
    </main>
  )
}
