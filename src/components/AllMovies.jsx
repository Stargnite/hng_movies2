import { Link } from "react-router-dom";
import Card from "./Card";
import "./topmovies.css";
import ImdbCard from "./../../public/imdb-card.svg";
import LoadingSpinner from "./LoadingSpinner";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTJlZWYzNmNlMDM2NWNjZTU4ZjI4Y2Y0ZDRhMzNlMiIsInN1YiI6IjY0ZmUzNDJjZmZjOWRlMGVlMTc1YzQxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-NAILCEd93XgJmBGQWrn-F6jPk5GyGt_zMjcg5wTS5E",
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=de2eef36ce0365cce58f28cf4d4a33e2",
      options
    );
    const data = await response.json();

    if (!response.ok) {
      alert("Error occured while fetching data");
      setIsLoading(false);
      throw new Error("Something went wrong");
    }
    setMovies(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="topMovies">
        {movies.map((movie) => {
          return (
            <Card data-testid="movie-card">
              <FontAwesomeIcon
                icon={regularHeart}
                className="favorite"
              />
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <img
                  data-testid="movie-poster"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  className="poster"
                />
                <div className="card-content">
                  <h3 className="movieTitle" data-testid="movie-title">
                    {movie.title}
                  </h3>
                  <img src={ImdbCard} />
                  <p className="releaseDate" data-testid="movie-release-date">
                    {movie.release_date}
                  </p>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AllMovies;
