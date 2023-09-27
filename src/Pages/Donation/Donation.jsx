import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [showAll, setShowALl] = useState(false);
  const [donations, setDonations] = useState([]);
  const [noDono, setNoDono] = useState(false);

  useEffect(() => {
    const donatedItem = JSON.parse(localStorage.getItem("donated"));

    if (donatedItem) {
      setDonations(donatedItem);
    } else {
      setNoDono("NO DONATIONS YET");
    }
  }, []);

  return (
    <div className=" my-[70px] ">
      {noDono ? (
        <h2 className=" h-[50vh] flex justify-center items-center text-3xl text-red-600">
          {noDono}
        </h2>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 md:mx-20 lg:mx-0">
          {showAll
            ? donations.map((dono, idx) => (
                <DonationCard key={idx} dono={dono}></DonationCard>
              ))
            : donations
                .slice(0, 4)
                .map((dono, idx) => (
                  <DonationCard key={idx} dono={dono}></DonationCard>
                ))}
        </div>
      )}

      {donations.length > 4 && (
        <div className="flex justify-center items-center">
          <button
            onClick={() => setShowALl(!showAll)}
            className="w-[110px] h-12 bg-green-600 rounded-lg mt-10 text-white text-base font-semibold"
          >
            {showAll ? "Show less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
