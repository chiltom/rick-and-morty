import PropTypes from "prop-types";
import axios from "axios";
import Button from "react-bootstrap/Button";

const PageButtons = ({ nextPage, prevPage, setCharacters }) => {
  // Get next page of characters from url provided by API and set characters with that data
  // new URLs are also included with this information and is updated into page states in CharactersPage.jsx
  const handleNext = async () => {
    const { data } = await axios.get(nextPage);
    setCharacters(data);
  };

  // Get prev page of characters from url provided by API and set characters with that data
  // new URLs are also included with this information and is updated into page states in CharactersPage.jsx
  const handlePrev = async () => {
    const { data } = await axios.get(prevPage);
    setCharacters(data);
  };

  return (
    <>
      {/* Conditional rendering used to only render buttons if pages exist */}
      <div className="flex flex-row justify-evenly">
        {prevPage ? (
          <Button
            size="sm"
            variant="secondary"
            className="w-60 bg-slate-500"
            onClick={(e) => {
              e.preventDefault();
              handlePrev();
            }}
          >
            Previous Page
          </Button>
        ) : null}
        {nextPage ? (
          <Button
            size="sm"
            variant="secondary"
            className="w-60 bg-slate-500"
            onClick={(e) => {
              e.preventDefault();
              handleNext();
            }}
          >
            Next Page
          </Button>
        ) : null}
      </div>
    </>
  );
};

// Props validation

PageButtons.propTypes = {
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  setCharacters: PropTypes.func,
};

export default PageButtons;
