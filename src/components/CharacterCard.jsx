import { useOutletContext, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const CharacterCard = ({ char, key }) => {
  // Grab all elements from context passed through Outlet by App.jsx
  const { favorites, addFavorites, removeFavorites, checkIsFavorite } =
    useOutletContext();
  // Grab navigate function from react-router-dom
  const navigate = useNavigate();

  // Check if current character that is being built is a favorite or not
  const isFavorite = checkIsFavorite(char.id);

  // Event handlers for adding/removing favorites
  const handleAddToFavorites = () => {
    addFavorites(char);
  };

  const handleRemoveFromFavorites = () => {
    removeFavorites(char);
  };

  // Event handler to navigate to character page passing in ID as the url param
  const goToCharacter = () => {
    navigate(`/character/${char.id}`);
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
          className="bg-blue-500 unfavorite"
          onClick={(e) => {
            e.preventDefault();
            handleRemoveFromFavorites();
          }}
        >
          Remove Favorite
        </Button>
      );
    } else {
      if (favorites.length < 4) {
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
    }
  };

  return (
    <>
      <Card
        key={key}
        id={char.id}
        style={{ width: "264px", height: "410px" }}
        className="flex flex-col justify-around items-center border-black border-2 rounded-lg"
      >
        <Card.Img
          variant="top"
          src={char.image}
          alt={`Picture of ${char.name}`}
          style={{ width: "260px", height: "220px" }}
        />
        <Card.Body className="flex flex-col justify-evenly">
          <Card.Title className="text-center capitalize">{`${char.name}`}</Card.Title>
          <Card.Text className="mb-3">
            {`Species: ${char.species}`}
            <br />
            {`Status: ${char.status}`}
          </Card.Text>
          <ButtonGroup>
            <Button
              variant="primary"
              size="sm"
              className="bg-blue-500 see-details"
              onClick={(e) => {
                e.preventDefault();
                goToCharacter();
              }}
            >
              See Details
            </Button>
            {renderButton()}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </>
  );
};

// Props validation
CharacterCard.propTypes = {
  char: PropTypes.object,
  key: PropTypes.number,
};

export default CharacterCard;
