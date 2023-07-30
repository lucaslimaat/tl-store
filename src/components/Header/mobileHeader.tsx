'use client'
import { motion, useCycle } from 'framer-motion'
import MenuToggle from './MenuToggle'
import { useRef } from 'react'
import { Navigation } from './Navigation'

const mobileSidebar = {
  open: {
    clipPath: `circle(2000px at 85% 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
    height: '420vh',
  },
  closed: {
    clipPath: 'circle(0px at 85% 0px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
    transitionEnd: {
      height: '0',
    },
  },
}

export default function MobileHeader() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      ref={containerRef}
      className="fixed top-0 right-0 w-4/6 max-w-sm z-50 md:hidden"
    >
      <motion.div
        className="bg-black fixed top-0 right-0 w-4/6"
        variants={mobileSidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
