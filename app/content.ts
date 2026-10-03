export interface CaseStudyData {
  id: 'coachcub' | 'frankbeam' | 'roomtransformations'
  index: string
  name: string
  url: string
  linkLabel?: string
  role: string
  tagline: string
  accent: string
  problem: string
  steps: { title: string; text: string }[]
}

export interface TimelineEntry {
  org: string
  role: string
  period: string
  place: string
  note: string
}

export const profile = {
  name: 'Bojan Kocijan',
  title: 'UX Manager',
  linkedin: 'https://www.linkedin.com/in/bojankocijan/',
  email: 'kocijan@gmail.com',
  headline: ['Design', 'that', 'moves', 'the', 'business.'],
  intro:
    'Twenty years in UX. I lead design systems and governance-first AI adoption, and I measure design by what it actually moves.',
  ticker: [
    'Design systems',
    'Governance-first AI adoption',
    'Design thinking',
    'Agile delivery',
    'Research',
    'Clean handoff',
    'Team leadership',
  ],
}

export const about = {
  lead: 'A listener, a problem solver, and a designer who owns business outcomes, not just screens.',
  body: [
    'I’ve been doing UX for 20 years, since long before it was a job title everyone wanted. I came up through the “make it pretty” era and chose, deliberately, to become something more.',
    'Today I work at the front edge of the field: leading governance-first AI adoption, building design systems that scale, and helping teams solve genuinely hard problems through innovation, design thinking, and Agile delivery.',
    'I know the difference between design that looks good and design that drives the business. I bring clarity to ambiguity, momentum to stalled work, and value where it counts.',
  ],
  pillars: [
    { title: 'Design systems', text: 'Standards and components that scale across products and teams.' },
    { title: 'Governance-first AI', text: 'Adopting AI with guardrails, so speed never costs trust.' },
    { title: 'Research to handoff', text: 'Sharper research, cleaner handoff, real outcomes.' },
  ],
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 'coachcub',
    index: '01',
    name: 'CoachCub',
    url: 'https://coachcub.app',
    role: 'Founder · Product & UX',
    tagline: 'Youth basketball training, made playful.',
    accent: '#ff7a3d',
    problem:
      'Parents pay for their children’s sports but can’t see how they are progressing, or when the diploma is coming. Every club runs on a different tool, so families juggle several.',
    steps: [
      { title: 'One platform across clubs', text: 'A single place for families, whichever club the child plays for.' },
      { title: 'Progress parents can follow', text: 'Skills and milestones become visible instead of being guessed from the sideline.' },
      { title: 'A clear road to the diploma', text: 'Parents and kids see what is left to earn, and when it lands.' },
      { title: 'Playful for children', text: 'Game-like mechanics keep training engaging for young players.' },
    ],
  },
  {
    id: 'frankbeam',
    index: '02',
    name: 'FrankBeam',
    url: 'https://frankbeam.com',
    role: 'Founder · Product & UX',
    tagline: 'Invoice your clients. Get paid on time.',
    accent: '#6d6cff',
    problem:
      'FrankBeam began as a way to track budgets and organise the money in a remodelling project. Following the real pain, it became invoicing for Dutch renovation contractors who work from their phone.',
    steps: [
      { title: 'Started as a budget tracker', text: 'It grew out of the Room Transformations idea: tracking budgets and organising the money in a remodelling project.' },
      { title: 'Correct Dutch BTW', text: 'Invoices use the right rates (21%, 9% or 0%) without the contractor thinking about it.' },
      { title: 'Phone first', text: 'Create a PDF and email it to the client without opening a laptop.' },
      { title: 'See who owes you', text: 'Outstanding, overdue and paid invoices at a glance, so follow-ups happen early.' },
    ],
  },
  {
    id: 'roomtransformations',
    index: '03',
    name: 'Room Transformations',
    url: 'https://room-transformations-321fcdf4.base44.app/',
    linkLabel: 'Open the prototype',
    role: 'Concept · Product & UX',
    tagline: 'Showcase stunning before-and-after transformations of home rooms.',
    accent: '#2dd4bf',
    problem:
      'A remodelling project spreads across budgets, rooms and photos, with no single place to organise it. This prototype explored tracking the budget and the project in one app, and showing the result as a before-and-after story.',
    steps: [
      { title: 'One home for the project', text: 'Remodelling projects are organised in a single place instead of scattered notes.' },
      { title: 'Budget in view', text: 'The idea of tracking the money alongside the work, which later shaped FrankBeam.' },
      { title: 'Before-and-after gallery', text: 'Each room tells its transformation visually, from the first photo to the finished result.' },
      { title: 'Three simple areas', text: 'Dashboard, Gallery and Projects keep the structure easy to scan.' },
    ],
  },
]

