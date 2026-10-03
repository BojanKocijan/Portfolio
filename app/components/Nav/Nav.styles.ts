import styled from 'styled-components'
import { colors, fonts } from '../../theme'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(7, 8, 12, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid ${colors.line};
`

export const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px clamp(20px, 5vw, 72px);
  font-family: ${fonts.display};
  font-weight: 600;

  > a {
    white-space: nowrap;
    text-decoration: none;
  }

  div {
    display: flex;
    gap: clamp(10px, 3vw, 36px);
    font-size: clamp(0.8rem, 2.4vw, 0.95rem);
    font-weight: 500;
    color: ${colors.muted};
  }

  div a {
    text-decoration: none;
    transition: color 0.2s;
  }

  div a:hover {
    color: ${colors.text};
  }
`
