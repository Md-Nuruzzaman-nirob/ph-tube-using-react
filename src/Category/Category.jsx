import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Category = ({ handleClickedId }) => {
  const [allData, setAllData] = useState([]);
  const [buttonBackground, setButtonBackground] = useState(null);

  useEffect(() => {
    axios("https://openapi.programming-hero.com/api/videos/categories").then(
      (data) => {
        setAllData(data.data.data);
        if (data.data.data.length > 0) {
          setButtonBackground(data.data.data[0].category_id);
        }
      }
    );
  }, []);

  const handleCategory = (data) => {
    setButtonBackground(data.category_id);
    handleClickedId(data);
  };

  return (
    <section className="text-black my-4">
      <ul className="flex justify-around md:justify-center md:gap-5 lg:gap-7 items-center">
        {allData.map((data) => {
          const isActive = data.category_id === buttonBackground;
          return (
            <li
              onClick={() => handleCategory(data)}
              className={`bg-[#25252526] px-3 xl:px-4 md:py-1 rounded-md ${
                isActive ? "bg-[#FF1F3D] text-white" : "bg-[#25252526]"
              }`}
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
