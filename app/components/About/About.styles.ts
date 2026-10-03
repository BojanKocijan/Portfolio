import styled from 'styled-components'
import { colors, fonts } from '../../theme'

export const Section = styled.section`
  padding: clamp(80px, 14vw, 180px) clamp(20px, 5vw, 72px);
  max-width: 1280px;
  margin: 0 auto;
`

export const Label = styled.p`
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.accent};
  margin-bottom: 24px;
`

export const Lead = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.03em;
  max-width: 18ch;
`

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  margin-top: 64px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 96px;
  }
`

export const Body = styled.div`
  display: grid;
  gap: 20px;
  color: ${colors.muted};
  font-size: 1.1rem;
`

export const Pillars = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
`

export const Pillar = styled.li`
  padding: 24px;
  border: 1px solid ${colors.line};
  border-radius: 20px;
  background: ${colors.surface};
  transition: transform 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.accent};
  }

  h3 {
    font-family: ${fonts.display};
    font-size: 1.25rem;
    margin-bottom: 6px;
  }

  p {
    color: ${colors.muted};
  }
`
