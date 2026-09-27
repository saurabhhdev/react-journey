import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchHistory() {
  const [history, setHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("searchHistory") || "[]"); }
    catch { return []; }
  });

  const navigate = useNavigate();

  const clearHistory = () => {
    localStorage.removeItem(
      "searchHistory"
    );

    setHistory([]);
  };

  const removeSearch = (username) => {
    const next = history.filter((item) => item !== username);
    localStorage.setItem("searchHistory", JSON.stringify(next));
    setHistory(next);
  };

  if (history.length === 0) {
    return null;
  }

  return (
    <div className="search-history">

      <div className="history-header">
        <h3>Recent Searches</h3>

        <button onClick={clearHistory}>
          Clear all
        </button>
      </div>

      <div className="history-list">

        {history.map((username) => (
          <span className="history-chip" key={username}>
            <button className="history-user" onClick={() => navigate(`/user/${username}`)}>{username}</button>
            <button className="history-remove" onClick={() => removeSearch(username)} aria-label={`Remove ${username} from recent searches`}>x</button>
          </span>
        ))}

      </div>

    </div>
  );
}

export default SearchHistory;
