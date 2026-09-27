import {
  useDispatch,
  useSelector,
} from "react-redux";

import { Link } from "react-router-dom";

import {
  removeFavourite,
} from "../store/favouritesSlice";

function Favourites() {

  const favourites =
    useSelector(
      (state) =>
        state.favourites
    );

  const dispatch = useDispatch();

  if (favourites.length === 0) {
    return (
      <main className="empty-page">

        <h1>Your radar is empty.</h1>

        <p>
          Search for a GitHub user
          and add them to your
          favourites.
        </p>
        <Link className="empty-cta" to="/">Explore Developers</Link>

      </main>
    );
  }

  return (
    <main className="favourites-page">

      <h1>Your Developer Radar</h1>
      <p className="page-subtitle">Profiles you’ve saved for later.</p>

      <div className="favourites-grid">

        {favourites.map(
          (user) => (

            <div
              className="favourite-card"
              key={user.login}
            >

              <img
                src={user.avatar_url}
                alt={user.login}
              />

              <h2>
                {user.login}
              </h2>

              <p>
                {user.name ||
                  "GitHub Developer"}
              </p>
              {user.bio && <p className="favourite-bio">{user.bio}</p>}
              <div className="favourite-stats"><span>{user.followers?.toLocaleString() || 0} followers</span><span>{user.public_repos || 0} repositories</span></div>

              <div className="favourite-actions">

                <Link
                  to={`/user/${user.login}`}
                >
                  View Profile
                </Link>

                <button
                  onClick={() =>
                    dispatch(removeFavourite(user.login))
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          )
        )}

      </div>

    </main>
  );
}

export default Favourites;
