import { MotionValue, motion } from 'framer-motion'
import Image from 'next/image'

interface LigasCardProps {
  image: string
  style: {
    x: MotionValue<number>
  }
}

export default function LigasCard({
  image,
  style,
}: LigasCardProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center border-solid border-2  border-blue  px-5  bg-neutral-100 pb-4 select-none will-change-transform [&:not(:first-child)]:absolute w-64 h-80"
      style={style}
    >
      <Image
        src={image}
        width={400}
        height={400}
        quality={100}
        alt=""
        className="object-contain select-none"
        draggable={false}
      />
      
    </motion.div>
  )
}
