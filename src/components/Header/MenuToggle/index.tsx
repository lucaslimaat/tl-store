import * as React from 'react'
import { SVGMotionProps, motion } from 'framer-motion'

interface menuToggleProps {
  toggle: React.MouseEventHandler<HTMLButtonElement>
}

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="rgba(255, 255, 255, 0.80)"
    strokeLinecap="round"
    {...props}
  />
)

export default function MenuToggle({ toggle }: menuToggleProps) {
  return (
    <button
      onClick={toggle}
      className="outline-none border-none cursor-pointer fixed top-0 right-0 w-12 h-12 bg-transparent flex justify-center items-center z-50"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  )
}