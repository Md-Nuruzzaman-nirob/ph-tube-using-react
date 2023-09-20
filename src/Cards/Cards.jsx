import PropTypes from "prop-types";
import Card from "../Card/card";

const Cards = ({ sortingData }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
      {sortingData.map((singleCard, index) => (
        <Card key={index} singleCard={singleCard}></Card>
      ))}
    </section>
  );
};

Cards.propTypes = {
  idData: PropTypes.string.isRequired, // Change to string if it's a string
};

Cards.propTypes = {
  idData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sortingData: PropTypes.array.isRequired,
};

export default Cards;
