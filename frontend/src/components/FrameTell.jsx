import PropTypes from "prop-types";

const FrameTell = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[848px] relative flex flex-col items-center justify-start max-w-full max-h-full overflow-auto ${className}`}
    >
      <img
        className="w-full h-auto object-cover"
        alt="Background"
        src="/rectangle-2@2x.png"
      />
      <img
        className="w-[21px] h-[21px] absolute top-[12px] right-[12px] cursor-pointer"
        alt="Close"
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
