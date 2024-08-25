import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "../styles/Guest.css";
import "../context/SearchBarProvider";

import { SearchContext } from "../context/SearchBarProvider";

function Guest() {
  const [movies, setMovies] = useState([]);

  const { searchInput } = useContext(SearchContext);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title &&
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Movies`);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Filmler</h1>
        <div className="menuList">
          {filteredMovies.map((movieItem, index) => (
            <Movie key={index} _movieItem={movieItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guest;
