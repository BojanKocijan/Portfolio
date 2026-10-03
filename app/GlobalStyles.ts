import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './theme'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: ${colors.bg};
    color: ${colors.text};
    font-family: ${fonts.body};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  h1, h2, h3, p { margin: 0; }
  a { color: inherit; }
  ::selection { background: ${colors.accent}; color: ${colors.bg}; }
  :focus-visible { outline: 2px solid ${colors.accent}; outline-offset: 4px; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
  }
`
