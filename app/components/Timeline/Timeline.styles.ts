import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '../../theme'

export const Section = styled.section`
  padding: clamp(80px, 12vw, 160px) clamp(20px, 5vw, 72px);
  border-top: 1px solid ${colors.line};
`

export const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export const Label = styled.p`
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.accent};
  margin-bottom: 24px;
`

export const Heading = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(2rem, 5vw, 4rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 72px;
`

export const List = styled.ol`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 36px;
`

export const Rail = styled.div`
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: ${colors.line};
`

export const RailFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(${colors.accent}, ${colors.frankbeam});
  transform-origin: 50% 0;
`

export const Item = styled.li`
  position: relative;
  padding-bottom: 56px;

  &::before {
    content: '';
    position: absolute;
    left: -36px;
    top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${colors.bg};
    border: 2px solid ${colors.accent};
  }
`

export const Period = styled.p`
  color: ${colors.accent};
  font-size: 0.9rem;
  font-weight: 500;
`

export const Role = styled.h3`
  font-family: ${fonts.display};
  font-size: clamp(1.3rem, 3vw, 1.9rem);
  margin: 6px 0 2px;
`

export const Org = styled.p`
  color: ${colors.text};
  font-weight: 500;

  span {
    color: ${colors.muted};
    font-weight: 400;
  }
`

export const Note = styled.p`
  margin-top: 12px;
  color: ${colors.muted};
  max-width: 62ch;
`
