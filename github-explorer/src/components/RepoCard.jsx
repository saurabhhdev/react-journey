import { Link } from "react-router-dom";

function RepoCard({ repo, username }) {
  return (
    <article className="repo-card">
      <div className="repo-card-heading"><h3>{repo.name}</h3><a href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} on GitHub`}>↗</a></div>
      <p>{repo.description || "No description available."}</p>
      <div className="repo-stats">
        <span className="repo-language"><i />{repo.language || "Unknown"}</span>
        <span>Stars {repo.stargazers_count}</span>
        <span>Forks {repo.forks_count}</span>
        <span>Updated {new Date(repo.updated_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</span>
      </div>
      <div className="repo-actions">
        <Link to={`/user/${username}/repo/${repo.name}`}>View details</Link>
        <a href={repo.html_url} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </article>
  );
}

export default RepoCard;
