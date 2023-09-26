import { useState } from "react";

const Banner = () => {


  const [searchTerm,  setSearchTerm] = useState("");

  
  const handleSearchBtn = () =>{
   console.log(searchTerm);

 }



  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 my-10 p-40">
        <div className="text-center text-neutral-900 text-5xl font-bold">
          I Grow By Helping People In Need
        </div>
        <div className="join">
          <div>
            <input
              className="input input-bordered join-item w-96"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button className="join-item bg-red-500 text-white px-9" onClick={handleSearchBtn}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
