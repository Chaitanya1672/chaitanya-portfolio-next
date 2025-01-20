import React from 'react'
// import RepoCard from './RepoCard'
import { contributedRepo } from '@/constants/github'
import ContributionCard from './ContributionCard'

const GitHubRepoCards = () => {
  return (
    <>
      <h1 className="project-heading">Open Source Contributions</h1>
      <div className="parent-repo-card">
        {contributedRepo.map((repo) => (
          // <RepoCard key={repo.repo_name} repo={repo} />
          <ContributionCard key={repo.repo_name} repo={repo} />
        ))}
      </div>
    </>
  )
}

export default GitHubRepoCards
