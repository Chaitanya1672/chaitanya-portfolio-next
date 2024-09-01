// components/GitHubCard.js
'use client'
import React from 'react'
import Image from 'next/image'
import { RepoCardProps } from '@/utils/lib/types/repoCard'
import Link from 'next/link'

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
            className="col-6 bg-#343a40 d-flex align-items-center justify-content-center rounded border p-2 text-center"
            title="Stars"
          >
            <div className="d-flex align-items-center justify-content-center mx-2">
              <Image
                src="/open-source/common/star-white.svg"
                width={18}
                height={18}
                alt="stars"
              />
            </div>
            <div
              className="h5 font-weight-bold my-auto"
              style={{ lineHeight: '1', fontSize: '1.2rem' }}
            >
              {repo.stars}
            </div>
          </div>
          <div
            className="col-6 bg-#343a40 d-flex align-items-center justify-content-center rounded border p-2 text-center"
            title="Forks"
          >
            <div className="d-flex align-items-center justify-content-center mx-2">
              <Image
                src="/open-source/common/fork-white.svg"
                width={18}
                height={18}
                alt="forks"
              />
            </div>
            <div
              className="h5 font-weight-bold my-auto"
              style={{ lineHeight: '1', fontSize: '1.2' }}
            >
              {repo.forks}
            </div>
          </div>
        </div>
        <div className="contri-row row">
          <Link href={repo?.pr_link || ''} target="_blank" className="col-5">
            <div
              className="pr-button rounded border p-2 text-center"
              title="Pull Requests"
            >
              <span className="text-light mx-2 my-auto">
                <Image
                  src="/open-source/common/pr-white.svg"
                  width={16}
                  height={16}
                  alt="pr"
                />
              </span>
              <span className="h5 font-weight-bold">{repo.pr_count}</span>
            </div>
          </Link>
          <Link
            href={(repo.issues_count && repo?.issues_link) || ''}
            target={repo.issues_count ? `_blank` : undefined}
            className="col-5"
          >
            {/* eslint-disable max-len */}
            <div
              className={`bg-secondary issue-button rounded border p-2 text-center ${repo.issues_count === 0 ? 'disabled' : ''}`}
              title="Issues"
            >
              <span className="text-light mx-2 my-auto">
                <Image
                  src="/open-source/common/issue-white.svg"
                  width={16}
                  height={16}
                  alt="issues"
                />
              </span>
              <span className="h5 font-weight-bold">{repo.issues_count}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RepoCard
