import { Card, Container, ListGroup, Button } from "react-bootstrap";
import { useAppSelector } from "../store/hooks";

const MovieDetail: React.FunctionComponent = () => {
  const { selectedMovie } = useAppSelector((state) => state.movieReducer);
  const movieJSX = selectedMovie.map((item) => (
    <Card
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: "15px",
        padding: "15px",
        background: "",
      }}
      key={item.imdbID}
    >
      <Card.Img variant="top" style={{ width: "30%" }} src={item.Poster} />
      <Card.Title> {item.Title} </Card.Title>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Release Year: {item.Year} </ListGroup.Item>
        <ListGroup.Item>Type: {item.Type} </ListGroup.Item>
        <ListGroup.Item>imdb ID: {item.imdbID} </ListGroup.Item>
      </ListGroup>
    </Card>
  ));

  return <Container>{movieJSX}</Container>;
};

export default MovieDetail;
