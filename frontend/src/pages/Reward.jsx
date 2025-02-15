// import React, { useEffect, useState } from "react";
// import { Search, Settings, Plus, MoreVertical, Award } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/config";
// import { toast } from "react-toastify";
// import LoadingSpinner from "../components/LoadingSpinner";

// const Reward = () => {
//   const navigate = useNavigate();
//   const [stores, setStores] = useState([]);
//   const [rewards, setRewards] = useState([]);
//   const user = JSON.parse(localStorage.getItem("userInfo"));
//   const token = localStorage.getItem("token");
//   const [loading, setLoading] = useState(false);

//   // Fetch stores based on user role
//   const getStoresAdmin = async () => {
//     try {
//       const response = await api.get("/store", { headers: { token } });
//       if (response.data.success) {
//         setStores(response.data.stores);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message, {
//         autoClose: 2000,
//         theme: "colored",
//       });
//     }
//   };

//   const getStoresClient = async () => {
//     try {
//       const response = await api.get("/store/myStores", { headers: { token } });

//       if (response.data.success) {
//         setStores(response.data.stores);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message, {
//         autoClose: 2000,
//         theme: "colored",
//       });
//     }
//   };

//   const fetchData = async () => {
//     try {
//       if (user.role === "admin") {
//         await getStoresAdmin();
//       } else {
//         await getStoresClient();
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message, {
//         autoClose: 2000,
//         theme: "colored",
//       });
//     }
//   };

//   const getRewards = async (storeId) => {
//     setLoading(true);
//     try {
//       const response = await api.get(`/reward/getRewards/${storeId}`, {
//         headers: { token },
//       });

//       if (response.data.success) {
//         setRewards(response.data.rewards);
//       } else {
//         toast.error(response.data.message, {
//           autoClose: 2000,
//           theme: "colored",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message, {
//         autoClose: 2000,
//         theme: "colored",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setLoading(true);
//     fetchData();
//     setLoading(false);
//   }, [token]);

//   return (
//     <div className="p-4 sm:ml-60 mt-4 mr-4 min-h-screen bg-stone-800 text-gray-100 rounded rounded-xl">
//       {loading && <LoadingSpinner />}
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <Award className="w-6 h-6" />
//             <h1 className="text-xl font-semibold text-emerald-500">
//               REWARD LIST
//             </h1>
//           </div>
//           <div className="bg-emerald-500/20 px-3 py-1 rounded-full">
//             <span className="text-emerald-500">
//               Total: {rewards ? rewards.length : 0}
//             </span>
//           </div>
//         </div>

//         <div className="flex items-center gap-4 w-full md:w-auto">
//           <div className="text-gray-400">Store:</div>
//           <div className="text-emerald-500">
//             <select
//               name="store"
//               id="store"
//               onChange={(e) => getRewards(e.target.value)}
//               className="w-full px-4 py-2 rounded-lg bg-stone-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
//             >
//               <option disabled selected>
//                 Select Store
//               </option>
//               {stores &&
//                 stores.map((store) => (
//                   <option value={store._id} key={store._id}>
//                     {store.name}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className="relative flex-1 md:w-64">
//             <input
//               type="text"
//               placeholder="Search by Reward Name"
//               className="w-full bg-[#1E1B1A] rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             />
//             <Search
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//               size={18}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Content Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Create New Reward Card */}
//         <div
//           onClick={() => navigate("/reward/createReward/create")}
//           className="bg-[#1E1B1A] p-6 rounded-lg flex flex-col items-center justify-center min-h-[200px] cursor-pointer hover:bg-stone-900 shadow-lg"
//         >
//           <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-4">
//             <Plus size={24} className="text-gray-800" />
//           </div>
//           <span className="text-gray-400">Create New Reward</span>
//         </div>

//         {/* Reward Cards */}
//         {rewards &&
//           rewards.map((reward, index) => (
//             <div
//               key={index}
//               className="bg-stone-900 p-4 rounded-lg relative shadow-lg"
//             >
//               <div className="absolute top-4 right-4">
//                 <button className="bg-emerald-500 text-emerald-900 px-3 py-1 rounded-lg text-sm hover:bg-emerald-500/70 transition-colors flex items-center gap-1">
//                   Actions
//                   <MoreVertical size={16} />
//                 </button>
//               </div>
//               <div className="w-full mx-auto">
//                 <img
//                   src={reward.template.image}
//                   alt="Coffee Shop Logo"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="mt-4 text-center">{reward.name}</div>
//               {/* <div className="absolute bottom-4 right-4">
//               <div className="w-4 h-4 rounded-full bg-green-500"></div>
//             </div> */}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Reward;
import { useState, useCallback, useEffect } from "react";
import Description from "./Description";
import PortalPopup from "./PortalPopup";
import MyRewards from "./Myrewards"; // Import MyRewards component
import PropTypes from "prop-types";

const Reward = ({ className = "", onClose }) => {
  const [isRewardView, setIsRewardView] = useState(true); // State to toggle between Reward and MyRewards view
  const [isDescriptionPopupOpen, setDescriptionPopupOpen] = useState(false);

  const openDescriptionPopup = useCallback(() => {
    setDescriptionPopupOpen(true);
  }, []);

  const closeDescriptionPopup = useCallback(() => {
    setDescriptionPopupOpen(false);
  }, []);

  const toggleView = () => {
    setIsRewardView((prevView) => !prevView); // Toggle the view between Reward and MyRewards
  };

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
        <div
          className="self-stretch rounded-t-xl1 rounded-b-none bg-white h-[527px] flex flex-col items-center justify-start pt-7 px-0 pb-[42px] box-border gap-7 w-full max-h-[100%] overflow-auto"
        >
          {/* Toggle Container for Rewards and My Rewards */}
          <div className="rounded-62xl1 bg-gradient-to-r from-[#f5f2ed] via-[#f4f5f0] to-[#edf5f3] flex flex-row items-center justify-center p-[3px]">
            {/* Rewards Button */}
            <div
              className={`w-[84px] h-[25px] flex flex-row items-center justify-center cursor-pointer ${
                isRewardView
                  ? "bg-white shadow-[0px_4px_10px_rgba(10,_19,_8,_0.12)] text-darkslategray"
                  : "text-darkgray-100"
              }`}
              onClick={toggleView} // Toggle between Reward and MyRewards
            >
              <div className="flex-1 relative tracking-[-0.02em]">Rewards</div>
            </div>

            {/* My Rewards Button */}
            <div
              className={`w-[84px] h-[25px] flex flex-row items-center justify-center cursor-pointer ${
                !isRewardView
                  ? "bg-white shadow-[0px_4px_10px_rgba(10,_19,_8,_0.12)] text-darkslategray"
                  : "text-darkgray-100"
              }`}
              onClick={toggleView} // Toggle between Reward and MyRewards
            >
              <div className="flex-1 relative tracking-[-0.02em]">My Rewards</div>
            </div>
          </div>

          {/* Conditionally render Reward or MyRewards */}
          {isRewardView ? (
            <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[53px] text-left text-xs-4 text-black font-poppins">
              {/* Add your Reward component content here */}
              <div className="w-[270px] shadow-[0px_4px_12.2px_rgba(0,_0,_0,_0.25)] rounded-3xs1 bg-white h-48 flex flex-col items-center justify-start py-4 px-4 box-border relative gap-2.5">
                <img
                  className="w-60 relative rounded-6xs1 h-[130px] object-cover z-[0]"
                  alt=""
                  src="/apple-touch-icon.png"
                />
                <img
                  className="w-6 absolute !m-[0] top-[17px] left-[225px] h-6 cursor-pointer z-[1]"
                  alt=""
                  src="/frame-1410103886.svg"
                  onClick={openDescriptionPopup}
                />
                <div className="self-stretch flex flex-col items-start justify-center py-0 px-3.5 relative gap-px z-[2]">
                  <div className="flex flex-row items-center justify-center gap-px z-[0]">
                    <div className="w-[125.9px] relative font-medium inline-block shrink-0">
                      Grape Flavoued Latte
                    </div>
                    <div className="w-2.5 relative rounded-sm-41 bg-red border-whitesmoke-200 border-[1px] border-solid box-border h-2.5" />
                  </div>
                  <div className="relative font-montserrat text-darkgray-200 z-[1]">
                    20 Points
                  </div>
                  <img
                    className="w-[21.2px] absolute !m-[0] top-[6px] left-[233px] h-[21.2px] object-contain z-[2]"
                    alt=""
                    src="/reedem-button-arrow.svg"
                  />
                </div>
              </div>
              {/* Repeat similar structure for other rewards */}
            </div>
          ) : (
            <MyRewards /> // Display the MyRewards component when toggled
          )}
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

Reward.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Reward;
