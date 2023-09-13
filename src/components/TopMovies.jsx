import { useState, useCallback } from "react";
import Card from "./Card";
import "./topmovies.css";
import ImdbCard from "./../../public/imdb-card.svg";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TopMovies = ({ moviesArray, isLoading }) => {
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
        {moviesArray.map((movie) => {
          return (
            <Card data-testid="movie-card" key={movie.id}>
              <FontAwesomeIcon
                icon={regularHeart}
                className="favorite"
              />
              <Link to={`/movies/${movie.id}`}>
                <img
                  data-testid="movie-poster"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  className="poster"
                />
                <div className="card-content">
                  {/* {index+1} */}
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

export default TopMovies;
