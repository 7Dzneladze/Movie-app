import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MovieListing from "./components/MovieListing";
import MovieDetail from "./components/MovieDetail";
import Header from "./components/Header";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="*" element={<MovieListing />} />
          <Route path="/details/:imdbID" element={<MovieDetail />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
