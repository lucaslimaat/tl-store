import Image from 'next/image'
import LigasList from '@/components/Ligas'
import LancamentosList from '@/components/HomePage/Lançamentos'

export default function Home() {
  return (
    <main className="flex flex-col">
      <LancamentosList />
      <LigasList />
    </main>
  )
}
