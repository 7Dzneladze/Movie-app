import { Container } from "react-bootstrap";

const EmptyPage: React.FunctionComponent = () => {
  return (
    <Container>
      <span style={{ fontSize: "50px", fontFamily: "roboto" }}>
        Empty page, type something in search area to see the movie list
      </span>
    </Container>
  );
};

export default EmptyPage;
