import { profile } from '../../content'
import { Reveal } from '../Reveal'
import { Actions, Button, Footer, Heading, Section, Sub } from './Contact.styles'

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <Heading>Let’s compare notes.</Heading>
        <Sub>Always open to talking with people building boldly in UX, design systems, and AI.</Sub>
        <Actions>
          <Button
            $primary
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            Message me on LinkedIn ↗
          </Button>
          <Button href={`mailto:${profile.email}`} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
            {profile.email}
          </Button>
        </Actions>
      </Reveal>
      <Footer>© {new Date().getFullYear()} {profile.name}</Footer>
    </Section>
  )
}
