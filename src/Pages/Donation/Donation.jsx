import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
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
    <div>
      {noDono ?
       (<h2 className=" h-[80vh] flex justify-center items-center text-3xl text-red-600">{noDono}</h2>) 
       : 
       (<div className="grid grid-cols-2 gap-5">
        { donations.map((dono, idx) => <DonationCard key={idx} dono={dono}></DonationCard>)}
       </div>)
      }
    </div>
  );
};

export default Donation;
