import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '../../theme'

export const Section = styled.section`
  padding: clamp(96px, 16vw, 200px) clamp(20px, 5vw, 72px) 48px;
  border-top: 1px solid ${colors.line};
  text-align: center;
`

export const Heading = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(2.6rem, 9vw, 7.5rem);
  line-height: 1;
  letter-spacing: -0.04em;
`

export const Sub = styled.p`
  margin: 24px auto 0;
  max-width: 48ch;
  color: ${colors.muted};
  font-size: 1.15rem;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
`

export const Button = styled(motion.a)<{ $primary?: boolean }>`
  padding: 16px 30px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  background: ${({ $primary }) => ($primary ? colors.accent : 'transparent')};
  color: ${({ $primary }) => ($primary ? colors.bg : colors.text)};
  border: 1px solid ${({ $primary }) => ($primary ? colors.accent : colors.line)};
`

export const Footer = styled.footer`
  margin-top: clamp(80px, 12vw, 160px);
  color: ${colors.muted};
  font-size: 0.9rem;
`
