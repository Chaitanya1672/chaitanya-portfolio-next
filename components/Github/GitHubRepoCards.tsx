import React from 'react';
import RepoCard from './RepoCard';
import { contributedRepo } from '@/constants/github';

const GitHubRepoCards = () => {
  return (
    <>
      <h1 className="project-heading text-center">Open Source Contributions</h1>
      <div className="parent-repo-card d-flex m-auto flex-wrap">
        {contributedRepo.map((repo) => (
          <RepoCard key={repo.repo_name} repo={repo} />
        ))}
      </div>
    </>
  );
};

export default GitHubRepoCards;
