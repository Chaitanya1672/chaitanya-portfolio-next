import React from 'react'
import { Github, ExternalLink, GitPullRequest, CircleDot } from 'lucide-react'
import styles from './ContributionCard.module.css'
import { RepoCardProps } from '@/utils/lib/types/repoCard'
import Image from 'next/image'

const ContributionCard = ({ repo }: { repo: RepoCardProps }) => {
  const {
    avatar_url,
    repo_name,
    owner,
    link,
    pr_link,
    issues_link,
    issues_count,
    pr_count,
    stars,
    forks,
  } = repo

  const StatBox = ({
    label,
    value,
    link,
    icon: Icon,
  }: {
    label: string
    value: number | string
    link?: string
    icon?: React.ComponentType<any>
  }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.statBox}
    >
      <div className={styles.statHeader}>
        {Icon && <Icon className={styles.statIcon} />}
        <p className={styles.statLabel}>{label}</p>
      </div>
      <p className={styles.statValue}>{value.toLocaleString()}</p>
    </a>
  )

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatarContainer}>
          {avatar_url ? (
            <Image
              src={avatar_url}
              alt={`${repo_name} logo`}
              className={styles.avatar}
              width={40}
              height={40}
            />
          ) : (
            <Github className={styles.avatar} />
          )}
          <div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoLink}
            >
              {repo_name}
              <ExternalLink className={styles.externalIcon} />
            </a>
            <p className={styles.owner}>{owner}</p>
          </div>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <StatBox label="Stars" value={stars} link={link} icon={Github} />
        <StatBox
          label="Forks"
          value={forks}
          link={`${link}/fork`}
          icon={Github}
        />
        <StatBox
          label="Pull Requests"
          value={pr_count}
          link={pr_link}
          icon={GitPullRequest}
        />
        <StatBox
          label="Issues"
          value={issues_count}
          link={issues_link}
          icon={CircleDot}
        />
      </div>
    </div>
  )
}

export default ContributionCard
