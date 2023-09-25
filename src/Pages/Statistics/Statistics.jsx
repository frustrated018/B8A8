import ThePie from "./ThePie";

const Statistics = () => {
  const donatedItem = JSON.parse(localStorage.getItem("donated")) || [];
  const donationsInLocalStorage = donatedItem.length;

  const totalDonations = 12;
  const donationsNotInLocalStorage = totalDonations - donationsInLocalStorage;
  return (
    <div className=" flex justify-center items-center">
      <ThePie
        donationsInLocalStorage={donationsInLocalStorage}
        donationsNotInLocalStorage={donationsNotInLocalStorage}
      ></ThePie>
    </div>
  );
};

export default Statistics;
