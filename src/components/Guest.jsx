import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "../styles/Guest.css";

function Guest() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Movies`);
        setMovies(response.data); // Adjust according to your actual data structure
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Filmler</h1>
        <div className="menuList">
          {movies.map((movieItem, index) => (
            <Movie key={index} _movieItem={movieItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guest;
