const Banner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 my-10 p-40">
        <div className="text-center text-neutral-900 text-5xl font-bold">
          I Grow By Helping People In Need
        </div>
        <div className="join">
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>

          <button className="btn join-item bg-red-500 text-white">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
