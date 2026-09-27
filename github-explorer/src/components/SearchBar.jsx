import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUsername =
      username.trim();

    if (!trimmedUsername) {
      return;
    }

    navigate(
      `/user/${trimmedUsername}`
    );
  };

  return (
    <form
      className="search-box"
      onSubmit={handleSubmit}
    >
      <svg className="search-icon" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="8.5" cy="8.5" r="5.5" />
        <path d="m13 13 4 4" />
      </svg>
      <input
        type="text"
        placeholder="Search a GitHub username..."
        aria-label="GitHub username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <button type="submit">
        Explore
      </button>
    </form>
  );
}

export default SearchBar;
