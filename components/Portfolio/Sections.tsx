import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { IconType } from 'react-icons'
import { FaAws, FaJava } from 'react-icons/fa'
import {
  SiAngular,
  SiBitbucket,
  SiBootstrap,
  SiConfluence,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGitlab,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJira,
  SiJavascript,
  SiMui,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiTerraform,
  SiThreedotjs,
  SiTypescript,
} from 'react-icons/si'
import { companyExperience, skillGroups } from '@/constants/portfolio'
import ContactForm from '@/components/Portfolio/ContactForm'
// import ScrollToTopButton from '@/components/Portfolio/ScrollToTopButton'

const skillIcons: Record<string, IconType> = {
  angular: SiAngular,
  aws: FaAws,
  bitbucket: SiBitbucket,
  bootstrap: SiBootstrap,
  confluence: SiConfluence,
  css: SiCss,
  docker: SiDocker,
  express: SiExpress,
  figma: SiFigma,
  firebase: SiFirebase,
  framer: SiFramer,
  gitlab: SiGitlab,
  github: SiGithub,
  graphql: SiGraphql,
  html: SiHtml5,
  java: FaJava,
  jira: SiJira,
  javascript: SiJavascript,
  mui: SiMui,
  mongodb: SiMongodb,
  mysql: SiMysql,
  nestjs: SiNestjs,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  prisma: SiPrisma,
  react: SiReact,
  reactquery: SiReactquery,
  redux: SiRedux,
  springboot: SiSpringboot,
  tailwind: SiTailwindcss,
  terraform: SiTerraform,
  threejs: SiThreedotjs,
  typescript: SiTypescript,
}

export function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <h1 className="skill-heading">Skills</h1>
      <p className="skill-intro">
        Technologies and tools I use to build and ship software.
      </p>
      <div className="skills-container">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.title}>
            <h2 className="skill-title">{group.title}</h2>
            <div className="skills-grid">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill.icon]

                return (
                  <div className="skill-card" key={skill.name}>
                    <Icon
                      className="skill-icon"
                      style={{ color: skill.color }}
                      aria-hidden="true"
                      focusable="false"
                    />
                    <span>{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section className="experience" id="experience">
      <h1 className="section-title">Experience</h1>
      <div className="experience-container">
        {companyExperience.map((item) => (
          <article className="experience-item" key={item.company}>
            <h2 className="experience-title">{item.title}</h2>
            <p className="experience-company">
              <a href={item.companyLink} target="_blank" rel="noreferrer">
                {item.company}
              </a>
            </p>
            <p className="experience-date">{item.date}</p>
            <ul className="experience-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <ContactForm />

      <h2 className="rights">
        All rights reserved{' '}
        <span className="rights-name">
          <a
            href="https://www.linkedin.com/in/chaitanya-narhare/"
            target="_blank"
            rel="noreferrer"
          >
            @Chaitanya
          </a>
        </span>
      </h2>
      <h3 className="open-source-header">Check out my:</h3>
      <Link className="open-source" href="/open-source">
        <h4>
          Open Source Contributions
          <Image
            className="link-arrow"
            src="/Images/link-arrow-white.svg"
            alt=""
            width={25}
            height={25}
          />
        </h4>
      </Link>
    </section>
  )
}

export function PortfolioSectionPage({ children }: { children: ReactNode }) {
  return (
    <main className="portfolio-home">
      {children}
      {/* <ScrollToTopButton /> */}
    </main>
  )
}
