import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors } from '../../theme'

export const Bar = styled(motion.div)`
  position: fixed;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, ${colors.coachcub}, ${colors.accent}, ${colors.frankbeam});
  transform-origin: 0 50%;
  z-index: 50;
`
