import { useCallback, useEffect } from "react";
import Title from "../components/Title";
import StoreBody from "../components/StoreBody";
import PropTypes from "prop-types";

const HomePageStore = ({ className = "" }) => {
  const onHomePageStoreClick = useCallback(() => {
    window.open("https://take.app/panipuriz");
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
      <Title />
      <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-5 mq480small:pl-2.5 mq480small:pr-2.5 mq480small:box-border">
        <img
          className="w-[480px] rounded-xl h-auto [object-fit:contains] max-w-full lg:w-[500px] lg:pl-2.5 lg:box-border mq480small:flex-1 mq480small:self-stretch mq480small:h-auto mq480small:pl-[30px] mq480small:pr-[30px] mq480small:box-border mq480small:min-w-[100px]"
          alt=""
          src="/frame-14101039181@2x.png"
        />
      </div>
      <StoreBody />
      <div className="self-stretch flex flex-row items-center justify-center py-5 px-0 gap-[11px]">
        <a
          className="[text-decoration:none] w-[18px] relative h-[19px] overflow-hidden shrink-0"
          href="https://take.app/panipuriz"
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector6.svg"
          />
        </a>
        <a
          className="[text-decoration:none] w-[11px] relative h-[19px]"
          href="https://take.app/panipuriz"
          target="_blank"
        >
          <img
            className="absolute top-[0px] left-[0px] w-[11px] h-[19px]"
            alt=""
            src="/facebook.svg"
          />
        </a>
        <a
          className="[text-decoration:none] w-[19px] relative h-[19px] overflow-hidden shrink-0"
          href="https://take.app/panipuriz"
          target="_blank"
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector7.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
        <div className="flex-1 relative text-2xs font-poppins text-darkslategray-100 text-right">
          Powered By
        </div>
        <div className="flex-1 flex flex-col items-start justify-start">
          <a
            className="[text-decoration:none] w-[83px] relative h-[11.5px] bg-[url('/public/samparka-16-5@3x.png')] bg-cover bg-no-repeat bg-[top]"
            href="https://take.app/panipuriz"
            target="_blank"
          />
        </div>
      </div>
    </>
  );
};

HomePageStore.propTypes = {
  className: PropTypes.string,
};

export default HomePageStore;
