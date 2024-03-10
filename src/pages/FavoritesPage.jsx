import { useOutletContext } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FavoritesPage = () => {
  // Grab array of favorites from context passed down by App.jsx in Outlet
  const { favorites } = useOutletContext();

  return (
    <>
      {/* Container styling used to ensure that all character cards line up on page
          evenly spaced and correctly */}
      <Container className="flex flex-col items-evenly">
        <h1 className="text-center text-3xl font-bold">Favorites</h1>
        <h2 className="text-center mb-6 italic">You can only have 4!</h2>
        <Row
          className="grid grid-cols-2 gap-x-5 gap-y-5"
          id="favorites-container"
        >
          {/* Map over each character in favorites and create a card for them */}
          {favorites.map((char) => (
            // Here we pass in a key for context use later on and the character for building
            <Col key={char.id} className="flex flex-row justify-center">
              <CharacterCard char={char} key={char.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FavoritesPage;
