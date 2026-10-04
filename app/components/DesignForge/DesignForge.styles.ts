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
  padding: clamp(22px, 5vw, 72px);
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
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  margin-top: 28px;
  padding: 14px 26px;
  border-radius: 999px;
  background: ${colors.accent};
  color: ${colors.bg};
  font-weight: 600;
  text-decoration: none;
`

export const Coffee = styled.p`
  margin-top: 20px;
  color: ${colors.muted};
  font-size: 0.95rem;
  max-width: 56ch;

  a {
    color: ${colors.accent};
    text-underline-offset: 3px;
  }
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

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 32px;
  margin-top: 28px;
`

export const Stat = styled.div`
  strong {
    display: block;
    font-family: ${fonts.display};
    font-size: 2.4rem;
    line-height: 1;
    color: ${colors.accent};
  }

  span {
    color: ${colors.muted};
    font-size: 0.9rem;
  }
`

export const Group = styled.div`
  & + & {
    margin-top: 28px;
  }
`

export const GroupTitle = styled.h3`
  margin-bottom: 14px;
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.muted};
`

export const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    padding: 8px 16px;
    border: 1px solid ${colors.line};
    border-radius: 999px;
    background: ${colors.bg};
    font-size: 0.9rem;
  }
`

export const HabitChips = styled(SkillChips)`
  span {
    border-color: ${colors.accent}55;
    color: ${colors.accent};
    background: ${colors.accent}12;
  }

  span::before {
    content: '✓';
    margin-right: 8px;
  }
`
