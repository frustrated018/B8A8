import { useLoaderData } from "react-router-dom";
import Campaigns from "../../Components/Campaigns/Campaigns";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const campaigns = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Campaigns key={campaigns.id} campaigns={campaigns}></Campaigns>
    </div>
  );
};

export default Home;
