import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./components/AllMovies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
    </Routes>
  </div>
  );
}

export default App;
