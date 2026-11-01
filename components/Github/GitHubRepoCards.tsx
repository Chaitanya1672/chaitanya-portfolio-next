import { contributedRepo } from '@/constants/github'
import ContributionCard from './ContributionCard'

export default function GitHubRepoCards() {
  return (
    <>
      <h1 className="project-heading">Open Source Contributions</h1>
      <div className="parent-repo-card">
        {contributedRepo.map((repo) => (
          <ContributionCard key={repo.repo_name} repo={repo} />
        ))}
      </div>
    </>
  )
}
