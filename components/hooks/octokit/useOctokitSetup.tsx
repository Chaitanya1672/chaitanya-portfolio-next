'use client'
import { githubAccessToken } from '@/constants/github'
import { Octokit } from '@octokit/rest'

// Replace with your GitHub token
export const useOctokitSetup = () => {
  const octokit = new Octokit({
    auth: githubAccessToken,
  })

  return octokit
}
