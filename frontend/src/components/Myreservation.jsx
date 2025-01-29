import { useState, useCallback, useEffect } from "react";
import Description from "./Description";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import ReservationDetails from "./ReservationDetails";

const MyReservation = ({ className = "", onClose }) => {
  const [isDescriptionPopupOpen, setDescriptionPopupOpen] = useState(false);

  const openDescriptionPopup = useCallback(() => {
    setDescriptionPopupOpen(true);
  }, []);

  const closeDescriptionPopup = useCallback(() => {
    setDescriptionPopupOpen(false);
  }, []);

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
    <>
      <div
        className={`w-full relative flex flex-col items-center justify-center gap-2.5 max-h-[90%] overflow-auto text-center text-3xs1 text-darkslategray font-garet ${className}`}
      >
        <div className="w-[46px] relative rounded bg-white h-[3px]" />
        <div className="self-stretch rounded-t-xl1 rounded-b-none bg-white h-[527px] flex flex-col items-center justify-start pt-7 px-0 pb-[42px] box-border gap-7 w-full max-h-[100%] overflow-auto">
          {/* My Reservation Header */}
<div className="rounded bg-gradient-to-r from-[#f5f2ed] via-[#f4f5f0] to-[#edf5f3] flex flex-row items-center justify-center p-[3px]">
  {/* Rewards Button */}
  <div className="w-[84px] h-[25px] flex flex-row items-center justify-center bg-white shadow-[0px_4px_10px_rgba(10,_19,_8,_0.12)] text-darkslategray">
    <div className="flex-1 relative tracking-[-0.02em]">My Reservation</div>
  </div>
</div>
          <ReservationDetails />
        </div>
      </div>
      {isDescriptionPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDescriptionPopup}
        >
          <Description onClose={closeDescriptionPopup} />
        </PortalPopup>
      )}
    </>
  );
};

MyReservation.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default MyReservation;