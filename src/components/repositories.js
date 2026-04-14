"use client"

import { Fragment, useEffect, useState } from "react";
import { GoStar, GoRepoForked, GoLinkExternal } from 'react-icons/go'
import siteConfig from '../../data/siteConfig'

import Loader from './loader'

const endpoint =
  `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`


function Repositories() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(endpoint);
      const repos = await response.json();
      if (repos && repos.length) {
        setRepos(repos);
        setStatus('ready');
      }
    }
    fetchRepos();
  }, []);

  return (
    <div className="repositories relative">
      <h2>Latest repositories on Github</h2>
      {status === "loading" && <div className='flex'><Loader /></div>}
      {status === "ready" &&
        repos && (
          <Fragment>
            <div className="mb-10">
              {repos.map(repo => (
                <Fragment key={repo.name}>
                  <div className="repositories__repo">
                    <a
                      className='repositories__repo-link'
                      href={repo.html_url}
                      target="_blank"
                    >
                      <strong>{repo.name}</strong>
                    </a>
                    <div>{repo.description}</div>
                    <div className="repositories__repo-date">
                      Updated: {new Date(repo.updated_at).toUTCString()}
                    </div>
                    <div className="repositories__repo-star">
                      {repo.fork && <GoRepoForked />}
                      <GoStar /> {repo.stargazers_count}
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))}
            </div>
            <div className="repositories__user-link">
              <a
                href={`https://github.com/${siteConfig.githubUsername}`}
                target="_blank"
              >
                See all my repositories
                <GoLinkExternal style={{ marginLeft: 8 }} />
              </a>
            </div>
          </Fragment>
        )}
    </div>
  )
}

export default Repositories
