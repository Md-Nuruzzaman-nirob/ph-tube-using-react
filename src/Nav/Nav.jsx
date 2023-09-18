/* eslint-disable react/prop-types */
import { useState } from "react";
import myImage from "../assets/Logo.png";
import { CgMenuRightAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

const Nav = ({ handleClickSortData }) => {
  const [menus, setMenus] = useState(false);
  const [sortView, setSortView] = useState(false);

  const handleClick = () => {
    setSortView(!sortView);
    handleClickSortData();
  };

  return (
    <nav className="flex justify-between items-center py-3 md:py-6 border-b-2">
      <img className="w-24 md:w-32 lg:w-auto" src={myImage} alt="" />
      <button
        onClick={handleClick}
        className={`hidden md:block btn btn-sm lg:btn-md btn-neutral text-white border-none
        ${sortView && "bg-[#FF1F3D] hover:bg-[#FF1F3D] text-xs"}`}
      >
        {sortView ? "Sort by default" : "Sort by view"}
      </button>
      <button className="hidden md:block btn btn-sm lg:btn-md bg-[#FF1F3D] hover:bg-[#FF1F3D] text-white">
        <a target="_blank" href="../../blog.html">
          Blog
        </a>
      </button>
      <div className="block md:hidden relative">
        <div onClick={() => setMenus(!menus)}>
          {menus ? <GrClose></GrClose> : <CgMenuRightAlt></CgMenuRightAlt>}
        </div>
        <div
          className={`absolute right-0 top-8 w-40 flex flex-col items-end gap-2
          ${!menus && "hidden"}`}
        >
          <button
            onClick={handleClick}
            className={`btn btn-xs md:btn-sm lg:btn-md btn-neutral text-white border-none
          ${sortView && "bg-[#FF1F3D]"}
          `}
          >
            {!sortView ? "by view" : "by default"}
          </button>
          <button className="btn btn-xs md:btn-sm lg:btn-md bg-[#FF1F3D] hover:bg-[#FF1F3D] text-white border-none">
            <a href="../../blog.html">Blog</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
