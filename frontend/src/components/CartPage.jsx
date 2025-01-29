import { useEffect } from "react";
import ProductDescription1 from "./ProductDescription1";
import PropTypes from "prop-types";

const CartPage = ({ className = "", onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className={`w-[520px] relative bg-white h-full overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[81px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] text-left text-xl text-black font-poppins ${className}`}
      data-animate-on-scroll
    >
      <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start p-2.5 gap-2.5">
        <b className="flex-1 relative tracking-[0.01em] lg:flex-1 mq480small:flex-1">
          Cart
        </b>
        <img className="w-[17px] relative h-[17px]" alt="" src="/exit.svg" />
      </div>
      <ProductDescription1 />
      <div className="self-stretch flex-1 flex flex-col items-center justify-end p-[18px] box-border max-w-full [object-fit:contains] h-auto lg:self-stretch lg:w-auto lg:pl-2.5 lg:pr-2.5 lg:box-border mq480small:self-stretch mq480small:w-auto mq480small:flex-1 mq480small:pl-[30px] mq480small:pr-[30px] mq480small:box-border mq480small:h-auto">
        <button className="cursor-pointer border-black border-[1px] border-solid py-2.5 px-[3px] bg-darkslategray-300 self-stretch rounded-mini box-border h-auto flex flex-row items-start justify-center gap-2.5 max-w-full [object-fit:contains] lg:rounded-mini lg:pl-0 lg:pr-0 lg:box-border sm:h-auto">
          <b className="flex-1 relative text-smi tracking-[0.01em] font-poppins text-white text-right lg:flex-1 sm:text-smi sm:self-stretch sm:h-auto mq480small:flex-1">
            Checkout
          </b>
          <div className="flex-1 relative text-smi tracking-[0.01em] font-poppins text-white text-left lg:flex-1 sm:text-smi sm:self-stretch sm:h-auto mq480small:flex-1">
            Rs 200.00
          </div>
        </button>
      </div>
    </div>
  );
};

CartPage.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default CartPage;
