import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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

  const {
    text_color,
    campaign_description,
    campaign_name,
    img,
  } = campaign || {};

  return (
    <div>
        <div>
            <img src={img} className="w-full" />
            <button style={{backgroundColor: text_color}} className="">Donate</button>
        </div>
      <h2 className="text-neutral-950 text-[40px] font-bold">
        {campaign_name}
      </h2>
      <p>{campaign_description}</p>
    </div>
  );
};

export default CampaignDetails;
