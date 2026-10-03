import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '../../theme'

export const Section = styled.section`
  padding: clamp(64px, 10vw, 140px) clamp(20px, 5vw, 72px);
  border-top: 1px solid ${colors.line};
`

export const Panel = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 72px);
  border: 1px solid ${colors.line};
  border-radius: 32px;
  background: radial-gradient(70% 90% at 100% 0%, rgba(198, 255, 77, 0.12), transparent 60%), ${colors.surface};
  display: grid;
  gap: 40px;

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
  }
`

export const Label = styled.p`
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.accent};
  margin-bottom: 20px;
`

export const Title = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(2rem, 4.6vw, 3.6rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
`

export const Text = styled.p`
  margin-top: 20px;
  color: ${colors.muted};
  font-size: 1.1rem;
  max-width: 56ch;
`

export const Link = styled(motion.a)`
  display: inline-block;
  margin-top: 28px;
  padding: 14px 26px;
  border-radius: 999px;
  background: ${colors.accent};
  color: ${colors.bg};
  font-weight: 600;
  text-decoration: none;
`

export const Laws = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  counter-reset: law;
`

export const Law = styled(motion.li)`
  counter-increment: law;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border: 1px solid ${colors.line};
  border-radius: 14px;
  background: ${colors.bg};
  font-family: ${fonts.display};

  &::before {
    content: counter(law, decimal-leading-zero);
    color: ${colors.accent};
    font-size: 0.85rem;
  }
`
