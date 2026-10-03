import styled, { css, keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '../../theme'

const scroll = keyframes`
  to { transform: translateX(-50%); }
`

export const Section = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 clamp(20px, 5vw, 72px);
`

export const Glow = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(198, 255, 77, 0.22), rgba(109, 108, 255, 0.14) 45%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
`

export const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;
  font-family: ${fonts.display};
  font-weight: 600;

  > span {
    white-space: nowrap;
  }

  div {
    display: flex;
    gap: clamp(10px, 3vw, 36px);
    font-size: clamp(0.8rem, 2.4vw, 0.95rem);
    font-weight: 500;
    color: ${colors.muted};
  }

  a {
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: ${colors.text};
  }
`

export const Content = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0 64px;
`

export const Eyebrow = styled(motion.p)`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border: 1px solid ${colors.line};
  border-radius: 999px;
  color: ${colors.muted};
  font-size: 0.9rem;
  margin-bottom: 32px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${colors.accent};
  }
`

export const Title = styled.h1`
  font-family: ${fonts.display};
  font-size: clamp(3rem, 11vw, 9.5rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.04em;
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.25em;
`

export const Mask = styled.span`
  display: inline-block;
  overflow: hidden;
  padding-bottom: 0.12em;
`

export const Word = styled(motion.span)<{ $accent: boolean }>`
  display: inline-block;
  ${({ $accent }) =>
    $accent &&
    css`
      background: linear-gradient(100deg, ${colors.coachcub}, ${colors.accent} 50%, ${colors.frankbeam});
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    `}
`

export const Intro = styled(motion.p)`
  max-width: 620px;
  margin-top: 36px;
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  color: ${colors.muted};
`

export const Cta = styled(motion.a)`
  align-self: flex-start;
  margin-top: 40px;
  padding: 16px 28px;
  border-radius: 999px;
  background: ${colors.accent};
  color: ${colors.bg};
  font-weight: 600;
  text-decoration: none;
`

export const Ticker = styled.div`
  position: relative;
  margin: 0 calc(-1 * clamp(20px, 5vw, 72px));
  border-block: 1px solid ${colors.line};
  overflow: hidden;
  white-space: nowrap;
`

export const Track = styled.div`
  display: inline-flex;
  width: max-content;
  animation: ${scroll} 28s linear infinite;

  span {
    padding: 18px 28px;
    font-family: ${fonts.display};
    font-size: 1.05rem;
    color: ${colors.muted};
  }

  span::after {
    content: '✦';
    margin-left: 56px;
    color: ${colors.accent};
  }
`
