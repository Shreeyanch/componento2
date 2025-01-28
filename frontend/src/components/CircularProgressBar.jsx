// CircularProgressBar.js
const CircularProgressBar = ({ progress, iconSrc }) => {
    const progressAngle = (progress / 100) * 360;
  
    return (
      <div className="relative flex justify-center items-center w-[200px] h-[200px]">
        <svg
          className="rotate-90"
          width="200"
          height="200"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#FFFCEC"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#E6D62D"
            strokeWidth="8"
            strokeDasharray="314.159"
            strokeDashoffset={314.159 - (progressAngle / 360) * 314.159}
            strokeLinecap="round"
          />
        </svg>
        <img className="absolute w-16 h-16" alt="Cup Icon" src={iconSrc} />
      </div>
    );
  };
  
  export default CircularProgressBar;
  