import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./components/AllMovies";
import MovieDetails from "./pages/MovieDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
  );
}

export default App;
