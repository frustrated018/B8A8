import { useState } from "react";
import PropTypes from "prop-types";
const Banner = ({ filterCampaigns }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchBtn = () => {
    filterCampaigns(searchTerm);
    setSearchTerm("")   
  };

const handleInput = (e) =>{
  setSearchTerm(e.target.value)
}


  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 p-10 md:p-20 lg:p-40">
        <div className="text-center text-neutral-900 text-5xl font-bold">
          I Grow By Helping People In Need
        </div>
        <div className="join">
          <div>
            <input
              className="input input-bordered join-item lg:w-96"
              placeholder="Search"
              onChange={handleInput}
              value={searchTerm}
            />
          </div>

          <button
            className="join-item bg-red-500 text-white px-4 lg:px-9"
            onClick={handleSearchBtn}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
Banner.propTypes = {
  filterCampaigns: PropTypes.func,
};
export default Banner;