export const timeline: TimelineEntry[] = [
  {
    org: 'Digital.ai',
    role: 'User Experience Manager',
    period: 'Dec 2022 – Present',
    place: 'Hilversum, Netherlands',
    note: 'Design standards and prototyping, with a mature design system at the centre of how the teams work.',
  },
  {
    org: 'Digital.ai',
    role: 'Design Guild Lead',
    period: 'Mar 2022 – Dec 2022',
    place: 'Hilversum, Netherlands',
    note: 'Ran the design guild and set the standards other designers build on.',
  },
  {
    org: 'Digital.ai',
    role: 'Senior User Experience Designer',
    period: 'Dec 2020 – Mar 2022',
    place: 'Hilversum, Netherlands',
    note: 'Design standards and prototyping for enterprise software.',
  },
  {
    org: 'XebiaLabs',
    role: 'Senior UI/UX & Interaction Designer',
    period: 'Mar 2018 – Dec 2020',
    place: 'Hilversum, Netherlands',
    note: 'Synthesised needs from customers, stakeholders, architects and engineers, then rapidly iterated prototypes from concept to demo.',
  },
  {
    org: 'City Expert',
    role: 'UX Consultant & UX/UI Designer',
    period: 'Sep 2017 – Mar 2018',
    place: 'Belgrade, Serbia',
    note: 'Data-driven design: features shipped behind flags, tested with real users, then redesigned from the feedback.',
  },
  {
    org: 'CONDA Crowdinvesting',
    role: 'UX/UI Designer',
    period: 'Oct 2016 – Feb 2018',
    place: 'Serbia',
    note: 'White-label crowd-investing platform for an Austrian FinTech startup, validated with B2B users and platform owners.',
  },
  {
    org: 'Mercator-S',
    role: 'Lead Designer',
    period: 'Jun 2008 – Oct 2016',
    place: 'Serbia',
    note: 'Eight years as lead designer: the IDEA online shop, Super Kartica, and a Mailchimp e-commerce integration with the web store and Google Analytics.',
  },
]

export const recognition = {
  focus: ['Design systems', 'AI governance', 'Design thinking', 'Agile delivery', 'Prototyping', 'Design standards', 'UX research', 'Team leadership'],
  awards: [
    'First prize, animated film “The Bugs” (2004)',
    'Design nominations, Suncane skale festival (2006, 2008)',
  ],
  education: ['VISER, Bachelor’s degree in Computer Science'],
  languages: ['English (professional)', 'Serbian (native)'],
}

export const designForge = {
  url: 'https://github.com/BojanKocijan/design-forge',
  label: 'Open source · Rules and skills for Claude Code',
  title: 'Rules and skills that make AI work like a senior teammate.',
  text: 'Governance-first AI adoption, made concrete. Design Forge is my open-source set of binding rules, reusable skills and agents that govern how Claude Code plans, builds and ships work.',
  stats: [
    { value: '37', label: 'Rules' },
    { value: '17', label: 'Skills' },
    { value: '8', label: 'Agents' },
  ],
  rules: [
    'Announce before acting',
    'Branch and issue before code',
    'Never push to main',
    'Never merge for you',
    'Small, atomic PRs',
    'Accessibility baked in',
  ],
  skills: [
    'Design critique',
    'Developer handoff',
    'UX writing',
    'Figma craft',
    'UX research',
    'Feature workflow',
    'Project scaffold',
    'Frontend guide',
  ],
}
