import { about } from '../../content'
import { ease } from '../../theme'
import portrait from '../../assets/bojan.jpg'
import { Reveal } from '../Reveal'
import { Body, Columns, Label, Lead, Photo, Pillar, Pillars, Section } from './About.styles'

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <Label>About</Label>
        <Lead>{about.lead}</Lead>
      </Reveal>
      <Columns>
        <Body>
          {about.body.map((text, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>{text}</p>
            </Reveal>
          ))}
        </Body>
        <div>
          <Photo
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
          >
            <img src={portrait} alt="Ink portrait of Bojan Kocijan" loading="lazy" />
          </Photo>
          <Pillars>
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <Pillar>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Pillar>
            </Reveal>
          ))}
          </Pillars>
        </div>
      </Columns>
    </Section>
  )
}
