import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '../../theme'

const pulse = keyframes`
  50% { opacity: 0.45; }
`

export const Section = styled.section<{ $accent: string }>`
  position: relative;
  padding: clamp(64px, 10vw, 140px) clamp(20px, 5vw, 72px);
  border-top: 1px solid ${colors.line};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(60% 50% at 80% 0%, ${({ $accent }) => $accent}22, transparent 70%);
    pointer-events: none;
  }
`

export const Grid = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;

  @media (min-width: 960px) {
    grid-template-columns: 5fr 6fr;
    gap: 96px;
    align-items: start;
  }
`

export const Sticky = styled.div`
  @media (min-width: 960px) {
    position: sticky;
    top: 14vh;
  }
`

export const Index = styled.p<{ $accent: string }>`
  font-family: ${fonts.display};
  color: ${({ $accent }) => $accent};
  font-weight: 600;
  margin-bottom: 16px;
`

export const Name = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 1;
  letter-spacing: -0.04em;
`

export const Role = styled.p`
  margin-top: 16px;
  color: ${colors.muted};
`

export const Tagline = styled.p`
  margin-top: 24px;
  font-size: 1.3rem;
  max-width: 28ch;
`

export const Visit = styled(motion.a)<{ $accent: string }>`
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  margin-top: 32px;
  padding: 14px 26px;
  border-radius: 999px;
  border: 1px solid ${({ $accent }) => $accent};
  color: ${({ $accent }) => $accent};
  font-weight: 600;
  text-decoration: none;
`

export const Block = styled.div`
  h3 {
    font-size: 0.85rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${colors.muted};
    margin-bottom: 16px;
  }

  p {
    font-size: 1.15rem;
    color: ${colors.text};
  }
`

export const Steps = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
  counter-reset: step;
`

export const Step = styled.li<{ $accent: string }>`
  counter-increment: step;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 4px 14px;
  padding: clamp(16px, 4vw, 20px);
  border: 1px solid ${colors.line};
  border-radius: 18px;
  background: ${colors.surface};

  &::before {
    content: counter(step);
    grid-row: span 2;
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${({ $accent }) => $accent}22;
    color: ${({ $accent }) => $accent};
    font-family: ${fonts.display};
    font-weight: 700;
  }

  strong {
    font-family: ${fonts.display};
    font-size: 1.1rem;
  }

  span {
    color: ${colors.muted};
  }
`

export const Visual = styled.div<{ $accent: string }>`
  padding: clamp(18px, 5vw, 28px);
  border: 1px solid ${({ $accent }) => $accent}55;
  border-radius: 24px;
  background: linear-gradient(160deg, ${colors.surface}, ${colors.bg});
  display: grid;
  gap: 18px;

  small {
    color: ${colors.muted};
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.72rem;
  }
`

export const Levels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: ${colors.muted};
`

export const Track = styled.div`
  flex: 1;
  min-width: 80px;
  height: 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`

export const Fill = styled(motion.div)<{ $accent: string }>`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  background: ${({ $accent }) => $accent};
  transform-origin: 0 50%;
`

export const Badge = styled(motion.div)<{ $accent: string }>`
  justify-self: start;
  padding: 10px 18px;
  border-radius: 999px;
  background: ${({ $accent }) => $accent};
  color: ${colors.bg};
  font-family: ${fonts.display};
  font-weight: 700;
`

export const Line = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.95rem;
`

export const Chip = styled.span<{ $accent: string }>`
  padding: 4px 12px;
  border-radius: 999px;
  background: ${({ $accent }) => $accent}33;
  color: ${({ $accent }) => $accent};
  font-size: 0.8rem;
  font-weight: 600;
`

export const Statuses = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  span {
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid ${colors.line};
    font-size: 0.8rem;
  }

  span:nth-child(2) {
    animation: ${pulse} 2s ease-in-out infinite;
    border-color: #ff5d6c;
    color: #ff5d6c;
  }

  span:nth-child(3) {
    border-color: ${colors.accent};
    color: ${colors.accent};
  }
`

export const Compare = styled.div`
  position: relative;
  height: 170px;
  border-radius: 16px;
  overflow: hidden;
`

export const Before = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 14px;
  background: repeating-linear-gradient(135deg, #2a2d38 0 14px, #23262f 14px 28px);
`

export const After = styled(motion.div)<{ $accent: string }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 14px;
  background: linear-gradient(135deg, ${({ $accent }) => $accent}, #1b6f66);
`

export const Tag = styled.span`
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(7, 8, 12, 0.7);
  font-size: 0.8rem;
  font-weight: 600;
`

export const Tabs = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  span {
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid ${colors.line};
    font-size: 0.8rem;
  }

  span:first-child {
    background: ${colors.text};
    color: ${colors.bg};
  }
`

export const Note = styled.p`
  margin-top: 8px;
  max-width: 34ch;
  color: ${colors.muted};
  font-size: 0.9rem;
  font-style: italic;
`
