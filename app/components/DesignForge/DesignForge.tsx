import { designForge } from '../../content'
import { ease } from '../../theme'
import { Reveal } from '../Reveal'
import { Label, Law, Laws, Link, Panel, Section, Text, Title } from './DesignForge.styles'

export function DesignForge() {
  return (
    <Section>
      <Panel>
        <Reveal>
          <Label>{designForge.label}</Label>
          <Title>{designForge.title}</Title>
          <Text>{designForge.text}</Text>
          <Link
            href={designForge.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Read the laws on GitHub ↗
          </Link>
        </Reveal>
        <Laws>
          {designForge.laws.map((law, i) => (
            <Law
              key={law}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
            >
              {law}
            </Law>
          ))}
        </Laws>
      </Panel>
    </Section>
  )
}
