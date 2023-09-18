/* eslint-disable react/prop-types */
import myImage from "../assets/fi_10629607.svg";
const Card = ({ singleCard }) => {
  const { thumbnail, title, others, authors } = singleCard;

  return (
    <div className="card  bg-base-100">
      <img className="w-full h-[200px] rounded-xl" src={thumbnail} alt="" />
      <div className="flex items-start gap-4 mt-5 relative">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src={authors[0].profile_picture}
          alt=""
        />
        <div className="w-64">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex gap-2 items-center mt-3">
            <p className="font-medium">{authors[0].profile_name}</p>
            {authors[0].verified && <img src={myImage} alt="" />}
          </div>
          <p>{others.views}</p>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Card;
