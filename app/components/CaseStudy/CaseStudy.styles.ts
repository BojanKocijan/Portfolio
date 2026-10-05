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

export const navHeight = 57
const gutter = 'clamp(20px, 5vw, 72px)'

export const Rail = styled.div`
  position: sticky;
  top: ${navHeight}px;
  z-index: 30;
  height: 0;
  margin: 0 calc(-1 * ${gutter});
  pointer-events: none;
`

export const Context = styled(motion.div)<{ $accent: string }>`
  padding: 10px ${gutter};
  background: rgba(7, 8, 12, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid ${colors.line};
  font-family: ${fonts.display};
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  strong {
    color: ${({ $accent }) => $accent};
  }

  span {
    color: ${colors.muted};
    font-weight: 500;
  }
`

export const Grid = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 56px;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: clamp(40px, 6vw, 96px);
    align-items: start;
  }
`

export const Wide = styled.div`
  position: relative;
  max-width: 1280px;
  margin: clamp(56px, 8vw, 96px) auto 0;
  display: grid;
  gap: clamp(48px, 6vw, 72px);
`

export const Index = styled.p<{ $accent: string }>`
  font-family: ${fonts.display};
  color: ${({ $accent }) => $accent};
  font-weight: 600;
  margin-bottom: 16px;
`

export const Name = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(2.6rem, 8vw, 6.5rem);
  line-height: 1;
  letter-spacing: -0.04em;
  overflow-wrap: break-word;

  @media (min-width: 960px) {
    font-size: clamp(2.4rem, 4.4vw, 6.5rem);
  }
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

export const WideSteps = styled(Steps)`
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
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

const comparisonColumns = 'minmax(0, 1fr) 40px minmax(0, 1.15fr)'

export const ComparisonHead = styled.div<{ $accent: string }>`
  display: none;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: ${comparisonColumns};
    gap: 20px;
    padding: 0 22px 10px;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${colors.muted};

    span:last-child {
      grid-column: 3;
      color: ${({ $accent }) => $accent};
    }
  }
`

export const Comparison = styled.ul<{ $accent: string }>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;

  li {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;
    padding: clamp(16px, 4vw, 20px);
    border: 1px solid ${colors.line};
    border-radius: 18px;
    background: ${colors.surface};
    transition: border-color 0.3s;

    @media (min-width: 600px) {
      grid-template-columns: ${comparisonColumns};
      align-items: center;
      gap: 20px;
      padding: 20px 22px;
    }
  }

  li:hover {
    border-color: ${({ $accent }) => $accent}55;
  }

  li > div {
    display: grid;
    gap: 4px;
  }

  small {
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${colors.muted};

    @media (min-width: 600px) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
    }
  }

  li > div:first-of-type span {
    color: ${colors.muted};
    font-size: 0.95rem;
  }

  li > div:last-of-type small {
    color: ${({ $accent }) => $accent};
  }

  li > div:last-of-type span {
    font-family: ${fonts.display};
    font-size: 1.05rem;
    font-weight: 600;
  }
`

export const Arrow = styled.span<{ $accent: string }>`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $accent }) => $accent}22;
  color: ${({ $accent }) => $accent};
  font-weight: 700;
  transform: rotate(90deg);

  @media (min-width: 600px) {
    width: 40px;
    height: 40px;
    transform: none;
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
  aspect-ratio: 16 / 10;
  border-radius: 16px;
  overflow: hidden;
  touch-action: pan-y;
`

export const Photo = styled.img`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
`

export const After = styled(motion.div)`
  position: absolute;
  inset: 0;
`

export const Handle = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  margin-left: -1.5px;
  background: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.45);
  pointer-events: none;

  &::after {
    content: '↔';
    position: absolute;
    top: 50%;
    left: 50%;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    border-radius: 50%;
    background: #fff;
    color: #07080c;
    font-weight: 700;
  }
`

export const Range = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: ew-resize;

  &:focus-visible + ${Handle} {
    outline: 2px solid ${colors.accent};
    outline-offset: 4px;
  }
`

export const Tag = styled.span<{ $right?: boolean }>`
  position: absolute;
  bottom: 12px;
  ${({ $right }) => ($right ? 'right: 12px;' : 'left: 12px;')}
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(7, 8, 12, 0.7);
  font-size: 0.8rem;
  font-weight: 600;
  pointer-events: none;
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
