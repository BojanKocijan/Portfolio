import { recognition } from '../../content'
import { Reveal } from '../Reveal'
import { Card, Chips, Grid, Section } from './Recognition.styles'

const lists = [
  { title: 'Awards', items: recognition.awards },
  { title: 'Education', items: recognition.education },
  { title: 'Languages', items: recognition.languages },
]

export function Recognition() {
  return (
    <Section>
      <Grid>
        <Reveal>
          <Card>
            <h3>Focus areas</h3>
            <Chips>
              {recognition.focus.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </Chips>
          </Card>
        </Reveal>
        {lists.map((l, i) => (
          <Reveal key={l.title} delay={(i + 1) * 0.08}>
            <Card>
              <h3>{l.title}</h3>
              <ul>
                {l.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  )
}
