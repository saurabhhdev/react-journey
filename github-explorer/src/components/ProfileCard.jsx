import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addFavourite,
  removeFavourite,
} from "../store/favouritesSlice";

function ProfileCard({ user }) {
  const dispatch = useDispatch();

  const favourites = useSelector(
    (state) => state.favourites
  );

  const isFavourite =
    favourites.some(
      (fav) =>
        fav.login === user.login
    );

  const handleFavourite = () => {
    if (isFavourite) {
      dispatch(
        removeFavourite(user.login)
      );
    } else {
      dispatch(
        addFavourite(user)
      );
    }
  };


  return (
    <section className="profile-card">

      <img
        src={user.avatar_url}
        alt={user.login}
        className="avatar"
      />

      <div className="profile-info">

        <h1>
          {user.name || user.login}
        </h1>

        <h3>
          @{user.login}
        </h3>

        {user.bio && (
          <p>{user.bio}</p>
        )}

        <div className="profile-meta">
          {user.location && <span>⌖ {user.location}</span>}
          {user.company && <span>▧ {user.company}</span>}
          {user.blog && <a href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`} target="_blank" rel="noreferrer">↗ {user.blog}</a>}
        </div>

        <div className="stats">

          <div>
            <strong>
              {user.followers}
            </strong>

            <span>
              Followers
            </span>
          </div>

          <div>
            <strong>
              {user.following}
            </strong>

            <span>
              Following
            </span>
          </div>

          <div>
            <strong>
              {user.public_repos}
            </strong>

            <span>
              Repositories
            </span>
          </div>

        </div>

        <div className="profile-actions">

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>

          <button
            onClick={handleFavourite}
            aria-pressed={isFavourite}
          >
            {isFavourite
              ? "Remove favourite"
              : "Add to favourites"}
          </button>


        </div>

      </div>

    </section>
  );
}

export default ProfileCard;
