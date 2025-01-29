import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProductDescription = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProductDescriptionContainerClick = useCallback(() => {
    navigate("/single-product-page");
  }, [navigate]);

  return (
    <div
      className={`w-[200px] flex flex-col items-start justify-center gap-[5px] cursor-pointer text-left text-2xs text-black font-poppins sm:w-[110px] mq480small:w-[197px] ${className}`}
      onClick={onProductDescriptionContainerClick}
    >
      <img
        className="self-stretch rounded-3xs max-w-full overflow-hidden h-[188px] shrink-0 object-cover md:self-stretch md:w-auto md:flex-1"
        alt=""
        src="/frame-14101037641@2x.png"
      />
      <div className="flex flex-col items-start justify-start gap-[5px]">
        <div className="self-stretch relative text-base tracking-[0.01em] font-medium">
          Tshirt
        </div>
        <div className="self-stretch relative tracking-[0.01em] font-medium text-gray-100">
          this is a good tshirt
        </div>
        <div className="flex flex-row items-start justify-start gap-[5px] text-darkgray-300">
          <div className="relative [text-decoration:line-through] tracking-[0.01em] lg:flex-1 mq480small:flex-1">
            Rs 200.00
          </div>
          <b className="relative tracking-[0.01em] text-black lg:flex-1 mq480small:flex-1">
            Rs 200.00
          </b>
        </div>
        <div className="flex flex-row items-start justify-start text-gray-200">
          <div className="relative tracking-[0.01em] font-semibold lg:flex-1 mq480small:flex-1">
            10% Off
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  className: PropTypes.string,
};

export default ProductDescription;
