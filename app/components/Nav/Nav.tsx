import { profile } from '../../content'
import { Bar, Header } from './Nav.styles'

export function Nav() {
  return (
    <Header>
      <Bar aria-label="Primary">
        <a href="#top">{profile.name}</a>
        <div>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </Bar>
    </Header>
  )
}
