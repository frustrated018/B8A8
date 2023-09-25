import PropTypes from "prop-types";
import swal from "sweetalert";

const DetailsBanner = ({ campaign }) => {
  const { id, text_color, campaign_description, campaign_name, img, donation_amount } =
    campaign || {};

  const handleDonate = () => {
    const donationArr = [];

    const donatedItem = JSON.parse(localStorage.getItem("donated"));

    if (!donatedItem) {
      donationArr.push(campaign);
      localStorage.setItem("donated", JSON.stringify(donationArr));
      swal("Donation successfull!", "Thank you for being a wonderful human being!", "success");
    } else {
      const existing = donatedItem.find((dono) => dono.id === id);

      if (!existing) {
        donationArr.push(...donatedItem, campaign);
        localStorage.setItem("donated", JSON.stringify(donationArr));
        swal("Donation successfull!", "Thank you for being a wonderful human being!", "success");
      } else {
        swal("Already donated!", "You have already donated to this cause!", "warning");
      }
    }
  };

  return (
    <>
      <div>
        <div style={{ position: "relative" }}>
          <img src={img} className="w-full static rounded-lg" />
          <div
            style={{ backgroundColor: "rgba(11, 11, 11, 0.50)" }}
            className="h-[130px] absolute bottom-0 w-full rounded-bl-lg rounded-br-lg"
          >
            <button
              onClick={() => handleDonate()}
              style={{ backgroundColor: text_color }}
              className=" h-14 w-[179px] px-[26px] py-4 rounded ml-10 mt-10 text-white text-xl font-semibold "
            >
              Donate ${donation_amount}
            </button>
          </div>
        </div>

        <h2 className="text-neutral-950 text-[40px] font-bold">
          {campaign_name}
        </h2>
        <div
          style={{ color: "rgba(11, 11, 11, 0.70)" }}
          className="text-justify text-base font-normal leading-[30px]"
        >
          {campaign_description}
        </div>
      </div>
    </>
  );
};
DetailsBanner.propTypes = {
  campaign: PropTypes.object,
};
export default DetailsBanner;
