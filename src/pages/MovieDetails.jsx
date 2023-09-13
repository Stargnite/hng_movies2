import Logo from "./../../public/detailsLogo.svg";
import { Link, useParams } from "react-router-dom";
import "./moviedetails.css";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { isLoading, setIsLoading } = useState(true);
  let { movieId } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=de2eef36ce0365cce58f28cf4d4a33e2`
      )
      .then((res) => {
        setMovieData(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        // alert(`Error fetching data: ${error.message}`);
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading || !movieData) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="sideNav">
        <Link to="/" className="detailsLogo">
          <img src={Logo} alt="logo" />
        </Link>
        <div>
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Tv Series</li>
            <li>Upcoming</li>
          </ul>
        </div>
        <div className="logout">
          <h3>Log out</h3>
        </div>
      </div>

      <div className="mainDetails">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
            className="movieVid"
          />
        </div>
        <div className="movieheading">
          <span className="title" data-testid="movie-title">
            {movieData.title}
          </span>
          <span className="point"></span>
          <span className="release-date" data-testid="movie-release-date">
            {movieData.release_date}
          </span>
          <span className="point"></span>
          <span>PG-13</span>
          <span className="point"></span>
          <div className="runtime" data-testid="movie-runtime">
            {movieData.runtime}
          </div>
          <div className="genre">
            <span>Action</span>
            <span>Drama</span>
          </div>
        </div>
        <div className="movieOverview" data-testid="movie-overview">
          <p data-testid="movie-overview">{movieData.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
