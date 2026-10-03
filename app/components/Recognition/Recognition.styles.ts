import styled from 'styled-components'
import { colors, fonts } from '../../theme'

export const Section = styled.section`
  padding: clamp(64px, 10vw, 120px) clamp(20px, 5vw, 72px);
  border-top: 1px solid ${colors.line};
`

export const Grid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Card = styled.div`
  padding: 32px;
  border: 1px solid ${colors.line};
  border-radius: 24px;
  background: ${colors.surface};

  h3 {
    font-family: ${fonts.display};
    font-size: 1.2rem;
    margin-bottom: 18px;
  }

  ul {
    margin: 0;
    padding-left: 18px;
    color: ${colors.muted};
    display: grid;
    gap: 8px;
  }
`

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    padding: 8px 16px;
    border: 1px solid ${colors.line};
    border-radius: 999px;
    color: ${colors.text};
    font-size: 0.9rem;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  span:hover {
    background: ${colors.accent};
    color: ${colors.bg};
    border-color: ${colors.accent};
  }
`
