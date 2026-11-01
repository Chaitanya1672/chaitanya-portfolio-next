import {
  CircleDot,
  ExternalLink,
  GitFork,
  GitPullRequest,
  Star,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import type { ContributionRepo } from '@/utils/lib/types/contribution'
import styles from './ContributionCard.module.css'

interface StatBoxProps {
  label: string
  value: number | string
  link: string
  icon: LucideIcon
}

function StatBox({ label, value, link, icon: Icon }: StatBoxProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.statBox}
    >
      <div className={styles.statHeader}>
        <Icon className={styles.statIcon} aria-hidden="true" />
        <p className={styles.statLabel}>{label}</p>
      </div>
      <p className={styles.statValue}>{value.toLocaleString()}</p>
    </a>
  )
}

export default function ContributionCard({ repo }: { repo: ContributionRepo }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatarContainer}>
          <Image
            src={repo.avatar_url}
            alt={`${repo.repo_name} logo`}
            className={styles.avatar}
            width={40}
            height={40}
            sizes="40px"
          />
          <div>
            <a
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoLink}
            >
              {repo.repo_name}
              <ExternalLink
                className={styles.externalIcon}
                aria-hidden="true"
              />
            </a>
            <p className={styles.owner}>{repo.owner}</p>
          </div>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <StatBox
          label="Stars"
          value={repo.stars}
          link={repo.link}
          icon={Star}
        />
        <StatBox
          label="Forks"
          value={repo.forks}
          link={`${repo.link}/fork`}
          icon={GitFork}
        />
        <StatBox
          label="Pull Requests"
          value={repo.pr_count}
          link={repo.pr_link}
          icon={GitPullRequest}
        />
        <StatBox
          label="Issues"
          value={repo.issues_count}
          link={repo.issues_link}
          icon={CircleDot}
        />
      </div>
    </article>
  )
}
