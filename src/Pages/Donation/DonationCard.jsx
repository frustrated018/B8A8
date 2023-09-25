import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DonationCard = ({ dono }) => {
  const {
    id,
    background_color,
    badge_bg_color,
    category,
    text_color,
    campaign_name,
    img,
    donation_amount,
  } = dono || {};
  return (
    <div>
      <div
        style={{ backgroundColor: background_color }}
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-bordershadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border">
          <img src={img} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div style={{ color: text_color }} className="text-sm font-medium">
            <span
              style={{ backgroundColor: badge_bg_color }}
              className=" border px-2.5 py-1 rounded"
            >
              {category}
            </span>
          </div>
          <h6 className=" block text-2xl font-semibold  leading-relaxed tracking-normal text-neutral-900 antialiased mt-1">
            {campaign_name}
          </h6>
          <p
            style={{ color: text_color }}
            className=" text-base font-semibold mb-2 ">
            ${donation_amount}
          </p>
          <Link to={`/campaign/${id}`}>
          <button
            style={{ backgroundColor: text_color }}
            className=" h-10 w-[141px] px-4 py-[9px] rounded text-white  font-semibold "
          >
            View details
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  dono: PropTypes.object,
};
export default DonationCard;
