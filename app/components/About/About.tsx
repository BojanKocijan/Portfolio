import { about } from '../../content'
import { Reveal } from '../Reveal'
import { Body, Columns, Label, Lead, Pillar, Pillars, Section } from './About.styles'

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
      </Columns>
    </Section>
  )
}
