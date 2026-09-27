import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import User from "./pages/UserProfile";
import Compare from "./pages/Compare";
import Favourites from "./pages/Favourites";
import RepoDetails from "./pages/RepoDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/user/:username"
          element={<User />}
        />

        <Route
          path="/user/:username/repo/:repoName"
          element={<RepoDetails />}
        />

        <Route
          path="/compare"
          element={<Compare />}
        />

        <Route
          path="/favourites"
          element={<Favourites />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
