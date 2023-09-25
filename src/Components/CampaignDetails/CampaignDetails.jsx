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

  const { text_color, campaign_description, campaign_name, img } =
    campaign || {};

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={img} className="w-full static" />
        <div
          style={{ backgroundColor: "rgba(11, 11, 11, 0.50)" }}
          className="h-[130px] rounded-bl-lg rounded-br-lg absolute bottom-0 left-0 w-full"
        >
          <button
            style={{ backgroundColor: text_color }}
            className="mt-4 px-6 py-2 rounded"
          >
            Donate
          </button>
        </div>
      </div>

      <h2 className="text-neutral-950 text-[40px] font-bold">
        {campaign_name}
      </h2>
      <p>{campaign_description}</p>
    </div>
  );
};

export default CampaignDetails;
