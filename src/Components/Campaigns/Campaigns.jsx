import PropTypes from "prop-types";
import Campaign from "../Campaign/Campaign";

const Campaigns = ({ campaigns }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-24">
        {campaigns?.map((campaign) => {
          return <Campaign key={campaign.id} campaign={campaign}></Campaign>;
        })}
      </div>
    </>
  );
};
Campaigns.propTypes = {
  campaigns: PropTypes.array,
};
export default Campaigns;
