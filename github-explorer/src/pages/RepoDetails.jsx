import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

function RepoDetails() {
  const {
    username,
    repoName,
  } = useParams();

  const [repo, setRepo] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {

    const fetchRepo = async () => {

      try {
        setLoading(true);
        setError("");

        const response =
          await fetch(
            `https://api.github.com/repos/${username}/${repoName}`
          );

        if (!response.ok) {
          throw new Error(
            "Repository not found"
          );
        }

        const data =
          await response.json();

        setRepo(data);

      } catch (err) {
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };

    fetchRepo();

  }, [username, repoName, retryKey]);

  if (loading) {
    return (
      <main className="repo-details"><div className="skeleton-title" /><div className="skeleton-copy" /><div className="skeleton-grid"><i /><i /><i /><i /></div></main>
    );
  }

  if (error) {
    return (
      <div className="status error">
        {error}
        <div className="error-actions"><button onClick={() => setRetryKey((key) => key + 1)}>Try again</button><a href={`/user/${username}`}>Back to profile</a></div>
      </div>
    );
  }

  return (
    <main className="repo-details">

      <div className="repo-owner"><img src={repo.owner.avatar_url} alt="" /><span>Owned by <a href={`/user/${username}`}>{repo.owner.login}</a></span></div>

      <h1>{repo.name}</h1>

      <p>
        {repo.description ||
          "No description available."}
      </p>

      <div className="details-grid">

        <div>
          <strong>
            Language
          </strong>

          <span>
            {repo.language ||
              "Unknown"}
          </span>
        </div>

        <div>
          <strong>
            Stars
          </strong>

          <span>
            {repo.stargazers_count}
          </span>
        </div>

        <div>
          <strong>
            Forks
          </strong>

          <span>
            {repo.forks_count}
          </span>
        </div>

        <div>
          <strong>
            Issues
          </strong>

          <span>
            {repo.open_issues_count}
          </span>
        </div>

        <div>
          <strong>
            Watchers
          </strong>

          <span>
            {repo.watchers_count}
          </span>
        </div>

        <div>
          <strong>
            Default Branch
          </strong>

          <span>
            {repo.default_branch}
          </span>
        </div>


      </div>

      <a
        className="github-button"
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Open on GitHub ↗️
      </a>

    </main>
  );
}

export default RepoDetails;
