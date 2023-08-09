import { Balancer } from 'react-wrap-balancer'

export default function Promocao() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full py-10 px-6 bg-white gap-20">
      <div className="flex flex-row flex-wrap items-center justify-center gap-20 bg-black px-5 py-5">
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-white font-bold text-6xl"><Balancer>1 CAMISA</Balancer></p>
          <p className="text-white font-bold text-4xl"><Balancer>POR R$140,00</Balancer></p>
        </div>
        <div className=" w-24 h-1 md:w-1 md:h-24 bg-white">
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex flex-row items-center justify-center gap-1">
            <p className="text-white font-bold text-6xl">2</p>
            <p className="text-white font-bold text-6xl">CAMISAS</p>
          </div>
          <p className="text-white font-bold text-4xl"><Balancer>POR R$230,00</Balancer></p>
        </div>
        <div className=" w-24 h-1 md:w-1 md:h-24 bg-white">
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex flex-row items-center justify-center gap-1">
            <p className="text-white font-bold text-6xl">3</p>
            <p className="text-white font-bold text-6xl">CAMISAS</p>
          </div>
          <p className="text-white font-bold text-4xl"><Balancer>POR R$320,00</Balancer></p>
        </div>
      </div>
     
      
    </div>
  )
}