import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { experienceStartDate, projects } from '@/constants/portfolio'
import TypingText from '@/components/Portfolio/TypingText'
import { getYearsOfExperience } from '@/utils/experience'

export default function HomePage() {
  const yearsOfExperience = getYearsOfExperience(experienceStartDate)
  const featuredProjects = projects
    .filter((project) => !project.privateRepo)
    .slice(0, 3)

  return (
    <main className="portfolio-home">
      <section className="main-section" id="home">
        <div className="mainContainer">
          <div className="mainDetails">
            <h1>Hey I&apos;m Chaitanya 👋</h1>
            <div className="wrapper">
              <div className="static-text">
                I&apos;m <TypingText />
                <span className="bar">|</span>
              </div>
            </div>
            <div className="intro-text">
              <p>
                I&apos;m a full-stack developer with {yearsOfExperience} years
                of professional experience, building thoughtful front ends and
                reliable back ends. I work with{' '}
                <span className="intro-skills">Nextjs - React</span>, and{' '}
                <span className="intro-skills">Angular</span> for captivating
                user interfaces, alongside{' '}
                <span className="intro-skills">
                  Node.js (Express.js / Nest.js)
                </span>{' '}
                and <span className="intro-skills">Java (Springboot)</span> for
                back-end development. I also contribute to{' '}
                <span className="intro-skills">open-source projects</span>,
                collaborating with developers on community-driven software.
              </p>
            </div>
            <div className="home-actions">
              <Link
                className="home-action home-action-primary"
                href="/projects"
              >
                Explore my projects
              </Link>
              <Link
                className="home-action home-action-secondary"
                href="/contact"
              >
                Get in touch
              </Link>
            </div>
            <div className="home-specialties" aria-label="Areas of expertise">
              <span>React &amp; Next.js</span>
              <span>Angular &amp; Three.js</span>
              <span>Node.js</span>
              <span>Java &amp; Spring Boot</span>
            </div>
            <div className="contactLogos" aria-label="Social profiles">
              <a
                className="btn mail-btn"
                href="mailto:chaitanyanarhare111@gmail.com"
                aria-label="Email Chaitanya"
              >
                <Mail aria-hidden="true" />
              </a>
              <a
                className="btn github-btn"
                href="https://github.com/Chaitanya1672"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <Github aria-hidden="true" />
              </a>
              <a
                className="btn instagram-btn"
                href="https://www.linkedin.com/in/chaitanya-narhare/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin aria-hidden="true" />
              </a>
              <a
                className="btn instagram-btn"
                href="https://twitter.com/Chaitanya_NN"
                target="_blank"
                rel="noreferrer"
                aria-label="X profile"
              >
                <Twitter aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mainImg">
            <Image
              src="/Images/codingAvatar.png"
              alt="Developer working on a laptop"
              width={500}
              height={500}
              sizes="(max-width: 709px) 250px, 500px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="featured-work">
        <div className="featured-work-heading">
          <div>
            <p className="featured-work-eyebrow">
              A few things I&apos;ve built
            </p>
            <h2>Featured projects</h2>
          </div>
          <Link className="featured-work-all" href="/projects">
            View all projects <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <article className="featured-project" key={project.title}>
              <Image
                className="featured-project-image"
                src={project.imageSrc}
                alt={`${project.title} project preview`}
                width={600}
                height={300}
              />
              <div className="featured-project-details">
                <h3>{project.title}</h3>
                <div className="featured-project-links">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink aria-hidden="true" />
                    Live demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
