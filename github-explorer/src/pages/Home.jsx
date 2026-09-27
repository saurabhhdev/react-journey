import SearchBar from "../components/SearchBar";
import SearchHistory from "../components/SearchHistory";
import NexhubLogo from "../components/NexhubLogo";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main className="home">

      <div className="hero">
        <div className="hero-brand" aria-hidden="true"><NexhubLogo size="lg" animated glow /></div>

        <h1>
          Explore GitHub without the noise.
        </h1>

        <p>
          Search developers and repositories through a clearer, calmer GitHub experience.
        </p>

        <SearchBar />

        <div className="popular-searches" aria-label="Popular developer searches">
          <span>Popular</span>
          {["octocat", "torvalds", "gaearon"].map((name) => (
            <button key={name} onClick={() => navigate(`/user/${name}`)}>{name}</button>
          ))}
        </div>

        <SearchHistory />

      </div>

    </main>
  );
}

export default Home;
