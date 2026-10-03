import { useState } from 'react'
import type { PointerEvent } from 'react'
import { profile } from '../../content'
import { ease } from '../../theme'
import { Content, Cta, Eyebrow, Glow, Intro, Mask, Nav, Section, Ticker, Title, Track, Word } from './Hero.styles'
import type { Point } from './Hero.types'

export function Hero() {
  const [pos, setPos] = useState<Point>({ x: 500, y: -100 })

  const follow = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPos({ x: e.clientX - r.left - 300, y: e.clientY - r.top - 300 })
  }

  const ticker = [...profile.ticker, ...profile.ticker]

  return (
    <Section onPointerMove={follow}>
      <Glow animate={{ x: pos.x, y: pos.y }} transition={{ type: 'spring', stiffness: 40, damping: 20 }} aria-hidden="true" />
      <Nav aria-label="Primary">
        <span>{profile.name}</span>
        <div>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </Nav>
      <Content>
        <Eyebrow initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          {profile.title} · Digital.ai · Founder of CoachCub and FrankBeam
        </Eyebrow>
        <Title aria-label={profile.headline.join(' ')}>
          {profile.headline.map((word, i) => (
            <Mask key={word + i} aria-hidden="true">
              <Word
                $accent={word === 'moves'}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease }}
              >
                {word}
              </Word>
            </Mask>
          ))}
        </Title>
        <Intro initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8, ease }}>
          {profile.intro}
        </Intro>
        <Cta
          href="#work"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          See the work ↓
        </Cta>
      </Content>
      <Ticker aria-hidden="true">
        <Track>
          {ticker.map((item, i) => (
            <span key={item + i}>{item}</span>
          ))}
        </Track>
      </Ticker>
    </Section>
  )
}
