/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import Category from "./Category/Category";
import Nav from "./Nav/Nav";
import axios from "axios";

function App() {
  const [idData, setIdData] = useState([]);
  const [sortByData, setSortByData] = useState(false);
  const [withoutSortingData, setWithoutSortingData] = useState([]);
  const [sortingData, setSortingData] = useState([]);

  // id function
  const handleClickedId = (id) => {
    setIdData(id.category_id);
  };

  // use effect
  useEffect(() => {
    if (idData.length !== 0) {
      axios(
        `https://openapi.programming-hero.com/api/videos/category/${idData}`
      ).then((data) => setWithoutSortingData(data.data.data));
    } else {
      axios(
        `https://openapi.programming-hero.com/api/videos/category/${1000}`
      ).then((data) => setWithoutSortingData(data.data.data));
    }
  }, [idData]);

  // sort function
  const handleClickSortData = () => {
    // >---normal---<
    // setSortByData(!sortByData);

    // >---semi-advance---<
    // setSortByData(() => !sortByData);

    // >---advance---<
    setSortByData((prevSortByData) => !prevSortByData);
  };

  useEffect(() => {
    if (sortByData) {
      const sort = [...withoutSortingData].sort(
        (a, b) =>
          parseFloat(b.others.views.slice(0, -1)) -
          parseFloat(a.others.views.slice(0, -1))
      );
      setSortingData(sort);
    } else {
      setSortingData(withoutSortingData);
    }
  }, [withoutSortingData, sortByData]); // >---advance---< [withoutSortingData, sortByData]

  return (
    <>
      <header className="mx-8 md:mx-16 2xl:mx-20">
        <Nav handleClickSortData={handleClickSortData}></Nav>
      </header>
      <main className="mx-8 md:mx-16 2xl:mx-20">
        <Category handleClickedId={handleClickedId}></Category>
        <Cards sortingData={sortingData} idData={idData}></Cards>
      </main>
    </>
  );
}

export default App;
