import React from 'react';
import RepoCard from './RepoCard';
import { contributedRepo } from '@/constants/github';
import { RepoCardProps } from '@/utils/lib/types/repoCard';

const GitHubRepoCards = () => {
  return (
    <>
      <div>GitHubRepoCards</div>
      {contributedRepo.map((value: RepoCardProps) => (
        <RepoCard repo={value} key={value.repo_name} />
      ))}
    </>
  );
};

export default GitHubRepoCards;