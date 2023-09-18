import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Category = ({ handleClickedId }) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios("https://openapi.programming-hero.com/api/videos/categories").then(
      (data) => setAllData(data.data.data)
    );
  }, []);

  return (
    <section className="text-black my-4">
      <ul className="flex justify-around md:justify-center md:gap-5 lg:gap-7 items-center">
        {allData.map((data) => {
          return (
            <li
              onClick={() => handleClickedId(data)}
              className="bg-[#25252526] px-3 xl:px-4 md:py-1 rounded-md"
              key={data.category_id}
            >
              {data.category}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Category.propTypes = {
  handleClickedId: PropTypes.func.isRequired,
};
export default Category;
