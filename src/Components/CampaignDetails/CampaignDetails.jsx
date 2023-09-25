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
    <DetailsBanner campaign={campaign}></DetailsBanner>
  </>
  );
};

export default CampaignDetails;
