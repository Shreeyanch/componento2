import PropTypes from "prop-types";

const FrameTell = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[848px] relative flex flex-row items-center justify-start gap-2.5 max-w-full max-h-full overflow-auto ${className}`}
    >
      <img
        className="w-[848px] relative h-[511px] object-cover z-[0]"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <img
        className="w-[21px] absolute m-0 top-[12px] left-[813px] h-[21px] cursor-pointer z-[1]"
        alt=""
        src="/frame-1410103927.svg"
        onClick={onClose}
      />
    </div>
  );
};

FrameTell.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default FrameTell;
