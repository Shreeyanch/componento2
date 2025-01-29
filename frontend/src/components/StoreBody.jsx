import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import PropTypes from "prop-types";

const StoreBody = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProductDescriptionClick = useCallback(() => {
    navigate("/single-product-page");
  }, [navigate]);

  return (
    <div
      className={`self-stretch [filter:drop-shadow(0px_2px_7.1px_rgba(0,_0,_0,_0.05))] flex flex-row items-start justify-start py-0 px-5 gap-[27px] text-left text-2xs text-black font-poppins ${className}`}
    >
      <div className="w-[686.5px] [filter:drop-shadow(0px_2px_7.1px_rgba(0,_0,_0,_0.05))] border-black border-[1px] border-solid box-border h-2.5 hidden" />
      <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-5 gap-[27px]">
        <div
          className="w-[480px] [filter:drop-shadow(0px_2px_7.1px_rgba(0,_0,_0,_0.05))] rounded-xl border-gray-300 border-[1px] border-solid box-border flex flex-col items-start justify-center p-5 gap-3 lg:w-[480px] mq480small:self-stretch mq480small:w-auto"
          id="storebody"
        >
          <div
            className="self-stretch flex flex-col items-center justify-center text-base lg:w-auto lg:[align-self:unset]"
            id="CatagoryDiv"
          >
            <div className="self-stretch flex flex-row items-center justify-start">
              <b className="flex-1 relative tracking-[0.01em]">Products</b>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start text-sm">
              <div className="flex-1 relative tracking-[0.01em]">Products</div>
            </div>
          </div>
          <div
            className="self-stretch h-24 flex flex-row items-start justify-start gap-[5px] cursor-pointer lg:self-stretch lg:w-auto"
            onClick={onProductDescriptionClick}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] mq480small:flex-1">
              <div className="relative text-base tracking-[0.01em] font-medium lg:self-stretch lg:w-auto mq480small:self-stretch mq480small:w-auto">
                Tshirt
              </div>
              <div className="relative tracking-[0.01em] font-medium text-gray-100 lg:self-stretch lg:w-auto mq480small:self-stretch mq480small:w-auto">
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
            <div className="self-stretch w-[93px] rounded-3xs bg-[url('/public/frame-1410103764@3x.png')] bg-cover bg-no-repeat bg-[top] mq480small:w-auto mq480small:[align-self:unset] mq480small:h-auto" />
          </div>
          <div
            className="self-stretch h-24 flex flex-row items-start justify-start gap-[5px] cursor-pointer lg:self-stretch lg:w-auto"
            onClick={onProductDescriptionClick}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] mq480small:flex-1">
              <div className="relative text-base tracking-[0.01em] font-medium lg:self-stretch lg:w-auto mq480small:self-stretch mq480small:w-auto">
                Tshirt
              </div>
              <div className="relative tracking-[0.01em] font-medium text-gray-100 lg:self-stretch lg:w-auto mq480small:self-stretch mq480small:w-auto">
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
            <div className="self-stretch w-[93px] rounded-3xs bg-[url('/public/frame-1410103764@3x.png')] bg-cover bg-no-repeat bg-[top] mq480small:w-auto mq480small:[align-self:unset] mq480small:h-auto" />
          </div>
          <div
            className="self-stretch h-24 flex flex-row items-start justify-start gap-[5px] cursor-pointer lg:self-stretch lg:w-auto"
            onClick={onProductDescriptionClick}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] mq480small:flex-1">
              <div className="relative text-base tracking-[0.01em] font-medium lg:self-stretch lg:w-auto mq480small:self-stretch mq480small:w-auto">
                Tshirt
              </div>
              <div className="relative tracking-[0.01em] font-medium text-gray-100 lg:self-stretch lg:w-auto mq480small:self-stretch mq480small:w-auto">
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
            <div className="self-stretch w-[93px] rounded-3xs bg-[url('/public/frame-1410103764@3x.png')] bg-cover bg-no-repeat bg-[top] mq480small:w-auto mq480small:[align-self:unset] mq480small:h-auto" />
          </div>
        </div>
        <div className="w-[480px] [filter:drop-shadow(0px_2px_7.1px_rgba(0,_0,_0,_0.05))] rounded-xl border-gray-300 border-[1px] border-solid box-border flex flex-col items-center justify-center p-5 gap-3 text-base mq480small:self-stretch mq480small:w-auto">
          <div
            className="self-stretch flex flex-col items-center justify-center lg:w-auto lg:[align-self:unset]"
            id="CatagoryDiv"
          >
            <div className="self-stretch flex flex-row items-center justify-start">
              <b className="flex-1 relative tracking-[0.01em]">Products</b>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start text-sm">
              <div className="flex-1 relative tracking-[0.01em]">Products</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-3 text-2xs">
            <ProductDescription />
            <ProductDescription />
            <ProductDescription />
            <ProductDescription />
          </div>
        </div>
      </div>
    </div>
  );
};

StoreBody.propTypes = {
  className: PropTypes.string,
};

export default StoreBody;
