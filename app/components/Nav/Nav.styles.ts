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
  gap: 16px;
  padding: 6px max(clamp(20px, 5vw, 72px), env(safe-area-inset-right)) 6px max(clamp(20px, 5vw, 72px), env(safe-area-inset-left));
  font-family: ${fonts.display};
  font-weight: 600;

  > a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    white-space: nowrap;
    text-decoration: none;
  }

  div {
    display: flex;
    gap: clamp(2px, 2.5vw, 32px);
    font-size: clamp(0.8rem, 2.4vw, 0.95rem);
    font-weight: 500;
    color: ${colors.muted};
  }

  div a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 4px;
    text-decoration: none;
    transition: color 0.2s;
  }

  div a:hover {
    color: ${colors.text};
  }
`
