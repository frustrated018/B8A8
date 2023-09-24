import { useLoaderData } from "react-router-dom";
import Campaigns from "../../Components/Campaigns/Campaigns";

const Home = () => {


    const campaigns = useLoaderData();

    console.log(campaigns);


  return (
    <div>
      <h2 className="text-center text-3xl text-purple-600 my-20">
        <Campaigns></Campaigns>
      </h2>
    </div>
  );
};

export default Home;
