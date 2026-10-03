import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { ease } from '../../theme'
import roomBefore from '../../assets/room-before.jpg'
import roomAfter from '../../assets/room-after.jpg'
import { Reveal } from '../Reveal'
import {
  After, Badge, Block, Chip, Compare, Fill, Grid, Handle, Index, Levels, Line, Name, Note, Photo, Range, Role, Section, Statuses, Step, Steps, Sticky, Tabs, Tag, Tagline, Track, Visit, Visual,
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

function RoomVisual({ accent }: { accent: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()
  const [pos, setPos] = useState(50)
  const intro = useRef<{ stop: () => void } | null>(null)

  useEffect(() => {
    if (!inView || reduceMotion) return
    intro.current = animate(8, 50, { duration: 1.6, ease, onUpdate: setPos })
    return () => intro.current?.stop()
  }, [inView, reduceMotion])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    intro.current?.stop()
    setPos(Number(e.target.value))
  }

  return (
    <Visual $accent={accent}>
      <small>House, Hilversum · 2025 · drag to compare</small>
      <Compare ref={ref}>
        <Photo
          src={roomBefore}
          alt="Living room before the renovation, with a dark leather corner sofa and a brick wall with a wood stove"
          loading="lazy"
        />
        <After animate={{ clipPath: `inset(0 0% 0 ${pos}%)` }} transition={{ duration: 0 }}>
          <Photo
            src={roomAfter}
            alt="The same living room after the renovation, with a herringbone floor, a blue corner sofa and a large window"
            loading="lazy"
          />
        </After>
        <Tag>Before</Tag>
        <Tag $right>After</Tag>
        <Range type="range" min={0} max={100} value={pos} onChange={onChange} aria-label="Compare before and after" />
        <Handle animate={{ left: `${pos}%` }} transition={{ duration: 0 }} aria-hidden="true" />
      </Compare>
      <Tabs aria-hidden="true">
        <span>Dashboard</span>
        <span>Gallery</span>
        <span>Projects</span>
      </Tabs>
    </Visual>
  )
}

function RemodoVisual({ accent }: { accent: string }) {
  const projects = [
    { label: 'Kitchen', progress: 0.8 },
    { label: 'Bathroom', progress: 0.55 },
    { label: 'Roof', progress: 0.3 },
  ]
  return (
    <Visual $accent={accent} aria-hidden="true">
      <small>Illustrative · project dashboard</small>
      {projects.map((p, i) => (
        <Line
          key={p.label}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ delay: i * 0.18, duration: 0.6, ease }}
        >
          <span>{p.label}</span>
          <Track>
            <Fill
              $accent={accent}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: p.progress }}
              viewport={viewport}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.18, ease }}
            />
          </Track>
        </Line>
      ))}
      <Tabs>
        <span>Projects</span>
        <span>Invoices</span>
        <span>Workers</span>
        <span>Reports</span>
      </Tabs>
    </Visual>
  )
}

const visuals = {
  coachcub: CoachCubVisual,
  frankbeam: FrankBeamVisual,
  roomtransformations: RoomVisual,
  remodo: RemodoVisual,
}

export function CaseStudy({ study }: CaseStudyProps) {
  const { accent } = study
  const VisualComponent = visuals[study.id]
  return (
    <Section id={study.id === 'coachcub' ? 'work' : undefined} $accent={accent}>
      <Grid>
        <Sticky>
          <Reveal>
            <Index $accent={accent}>{study.index} — Case study</Index>
            <Name>{study.name}</Name>
            <Role>{study.role}</Role>
            {study.note && <Note>{study.note}</Note>}
            <Tagline>{study.tagline}</Tagline>
            <Visit
              $accent={accent}
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {study.linkLabel ?? `Visit ${study.url.replace('https://', '')}`} ↗
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
          <Reveal>
            <VisualComponent accent={accent} />
          </Reveal>
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
