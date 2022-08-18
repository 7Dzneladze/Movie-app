import React, { useEffect, useState } from "react";
import { Spinner, Container, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import fetchMovies from "../store/slices/actionCreators";
import { movieSlice } from "../store/slices/MovieSlice";
import EmptyPage from "./EmptyPage";

const MovieListing: React.FunctionComponent = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { selectMovie, sortMovies, searchMovies } = movieSlice.actions; // actions
  const { movies, loading, error } = useAppSelector(
    (state) => state.movieReducer
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const moviesJSx = movies.map((item) => (
    <Link
      to={`/details/${item.imdbID}`}
      key={item.imdbID}
      onClick={() => dispatch(selectMovie([item]))} // push item to an empty array bc item is an object, so we can map afer
      style={{
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        padding: "10px",
      }}
    >
      <Card
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: "15px",
          padding: "15px",
        }}
      >
        <Card.Img variant="top" style={{ width: "30%" }} src={item.Poster} />
        <Card.Title> {item.Title} </Card.Title>
      </Card>
    </Link>
  ));

  return (
    <Container>
      <>
        <Form style={{ display: "flex" }}>
          <Form.Control
            placeholder="Search value"
            style={{ margin: "10px 0" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            style={{ borderRadius: "50%", height: "60px", width: "80px" }}
            onClick={() => {
              dispatch(searchMovies(search));
            }}
          >
            Search button
          </Button>
        </Form>
        <Button
          type="button"
          onClick={() => {
            dispatch(sortMovies());
          }}
        >
          Sort Alphabetically
        </Button>
        {loading && <Spinner animation="border" />}
        {error && <h1> {error}</h1>}
        {search === "" ? <EmptyPage /> : moviesJSx}
      </>
    </Container>
  );
};

export default MovieListing;
