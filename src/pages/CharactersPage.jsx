import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterForm from "../components/CharacterForm";
import CharacterCard from "../components/CharacterCard";
import PageButtons from "../components/PageButtons";

const CharactersPage = () => {
  const [characters, setCharacters] = useState({});
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

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
      <Container className="flex flex-col gap-2 m-2 " fluid>
        <Row>
          <CharacterForm setCharacters={setCharacters} />
        </Row>
        <Row
          xl={5}
          lg={4}
          id="characters-container"
          className="flex flex-row gap-2 justify-center items-center"
        >
          {characters.results
            ? characters.results.map((char) => (
                <Col key={char.id}>
                  <CharacterCard char={char} key={char.id} />
                </Col>
              ))
            : null}
        </Row>
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
