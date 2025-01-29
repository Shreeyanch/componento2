import PropTypes from "prop-types";

const FrameTell = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-full relative flex flex-row items-center justify-start gap-2.5 max-w-full max-h-full overflow-auto ${className}`}
    >
      <img
        className="w-full h-auto object-fill z-[0]" // Ensure it covers the div properly
        alt=""
        src="/ppp.png"
      />
      {/* Close button positioned at the top-right corner */}
      <img
        className="w-[21px] absolute top-2 right-2 h-[21px] cursor-pointer z-[1]"
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
