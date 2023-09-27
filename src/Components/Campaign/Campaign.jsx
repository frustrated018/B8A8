import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
  const {
    id,
    text_color,
    background_color,
    badge_bg_color,
    category,
    campaign_name,
    img,
  } = campaign || {};
  return (
    <>
    <Link to={`/campaign/${id}`} state={campaign_name}>
    <div
        style={{ backgroundColor: background_color }}
        className="flex flex-col gap-0 rounded-lg"
      >
        {/* Image div */}
        <div className="">
          <img src={img} className="w-full" />
        </div>

        {/* text div */}
        <div className="flex flex-col gap-2 p-4">
          <div style={{ color: text_color }} className="text-sm font-medium">
            <span
              style={{ backgroundColor: badge_bg_color }}
              className=" border px-2.5 py-1 rounded"
            >
              {category}
            </span>
          </div>
          <div style={{ color: text_color }} className="text-xl font-semibold">
            {campaign_name}
          </div>
        </div>
      </div>
    </Link>
    </>
  );
};

Campaign.propTypes = {
  campaign: PropTypes.object,
};
export default Campaign;
