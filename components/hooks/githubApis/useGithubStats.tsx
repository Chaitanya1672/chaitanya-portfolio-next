'use client';
import { useEffect, useState } from 'react';
import { useOctokitSetup } from '../octokit/useOctokitSetup';

export const useGithubStats = () => {
  const [pullRequests, setPullRequests] = useState({});
  const octokit = useOctokitSetup();
  const getGithubData = async () => {
    const pulls = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
      owner: 'processing',
      repo: 'p5.js-web-editor',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    setPullRequests(pulls);
    console.log(pulls);
  };

  useEffect(() => {
    getGithubData();
  }, []);

  return {
    pullRequests,
  };
};
