import { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { timeline } from '../../content'
import { Reveal } from '../Reveal'
import { Heading, Inner, Item, Label, List, Note, Org, Period, Rail, RailFill, Role, Section } from './Timeline.styles'

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] })
  const [progress, setProgress] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', setProgress)

  return (
    <Section id="journey">
      <Inner>
        <Reveal>
          <Label>Journey</Label>
          <Heading>From “make it pretty” to owning outcomes.</Heading>
        </Reveal>
        <List ref={ref}>
          <Rail aria-hidden="true">
            <RailFill animate={{ scaleY: progress }} transition={{ duration: 0.1 }} />
          </Rail>
          {timeline.map((e) => (
            <Item key={e.org + e.role}>
              <Reveal>
                <Period>{e.period}</Period>
                <Role>{e.role}</Role>
                <Org>
                  {e.org} <span>· {e.place}</span>
                </Org>
                <Note>{e.note}</Note>
              </Reveal>
            </Item>
          ))}
        </List>
      </Inner>
    </Section>
  )
}
