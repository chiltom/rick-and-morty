import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterForm from "../components/CharacterForm";
import CharacterCard from "../components/CharacterCard";
import PageButtons from "../components/PageButtons";

const CharactersPage = () => {
  /* 
    Here we create state to hold specified characters and prev/next pages 
    from data returned by API call in CharacterForm.jsx; prev/next pages will
    be used if user presses respective buttons on characters page
  */
  const [characters, setCharacters] = useState({});
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  /* 
    useEffect to set next and previous pages on change of characters based 
    on return data of API call in CharacterForm.jsx 
  */
  useEffect(() => {
    if (characters.info) {
      if (characters.info.next) {
        setNextPage(characters.info.next);
      } else {
        setNextPage("");
      }
      if (characters.info.prev) {
        setPrevPage(characters.info.prev);
      } else {
        setPrevPage("");
      }
    }
  }, [characters]);

  return (
    <>
      {/* Container structure used to ensure even spacing and responsiveness 
          of elements on page */}
      <Container className="flex flex-col gap-2 m-2 " fluid>
        <Row>
          {/* Render character form input on top of page to search for specific
              characters */}
          <CharacterForm setCharacters={setCharacters} />
        </Row>
        <Row
          xl={5}
          lg={4}
          id="characters-container"
          className="flex flex-row gap-2 justify-center items-center"
        >
          {/* Map over all character results passed from API call in CharacterForm.jsx
              and pass in the id for keys and character object for building */}
          {characters.results
            ? characters.results.map((char) => (
                <Col key={char.id}>
                  <CharacterCard char={char} key={char.id} />
                </Col>
              ))
            : null}
        </Row>
        {/* Render page buttons at bottom of container for page navigation of character
            info, pass in setCharacters method to set new characters based on API update
            inside of component */}
        <PageButtons
          nextPage={nextPage}
          prevPage={prevPage}
          setCharacters={setCharacters}
        />
      </Container>
    </>
  );
};

export default CharactersPage;
