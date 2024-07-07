export interface RepoCardProps {
  owner: string;
  repo_name: string;
  avatar_url: string;
  link: string;
  pr_link: string;
  issues: string;
}

export interface RepoCardComponentProps {
  repo: RepoCardProps;
}
