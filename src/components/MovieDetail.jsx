import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function MovieDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [movie, setMovie] = useState(null);

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

  return (
    <>
      {movie ? (
        <Container className=" text-white">
          <Row>
            <Col className="d-flex justify-content-center">
              <h1>
                {movie.Title} ({movie.Year})
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className=" d-flex justify-content-center">
                <Image src={movie.Poster} rounded />
              </div>
              <Container>
                <Row>
                  <Col>
                    <div>
                      <p>
                        <strong>Genere:</strong> {movie.Genre}
                      </p>
                      <p>
                        <strong>Regia:</strong> {movie.Director}
                      </p>
                      <p>
                        <strong>Attori:</strong> {movie.Actors}
                      </p>
                      <p>
                        <strong>Trama:</strong> {movie.Plot}
                      </p>
                      <p>
                        <strong>Durata:</strong> {movie.Runtime}
                      </p>
                      <p>
                        <strong>Valutazione:</strong> {movie.imdbRating}
                      </p>
                      <p>
                        <strong>Premi:</strong> {movie.Awards}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MovieDetail;
