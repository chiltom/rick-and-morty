import { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ACharacterPage = () => {
  const [character, setCharacter] = useState({});
  // Grab ID from router URL using useParams
  const { id } = useParams();
  // Grab these methods from context passed from App.jsx in Outlet component
  const { favorites, addFavorites, removeFavorites, checkIsFavorite } =
    useOutletContext();
  // Grab navigate function from useNavigate
  const navigate = useNavigate();
  // Check if the character loaded on this page is in favorites or not
  const isFavorite = checkIsFavorite(character.id);

  // Get character data by API get request using id from url (grabbed by useParams)
  // Done on initial render
  useEffect(() => {
    const getCharacter = async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter({
        id: data.id,
        image: data.image,
        name: data.name,
        species: data.species,
        status: data.status,
        origin: data.origin.name,
        location: data.location.name,
        created: data.created,
      });
    };
    getCharacter();
  }, []);

  // Handlers to pass into onClick attributes in buttons
  const handleAddToFavorites = () => {
    addFavorites(character);
  };

  const handleRemoveFromFavorites = () => {
    removeFavorites(character);
  };

  // Take users back to all characters page using button
  const goToChars = () => {
    navigate("/characters");
  };

  /*
    If character is favorite, render remove favorite button with handler
    If character is not a favorite but favorites.length < 4, render add favorite
    button with handler
    If character is not a favorite but favorites.length >= 4, render add
    favorite button but disable it until favorites.length < 4
  */
  const renderButton = () => {
    if (isFavorite) {
      return (
        <Button
          variant="primary"
          size="sm"
          className="bg-blue-500 mt-3 unfavorite"
          onClick={(e) => {
            e.preventDefault();
            handleRemoveFromFavorites();
          }}
        >
          Remove Favorite
        </Button>
      );
    } else if (favorites.length < 4) {
      return (
        <Button
          variant="primary"
          size="sm"
          className="bg-blue-500 favorite"
          onClick={(e) => {
            e.preventDefault();
            handleAddToFavorites();
          }}
        >
          Add Favorite
        </Button>
      );
    } else {
      return (
        <Button
          variant="primary"
          size="sm"
          className="bg-blue-500 favorite"
          onClick={(e) => {
            e.preventDefault();
            handleAddToFavorites();
          }}
          disabled
        >
          Add Favorite
        </Button>
      );
    }
  };

  return (
    <>
      {/* Use Container to place card in a central location on the page */}
      <Container>
        <Row>
          <Col className="flex justify-center mt-24">
            {/* Make new card with more specific details about the character */}
            <Card
              key={character.id}
              style={{ width: "264px", height: "510px" }}
              className="flex flex-col justify-around items-center border-2 border-black rounded-lg"
            >
              <Card.Img
                variant="top"
                src={character.image}
                alt={`Picture of ${character.name}`}
                style={{ width: "260px", height: "220px" }}
              />
              <Card.Body className="flex flex-col justify-evenly">
                <Card.Title className="text-center capitalize">{`${character.name}`}</Card.Title>
                <Card.Text>
                  {`ID: ${character.id}`}
                  <br />
                  {`Species: ${character.species}`}
                  <br />
                  {`Status: ${character.status}`}
                  <br />
                  {`Location: ${character.location}`}
                  <br />
                  {`Origin: ${character.origin}`}
                  <br />
                  {`Created: ${character.created}`}
                  <br />
                </Card.Text>
                {renderButton()}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Button to take user back to all characters page */}
        <div className="flex flex-row justify-center mt-6">
          <Button
            size="sm"
            variant="secondary"
            className="bg-slate-500"
            onClick={() => goToChars()}
          >
            Return to Characters
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ACharacterPage;
