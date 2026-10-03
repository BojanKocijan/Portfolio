import { ease } from '../../theme'
import { Reveal } from '../Reveal'
import {
  Badge, Block, Chip, Fill, Grid, Index, Levels, Line, Name, Role, Section, Statuses, Step, Steps, Sticky, Tagline, Track, Visit, Visual,
} from './CaseStudy.styles'
import type { CaseStudyProps } from './CaseStudy.types'

const viewport = { once: true, margin: '-60px' }

function CoachCubVisual({ accent }: { accent: string }) {
  return (
    <Visual $accent={accent} aria-hidden="true">
      <small>Illustrative · season progress</small>
      <Levels>
        <span>Rookie</span>
        <span>Dribbler</span>
        <span>Playmaker</span>
        <span>Diploma</span>
      </Levels>
      <Track>
        <Fill
          $accent={accent}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 0.72 }}
          viewport={viewport}
          transition={{ duration: 1.6, ease }}
        />
      </Track>
      <Badge
        $accent={accent}
        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={viewport}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 12 }}
      >
        Next: Diploma
      </Badge>
    </Visual>
  )
}

function FrankBeamVisual({ accent }: { accent: string }) {
  const lines = [
    { label: 'Labour', rate: 'BTW 21%' },
    { label: 'Materials', rate: 'BTW 21%' },
    { label: 'Renovation work', rate: 'BTW 9%' },
  ]
  return (
    <Visual $accent={accent} aria-hidden="true">
      <small>Illustrative · invoice</small>
      {lines.map((l, i) => (
        <Line
          key={l.label}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ delay: i * 0.18, duration: 0.6, ease }}
        >
          <span>{l.label}</span>
          <Chip $accent={accent}>{l.rate}</Chip>
        </Line>
      ))}
      <Statuses>
        <span>Outstanding</span>
        <span>Overdue</span>
        <span>Paid</span>
      </Statuses>
    </Visual>
  )
}

export function CaseStudy({ study }: CaseStudyProps) {
  const { accent } = study
  return (
    <Section id={study.id === 'coachcub' ? 'work' : undefined} $accent={accent}>
      <Grid>
        <Sticky>
          <Reveal>
            <Index $accent={accent}>{study.index} — Case study</Index>
            <Name>{study.name}</Name>
            <Role>{study.role}</Role>
            <Tagline>{study.tagline}</Tagline>
            <Visit
              $accent={accent}
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Visit {study.url.replace('https://', '')} ↗
            </Visit>
          </Reveal>
        </Sticky>
        <div>
          <Reveal>
            <Block>
              <h3>The problem</h3>
              <p>{study.problem}</p>
            </Block>
          </Reveal>
          <br />
          <Reveal>{study.id === 'coachcub' ? <CoachCubVisual accent={accent} /> : <FrankBeamVisual accent={accent} />}</Reveal>
          <br />
          <Block>
            <h3>What I designed</h3>
          </Block>
          <Steps>
            {study.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Step $accent={accent}>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </Step>
              </Reveal>
            ))}
          </Steps>
        </div>
      </Grid>
    </Section>
  )
}
