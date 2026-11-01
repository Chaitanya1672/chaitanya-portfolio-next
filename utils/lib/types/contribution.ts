export interface ContributionRepo {
  owner: string
  repo_name: string
  avatar_url: string
  link: string
  pr_link: string
  issues_link: string
  issues_count: number | string
  pr_count: number | string
  stars: number | string
  forks: number | string
}
