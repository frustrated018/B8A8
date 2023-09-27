import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";

const CampaignDetails = () => {
  const [campaign, setCampaign] = useState({});

  const { id } = useParams();

  const campaigns = useLoaderData();

  useEffect(() => {
    const clickedCampaign = campaigns?.find(
      (c) => parseInt(c.id) === parseInt(id)
    );
    setCampaign(clickedCampaign);
  }, [id, campaigns]);


  return (
  <>
    <div className="my-20 mx-5 md:mx-10 lg:mx-0">
    <DetailsBanner campaign={campaign}></DetailsBanner>
    </div>
  </>
  );
};

export default CampaignDetails;
