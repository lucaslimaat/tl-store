import { MotionValue, motion } from 'framer-motion'
import Image from 'next/image'

interface LancamentosCardProps {
  image: string
  name: string
  price: string
  link: string
  style: {
    x: MotionValue<number>
  }
}

export default function LancamentosCard({
  image,
  name,
  price,
  link,
  style,
}: LancamentosCardProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center border-solid border-2  border-blue  bg-neutral-100  select-none will-change-transform [&:not(:first-child)]:absolute w-64 h-auto"
      style={style}
    >
      <Image
        src={image}
        width={256}
        height={320}
        quality={100}
        alt=""
        className="object-contain select-none z-0"
        draggable={false}
      >
      </Image>
      
      <div className="w-full h-64 bg-gradient-to-b from-transparent to-neutral-900 absolute top-12 ">

      </div>
      <p className="absolute top-52">{name}</p>
      <p className="absolute top-56 left-2">{price}</p>
      <div className="h-8 bg-black w-60 absolute flex flex-row items-center justify-center top-64">
        <a href={link} className="">
            Confira todos os detalhes
        </a>
      </div>
      
    </motion.div>
  )
}
