import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    fetchMovie(params.id);
  }, [params]);

  async function fetchMovie(imdbID) {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=aa5aec3c&i=" + imdbID);

      if (response.ok) {
        const movieFetched = await response.json();
        console.log(movieFetched);
        setMovie(movieFetched);
      } else {
        setHasError(`Error during the request`);
        throw new Error(`Errore : ${response.statusText}`);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return <div>MovieDetail</div>;
}

export default MovieDetail;
