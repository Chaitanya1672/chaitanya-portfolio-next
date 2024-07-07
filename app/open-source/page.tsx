'use client';
import GitHubRepoCards from '@/components/Github/GitHubRepoCards';
import { useGithubStats } from '@/components/hooks/githubApis/useGithubStats';
import React from 'react';

const OpenSourcePage = () => {
  const { pullRequests } = useGithubStats();
  console.log(pullRequests);
  return (
    <>
      <div>Open-source</div>
      <GitHubRepoCards />
    </>
  );
};

export default OpenSourcePage;
