import PropTypes from "prop-types";

const Campaign = ({ campaign }) => {
  const {
    text_color,
    background_color,
    badge_bg_color,
    category,
    campaign_name,
    img,
  } = campaign;
  return (
    <>
      <div
        style={{ backgroundColor: background_color }}
        className="flex flex-col gap-0 rounded-lg"
      >
        {/* Image div */}
        <div className="w-full">
          <img src={img} />
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
    </>
  );
};

Campaign.propTypes = {
  campaign: PropTypes.object,
};
export default Campaign;
