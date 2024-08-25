import React, { useEffect, useState } from "react";

function Movie({ _movieItem }) {
  const imageUrl = `/assets${_movieItem.image}`;
  const [arrangedDescription, setArrangedDesciption] = useState("");

  useEffect(() => {
    const arrangeDescription = () => {
      if (_movieItem.description.length > 150) {
        setArrangedDesciption(
          () => _movieItem.description.substring(0, 150) + "..."
        );
      } else {
        setArrangedDesciption(_movieItem.description);
      }
    };

    arrangeDescription();
  }, [_movieItem.description]);

  return (
    <div className="menuItem">
      <div className="menuItemDiv">
        <img
          src={imageUrl}
          alt="resim"
          style={{ height: 200, width: "100%", borderRadius: 15 }}
        />
        <h2>{_movieItem.title}</h2>
        <h4>{arrangedDescription}</h4>
        <p>Süre: {_movieItem.time} dk</p>
      </div>
      <div className="movieActions">
        <div>
          <p>Filmi Puanla</p>
        </div>
        <div>
          <p>Filmi İncele</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
