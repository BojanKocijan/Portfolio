import { MotionConfig } from 'framer-motion'
import { caseStudies } from './content'
import { GlobalStyles } from './GlobalStyles'
import { About } from './components/About'
import { CaseStudy } from './components/CaseStudy'
import { Contact } from './components/Contact'
import { DesignForge } from './components/DesignForge'
import { Hero } from './components/Hero'
import { Recognition } from './components/Recognition'
import { ScrollProgress } from './components/ScrollProgress'
import { Timeline } from './components/Timeline'

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <GlobalStyles />
      <ScrollProgress />
      <main>
        <Hero />
        {caseStudies.map((study) => (
          <CaseStudy key={study.id} study={study} />
        ))}
        <Timeline />
        <About />
        <DesignForge />
        <Recognition />
        <Contact />
      </main>
    </MotionConfig>
  )
}
