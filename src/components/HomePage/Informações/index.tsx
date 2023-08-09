import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

export default function Informacoes() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full py-10 px-4 bg-neutral-300 gap-20">
      <div className="flex flex-row items-center justify-center gap-5">
        <Image
          src="/images/cartao-credito.png"
          width={80}
          height={80}
          quality={100}
          alt=""
          draggable={false}
        >
        </Image>
        <p className="text-black font-bold"><Balancer>Aceitamos cartões de crédito via Mercado Pago</Balancer></p>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <Image
          src="/images/cartao-credito.png"
          width={80}
          height={80}
          quality={100}
          alt=""
          draggable={false}
        >
        </Image>
        <p className="text-black font-bold"><Balancer>Aceitamos cartões de crédito via Mercado Pago</Balancer></p>
      </div>
      
    </div>
  )
}