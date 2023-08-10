import Image from 'next/image'
import LigasList from '@/components/Ligas'
import LancamentosList from '@/components/HomePage/Lançamentos'
import Informacoes from '@/components/HomePage/Informações'
import Promocao from '@/components/HomePage/Promoção'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Promocao />
      <LancamentosList />
      <Informacoes />
      <LigasList />
      <Footer />
    </main>
  )
}
