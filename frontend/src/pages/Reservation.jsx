import { useState, useCallback } from "react";
import FrameTell from "../components/FrameTell";
import PortalPopup from "../components/PortalPopup";
import FrameComponent from "../components/FrameComponent";
import Myreservation from "../components/Myreservation";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
const Reservation = () => {
  const [isFrameTellPopupOpen, setFrameTellPopupOpen] = useState(false);
  const [isReservationModalOpen, setReservationModalOpen] = useState(false);
  const navigate = useNavigate();

  const openFrameTellPopup = useCallback(() => {
    setFrameTellPopupOpen(true);
  }, []);

  const closeFrameTellPopup = useCallback(() => {
    setFrameTellPopupOpen(false);
  }, []);

  const openReservationModal = useCallback(() => {
    setReservationModalOpen(true);
  }, []);

  const closeReservationModal = useCallback(() => {
    setReservationModalOpen(false);
  }, []);

  const onBackSvgrepoComClick = useCallback(() => {
    navigate("/loyaltycard1");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-white h-screen flex flex-col items-center justify-center pt-[35px] px-0 pb-[70px] box-border gap-[25px] text-center text-base1 text-black font-garet lg1:pt-10 lg1:px-20 lg1:pb-[60px] lg1:box-border md1:pl-10 md1:pr-10 md1:box-border sm1:pl-6 sm1:pr-6 sm1:box-border">
        <div className="w-80 flex flex-col items-center justify-center pt-[11px] px-0 pb-1.5 box-border z-[0]">
          <div className="relative tracking-[0.01em] lg1:text-black font-poppins text-lg">
            Make your
          </div>
          <div className="relative text-base1 tracking-[0.01em] font-semibold font-poppins text-xl">
            Reservation 📆
          </div>
        </div>
        <img
          className="w-[270px] relative h-[195px] object-cover cursor-pointer z-[1]"
          alt="Frame"
          src="/frame-1410103897@2x.png"
          onClick={openFrameTellPopup}
        />
        <form className="m-0 w-[270px] flex flex-col items-center justify-center gap-2.5 z-[2] sm1:self-stretch sm1:w-auto sm1:pl-10 sm1:pr-10 sm1:box-border mq350small1:pl-0 mq350small1:pr-0 mq350small1:box-border">
          <input
            className="border-gray-200 text-base1 font-poppins border-[1px] border-solid [outline:none] bg-[transparent] self-stretch [filter:drop-shadow(0px_0px_2px_rgba(0,_0,_0,_0.25)_inset)] rounded-6xs1 box-border h-[35px] flex flex-row items-center justify-center py-[7px] px-3"
            placeholder="Table No"
            type="text"
          />
          <input
            className="border-gray-200 text-base1 font-poppins border-[1px] border-solid [outline:none] bg-[transparent] self-stretch [filter:drop-shadow(0px_0px_2px_rgba(0,_0,_0,_0.25)_inset)] rounded-6xs1 box-border h-[35px] flex flex-row items-center justify-center py-[7px] px-3"
            placeholder="No Of Guests"
            type="number"
          />
          <input
            className="border-gray-200 text-base1 font-poppins border-[1px] border-solid [outline:none] bg-[transparent] self-stretch [filter:drop-shadow(0px_0px_2px_rgba(0,_0,_0,_0.25)_inset)] rounded-6xs1 box-border h-[35px] flex flex-row items-center justify-center py-[7px] px-3"
            name="Email"
            placeholder="Name"
            type="text"
          />
          <input
            className="border-gray-200 text-base1 font-poppins border-[1px] border-solid [outline:none] bg-[transparent] w-[270px] flex-1 [filter:drop-shadow(0px_0px_2px_rgba(0,_0,_0,_0.25)_inset)] rounded-6xs1 box-border flex flex-row items-center justify-center py-[7px] px-3 sm1:self-stretch sm1:w-auto"
            placeholder="Phone No"
            type="tel"
          />
          <input
            className="border-gray-200  text-base1 font-poppins border-[1px] border-solid [outline:none] bg-[transparent] self-stretch [filter:drop-shadow(0px_0px_2px_rgba(0,_0,_0,_0.25)_inset)] rounded-6xs1 box-border h-[35px] flex flex-row items-center justify-center py-[7px] px-3"
            name="BirthDate"
            placeholder="Date "
            type="datetime-local"
          />
          <button className="cursor-pointer font-poppins border-whitesmoke-100 border-[1px] border-solid py-[9px] px-0 bg-seagreen-100 self-stretch rounded-6xs1 box-border h-[39px] flex flex-row items-end justify-center lg1:gap-2.5">
            <div className="relative text-base1 tracking-[0.01em] leading-[149.7%] font-medium font-poppins text-white text-left">
              Continue
            </div>
          </button>
        </form>
        <FrameComponent />
        <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 z-[4]">
          <div className="w-[22px] h-[22px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-px box-border">
            <img className="w-6 relative h-[22px]" alt="Icon" src="/icon.svg" />
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-smi1 tracking-[0.01em] font-medium font-poppins text-black text-left inline-block"
            onClick={openReservationModal}
          >
            {`View Reservations `}
          </button>
          <img
            className="w-5 relative h-5"
            alt="Frame"
            src="/frame-14101038781.svg"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[43px] absolute !m-[0] top-[12px] left-[18px] h-[43px] overflow-hidden shrink-0 z-[5]"
          onClick={onBackSvgrepoComClick}
        >
          <img
            className="absolute h-[63.49%] w-[35.81%] top-[20%] right-[30.93%] bottom-[16.51%] left-[33.26%] max-w-full overflow-hidden max-h-full"
            alt="Back"
            src="/vector.svg"
          />
        </button>
        <div className="self-stretch flex flex-row items-center justify-start pt-[50px] px-0 pb-0 gap-[5px] z-[6] text-right text-3xs1 text-darkslategray-100 font-poppins">
          <div className="flex-1 relative">Powered By</div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <a
              className="[text-decoration:none] w-[83px] relative h-[11.5px] bg-[url('/public/samparka-16-5@3x.png')] bg-cover bg-no-repeat bg-[top]"
              href="https://www.samparka.info/"
            />
          </div>
        </div>
      </div>
      {isFrameTellPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.9)"
          placement="Centered"
          onOutsideClick={closeFrameTellPopup}
        >
          <FrameTell onClose={closeFrameTellPopup} />
        </PortalPopup>
      )}
      {isReservationModalOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom"
          onOutsideClick={closeReservationModal}
        >
          <Myreservation onClose={closeReservationModal} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Reservation;
