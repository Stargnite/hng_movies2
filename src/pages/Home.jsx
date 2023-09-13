import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Imdb from "./../../public/imdb.svg";
import "./home.css";
import TopMovies from "../components/TopMovies";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    let moviesArray = [];
    let firstTenMovies = [];

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTJlZWYzNmNlMDM2NWNjZTU4ZjI4Y2Y0ZDRhMzNlMiIsInN1YiI6IjY0ZmUzNDJjZmZjOWRlMGVlMTc1YzQxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-NAILCEd93XgJmBGQWrn-F6jPk5GyGt_zMjcg5wTS5E",
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      alert("Error fetching data");
      console.log(Error);
      throw new Error("Something went wrong");
    }

    moviesArray.push(...data.results);
    firstTenMovies = moviesArray.slice(0, 10);
    setMovies(firstTenMovies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="centered">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="homedisplay">
        <Navbar />
        <div className="displaymovie">
          <h1>
            John Wick 3: <br /> Parabellum
          </h1>
          <div className="movieRating">
            <img src={Imdb} />
          </div>
          <div className="movieDesc">
            <p>
              John Wick is on the run after killing a member of the
              international assassins guild, and with a $14 million price tag on
              his head, he is the target of hit men and women everywhere.
            </p>
          </div>
          <button className="trailer-btn"> Watch trailer</button>
        </div>
      </div>

      <div className="movies-header">
        <h3>Top Movies</h3>
        <Link to="/movies">
          <p>See more movies </p>
        </Link>
      </div>
      {isLoading ? (
        <div className="centered">
          <LoadingSpinner />
        </div>
      ) : (
        <TopMovies moviesArray={movies} isLoading={isLoading} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
