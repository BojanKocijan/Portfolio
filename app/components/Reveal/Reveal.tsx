import { ease } from '../../theme'
import { Wrap } from './Reveal.styles'
import type { RevealProps } from './Reveal.types'

export function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <Wrap
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Wrap>
  )
}
