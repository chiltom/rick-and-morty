import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import PropTypes from "prop-types";
import axios from "axios";

const CharacterForm = ({ setCharacters }) => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  // Grab navigate function from react-router-dom
  const navigate = useNavigate();

  // Method to navigate back to all characters page
  const backToAll = () => {
    navigate("/characters");
  };

  // Submit get request to API and grab all characters to display on page at first
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(data);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  /* 
    If user supplies a name in the input field and submits, submit get request
    to API for all character data under the specified name
  */
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${name.toLowerCase()}`
        );
        setCharacters(data);
      } catch (error) {
        alert(error);
      }
    };
    if (name.length > 0) {
      getData();
    }
  }, [name]);

  // Event handler for submission, if there is input setName to input and useEffect will follow
  // If input is empty, it will register as falsy and navigate the user back to the all characters page
  const handleSubmit = (e) => {
    if (input) {
      e.preventDefault();
      setName(input);
      setInput("");
    } else {
      e.preventDefault();
      backToAll();
    }
  };

  return (
    <>
      <Form>
        <InputGroup className="flex justify-center">
          <InputGroup.Text className="bg-slate-500 text-white">
            Search Character Name:
          </InputGroup.Text>
          <Form.Control
            type="text"
            size="sm"
            placeholder="Type ' ' to return to all characters:"
            id="inputQuery"
            className="max-w-80"
            value={input}
            onChange={(e) => {
              e.preventDefault();
              setInput(e.target.value);
            }}
          />
          <Form.Control
            type="submit"
            size="sm"
            id="submitButton"
            onClick={handleSubmit}
            className="max-w-20 bg-slate-500 text-white"
          />
        </InputGroup>
      </Form>
    </>
  );
};

// Props validation
CharacterForm.propTypes = {
  setCharacters: PropTypes.func,
};

export default CharacterForm;
