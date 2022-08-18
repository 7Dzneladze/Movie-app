import { useRoutes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MovieListing from "./components/MovieListing";
import MovieDetail from "./components/MovieDetail";
import Header from "./components/Header";
import Team from "./components/Team";

function App() {
  const element = useRoutes([
    { path: "/", element: <MovieListing /> },
    { path: "/details/:imdbID", element: <MovieDetail /> },
    { path: "/team", element: <Team /> },
  ]);
  return (
    <Container>
      <Header />
      {element}
    </Container>
  );
}

export default App;
