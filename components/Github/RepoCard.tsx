// components/GitHubCard.js
'use client';
import React from 'react';
import Image from 'next/image';
import { RepoCardProps } from '@/utils/lib/types/repoCard';
import Link from 'next/link';

const RepoCard = ({ repo }: { repo: RepoCardProps }) => {
  const repoDummy = 1;
  return (
    <div className='card border border-secondary rounded p-3 m-3 shadow-sm'>
      <div className="d-flex align-items-center mb-3">
        <Image
          src={repo.avatar_url}
          width={50}
          height={50}
          alt="rounded-circle me-3"
          className="rounded-circle me-3"
        />
        <div>
          <Link href={repo?.link || ''}target='_blank'>
            <h2 className="h5 mb-0">{repo?.repo_name || ''}</h2>
            <p className="text-muted mb-0">{repo?.owner || ''}</p>
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-around w-100">
          <div className="text-center">
            <span className="text-muted"><Image src="/open-source/common/pr.svg" width={20} height={20} alt="pr" /></span>
            <span className="h5 font-weight-bold">{repoDummy}</span>
          </div>
          <div className="text-center">
            <span className="text-muted"><Image src="/open-source/common/fork.png" width={20} height={20} alt="forks" /></span>
            <span className="h5 font-weight-bold">{repoDummy}</span>
          </div>
          <div className="text-center">
            <span className="text-muted"><Image src="/open-source/common/stars.svg" width={20} height={20} alt="stars" /></span>
            <span className="h5 font-weight-bold">{repoDummy}</span>
          </div>
          <div className="text-center">
            <span className="text-muted"><Image src="/open-source/common/issues.svg" width={20} height={20} alt="issues" /></span>
            <span className="h5 font-weight-bold">{repoDummy}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
