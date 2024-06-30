// components/GitHubCard.js

import React from 'react';
import styles from './GitHubCard.module.css';
import Image from 'next/image';

interface RepoCardProps {
  owner: string;
  repo_name: string;
  avatar_url: string;
  link: string;
}

const RepoCard = (repo: RepoCardProps) => {
  // https://github.com/processing/p5.js-web-editor/pulls?q=is%3Apr%20author%3Alindapaiste
  
  const repoLink = `https://github.com/${repo.owner}/${repo.repo_name}/pulls?q=is%3Apr+author%3Alindapaiste`;
  
  
  
  return (
    <div className={styles.githubCard}>
      <div className={styles.cardHeader}>
        <Image src={repo.avatar_url} alt="Project Logo" className={styles.projectLogo} />
        <div>
          <h2 className={styles.projectName}>{repo.repo_name}</h2>
          <p className={styles.projectOrg}>{repo.owner}</p>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.stats}>
          {/* <div className={styles.stat}>
            <span className={styles.statLabel}>PR</span>
            <span className={styles.statValue}>{repo.forks_count}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{repo.forks_count}</span>
            <span className={styles.statLabel}>Forks</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{repo.stargazers_count}</span>
            <span className={styles.statLabel}>Stars</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{repo.open_issues_count}</span>
            <span className={styles.statLabel}>Issues</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
