'use client'
import { MotionValue, animate, motion, useMotionValue } from 'framer-motion'
import LancamentosCard from './LançamentosCard'
import { useCallback, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const mod = (a: number, n: number) => ((a % n) + n) % n

const lancamentosList = [
  {
    image: '/images/teste-lancamento.svg',
    link: 'teste',
    name: 'Camisa 2 Barcelona 2022/2023',
    price: 'R$140,00'
  },
  {
    image: '/images/teste2-lancamento.svg',
    link: 'teste',
    name: 'Camisa 2 Barcelona 2022/2023',
    price: 'R$140,00'
  },
  {
    image: '/images/teste-lancamento.svg',
    link: 'teste',
    name: 'Camisa 2 Barcelona 2022/2023',
    price: 'R$140,00'
  },
  {
    image: '/images/teste-lancamento.svg',
    link: 'teste',
    name: 'Camisa 2 Barcelona 2022/2023',
    price: 'R$140,00'
  },
]

const lancamentosCards = [...lancamentosList, ...lancamentosList, ...lancamentosList].map(
  (lancamentos, i) => {
    return {
      index: i - lancamentosList.length,
      lancamentos,
      x: new MotionValue(),
    }
  },
)

export default function LancamentosList() {
  const currentIndexMotionValue = useMotionValue(0)

  const handleChange = useCallback((currentIndex: number) => {
    const currentIndexLoop = mod(currentIndex, lancamentosList.length)
    for (let i = 0; i < lancamentosCards.length; i++) {
      const { x, index } = lancamentosCards[i]
      // offset is between -array.length and +array.length
      // 0 means current
      const offset = index - currentIndexLoop

      // if card is out of view, it doesn't need to change place
      // keep them in place for perf
      let nextX = offset * (304 + 12)
      const centerOutOfViewPx = (window.innerWidth + 304) * 0.5
      if (nextX > centerOutOfViewPx) {
        nextX = centerOutOfViewPx
      } else if (nextX < -centerOutOfViewPx) {
        nextX = -centerOutOfViewPx
      }

      x.set(nextX)
    }
  }, [])

  const handlePan = (
    e: { stopPropagation: () => void },
    pointInfo: { delta: { x: number }; velocity: { x: number } },
    ended = false,
  ) => {
    e.stopPropagation()
    const deltaIndex = -pointInfo.delta.x / (304 + 12)
    const nextDragIndex = currentIndexMotionValue.get() + deltaIndex
    currentIndexMotionValue.set(nextDragIndex)
    handleChange(nextDragIndex)

    if (!ended) return

    const nextIndex = Math.round(
      nextDragIndex - (pointInfo.velocity.x / (304 + 12)) * 0.5,
    )
    const velocity = -pointInfo.velocity.x * 0.005

    animate(currentIndexMotionValue, nextIndex, {
      type: 'tween',
      velocity,
      damping: 20,
      restSpeed: 0.001,
      onUpdate: handleChange,
    })
  }

  const animateDelta = useCallback(
    (deltaIndex: number) => {
      const nextIndex = Math.round(currentIndexMotionValue.get() + deltaIndex)
      animate(currentIndexMotionValue, nextIndex, {
        onUpdate: handleChange,
      })
    },
    [currentIndexMotionValue, handleChange],
  )

  // Initial positions (mount only!)
  useEffect(() => {
    handleChange(0)
  }, [handleChange])

  return (
    <motion.div
      className="relative bg-white  pb-20 overflow-x-hidden overflow-y-visible select-none touch-none flex flex-col justify-center items-center"
      onPan={handlePan}
      onPanEnd={(e, point) => handlePan(e, point, true)}
    >
       <h3 className="md:text-4xl text-2xl font-bold text-center py-10 text-black">
        Lançamentos
      </h3>
      <div className="relative flex gap-3 justify-center items-center">
        {lancamentosCards.map(({ lancamentos, index, ...style }) => (
          <LancamentosCard
            key={index}
            style={style}
            name={lancamentos.name}
            price={lancamentos.price}
            link={lancamentos.link}
            image={lancamentos.image}
          />
        ))}
      </div>
      <div
        className="absolute left-0 bg-gradient-to-r from-white h-full top-0 w-16 cursor-pointer"
        onClick={() => animateDelta(-1)}
      >
        <ChevronLeftIcon
          className="absolute left-1 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer"
          onClick={() => animateDelta(-1)}
        />
      </div>
      <div
        className="absolute right-0 bg-gradient-to-l from-white h-full top-0 w-16 cursor-pointer"
        onClick={() => animateDelta(1)}
      >
        <ChevronRightIcon
          className="absolute right-1 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer"
          onClick={() => animateDelta(1)}
        />
      </div>
    </motion.div>
  )
}