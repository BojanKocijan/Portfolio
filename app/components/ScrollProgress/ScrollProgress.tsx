import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { Bar } from './ScrollProgress.styles'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', setProgress)
  return <Bar animate={{ scaleX: progress }} transition={{ duration: 0.1 }} aria-hidden="true" />
}
