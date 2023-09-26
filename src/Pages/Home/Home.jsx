import Campaigns from "../../Components/Campaigns/Campaigns";
import PropTypes from "prop-types"

const Home = ({campaigns}) => {
  

  return (
    <div>
      <Campaigns  campaigns={campaigns}></Campaigns>
    </div>
  );
};


Home.propTypes = {
  campaigns: PropTypes.array
}


export default Home;
