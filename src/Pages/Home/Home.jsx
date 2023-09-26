import { useLoaderData } from "react-router-dom";
import Campaigns from "../../Components/Campaigns/Campaigns";

const Home = () => {
  const campaigns = useLoaderData();

  return (
    <div>
      <Campaigns key={campaigns.id} campaigns={campaigns}></Campaigns>
    </div>
  );
};

export default Home;
