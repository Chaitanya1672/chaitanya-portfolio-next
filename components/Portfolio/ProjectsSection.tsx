'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import {
  initialProjectsToShow,
  projects,
  projectsToShowPerClick,
} from '@/constants/portfolio'

function getGithubLinkProps(project: (typeof projects)[number]) {
  if (project.privateRepo) {
    return {
      'aria-disabled': true,
      tabIndex: -1,
    }
  }

  return {
    href: project.githubLink,
    target: '_blank',
    rel: 'noreferrer',
  }
}

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(initialProjectsToShow)

  return (
    <section className="projects" id="projects">
      <h1 className="project-heading">Projects</h1>
      <div className="projects-container">
        {projects.slice(0, visibleProjects).map((project) => (
          <article className="project" key={project.title}>
            <Image
              src={project.imageSrc}
              alt={`${project.title} project preview`}
              width={300}
              height={150}
            />
            <h2 className="title">{project.title}</h2>
            <div className="buttons-container">
              <span
                className="github-link-wrapper"
                title={
                  project.privateRepo ? 'This repository is private' : undefined
                }
              >
                <a className="github" {...getGithubLinkProps(project)}>
                  <Github className="project-icon" aria-hidden="true" />
                  GitHub
                </a>
              </span>
              <a
                className="live-demo"
                href={project.liveDemoLink}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink className="project-icon" aria-hidden="true" />
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
      {visibleProjects < projects.length ? (
        <button
          id="load-more-button"
          type="button"
          onClick={() =>
            setVisibleProjects((count) =>
              Math.min(count + projectsToShowPerClick, projects.length),
            )
          }
        >
          Load More
        </button>
      ) : (
        <button
          id="show-less-button"
          type="button"
          onClick={() => setVisibleProjects(initialProjectsToShow)}
        >
          Show Less
        </button>
      )}
    </section>
  )
}
