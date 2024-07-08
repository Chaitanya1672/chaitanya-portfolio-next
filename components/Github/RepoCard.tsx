// components/GitHubCard.js
'use client';
import React from 'react';
import Image from 'next/image';
import { RepoCardProps } from '@/utils/lib/types/repoCard';
import Link from 'next/link';

const RepoCard = ({ repo }: { repo: RepoCardProps }) => {
  return (
    <div className="card border-secondary bg-dark m-3 rounded border p-3 text-white shadow-sm">
      <div className="repo-profile d-flex align-items-center mb-4 flex-row flex-wrap">
        <Image
          src={repo.avatar_url}
          width={50}
          height={50}
          alt="Avatar"
          className="rounded-circle me-3"
        />
        <div>
          <Link href={repo?.link || ''} target="_blank">
            <h2 className="h5 mb-0" style={{ lineHeight: 'inherit' }}>
              {repo?.repo_name || ''}
            </h2>
            <p className="text-light mb-0">{repo?.owner || ''}</p>
          </Link>
        </div>
      </div>
      <div>
        <div className="row mb-3">
          <div
            className="col-6 bg-secondary rounded border p-2 text-center"
            title="Stars"
          >
            <span className="text-light mx-2 my-auto">
              <Image
                src="/open-source/common/star-white.svg"
                width={15}
                height={15}
                alt="stars"
              />
            </span>
            <span className="h6 font-weight-bold my-auto">{repo.stars}</span>
          </div>
          <div
            className="col-6 bg-secondary rounded border p-2 text-center"
            title="Forks"
          >
            <span className="text-light mx-2 my-auto">
              <Image
                src="/open-source/common/fork-white.svg"
                width={15}
                height={15}
                alt="forks"
              />
            </span>
            <span className="h6 font-weight-bold my-auto">{repo.forks}</span>
          </div>
        </div>
        <div className="contri-row row">
          <Link href={repo?.pr_link || ''} target="_blank" className="col-5">
            <div
              className="bg-secondary pr-button rounded border p-2 text-center"
              title="Pull Requests"
            >
              <span className="text-light mx-2 my-auto">
                <Image
                  src="/open-source/common/pr-white.svg"
                  width={15}
                  height={15}
                  alt="pr"
                />
              </span>
              <span className="h6 font-weight-bold">{repo.pr_count}</span>
            </div>
          </Link>
          <Link
            href={repo?.issues_link || ''}
            target="_blank"
            className="col-5"
          >
            <div
              className="bg-secondary issue-button rounded border p-2 text-center"
              title="Issues"
            >
              <span className="text-light mx-2 my-auto">
                <Image
                  src="/open-source/common/issue-white.svg"
                  width={15}
                  height={15}
                  alt="issues"
                />
              </span>
              <span className="h6 font-weight-bold">{repo.issues_count}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
