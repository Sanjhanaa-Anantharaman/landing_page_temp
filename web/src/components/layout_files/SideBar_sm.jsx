import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";
import { CiGrid42, CiGrid41 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { NavLink, useLocation } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import { FaRegFileAlt, FaUserGraduate } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const SideBar_sm = () => {
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [hidden, setHidden] = useState(true);
  const [expand, setExpand] = useState(false);

  function btnRouter() {
    if (
      location.pathname === "/home" ||
      location.pathname === "/login" ||
      location.pathname === "/sign-up" ||
      location.pathname === "/"
    ) {
      return true;
    }
    return isSmallScreen;
  }

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  return (
    <div>
      {btnRouter() && (
        <div className="flex">
          <button
            className="mt-2"
            onClick={() => setHidden((prev) => !prev)}
            aria-label="Open menu"
          >
            <FiMenu size={25} />
          </button>
          <AnimatePresence>
            {!hidden && (
              <motion.div
                className="fixed top-0 left-0 bg-slate-200 w-[260px] z-50 min-h-screen flex-col flex p-4 shadow-xl"
                initial={{ scale: 1, x: "-250px" }}
                animate={{ scale: 1, x: "0px" }}
                exit={{ x: "-250px" }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-2 w-full flex items-center justify-between">
                  <p className="text-lg font-bold">Menu</p>
                  <button
                    onClick={() => setHidden((prev) => !prev)}
                    aria-label="Close menu"
                  >
                    <MdCancel size={25} />
                  </button>
                </div>
                <div className="text-black">
                  <NavLink
                    className={({ isActive }) =>
                      `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
                        isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
                      }`
                    }
                    to={"/dashboard"}
                    onClick={() => setHidden(true)}
                  >
                    <CiGrid42 size={27} />
                    Dashboard
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
                        isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
                      }`
                    }
                    to={"/profile"}
                    onClick={() => setHidden(true)}
                  >
                    <CgProfile size={27} />
                    Profile
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
                        isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
                      }`
                    }
                    to={"/portfolio"}
                    onClick={() => setHidden(true)}
                  >
                    <FiBriefcase size={27} />
                    Portfolio
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
                        isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
                      }`
                    }
                    to={"/internships"}
                    onClick={() => setHidden(true)}
                  >
                    <FaUserGraduate size={27} />
                    Internships
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
                        isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
                      }`
                    }
                    to={"/approvals"}
                    onClick={() => setHidden(true)}
                  >
                    <FaRegFileAlt size={27} />
                    Approvals
                  </NavLink>

                  {/* Community Log (from sanjhanaa-communitypage) */}
                  <NavLink
                    className={({ isActive }) =>
                      `text-lg mb-3 flex gap-2 rounded-lg p-2 ${
                        isActive ? "bg-[#6C47FF] text-white" : "hover:bg-slate-300"
                      }`
                    }
                    to={"/service-log"}
                    onClick={() => setHidden(true)}
                  >
                    <CiGrid41 size={27} />
                    Community Log
                  </NavLink>

                  {/* Expandable Section (from main) */}
                  <div className="text-lg mb-3 items-center flex-col gap-2 rounded-lg p-2">
                    <div>
                      <div className="flex gap-2">
                        <FaRegFileAlt size={27} />
                        Expandable
                        <button
                          className={`flex justify-center items-center ${
                            expand ? "rotate-180" : ""
                          }`}
                          onClick={() => setExpand((prev) => !prev)}
                        >
                          <HiChevronDown size={27} />
                        </button>
                      </div>
                      {expand && (
                        <div className="flex flex-col mt-4 ml-8">
                          <NavLink
                            className="text-lg mb-2 flex gap-2 hover:bg-slate-400 rounded-lg p-2"
                            to={"/workshops"}
                            onClick={() => setHidden(true)}
                          >
                            <CiGrid42 size={27} />
                            Conferences & Workshops
                          </NavLink>
                          <NavLink
                            className="text-lg mb-2 flex gap-2 hover:bg-slate-400 rounded-lg p-2"
                            to={"/engagements"}
                            onClick={() => setHidden(true)}
                          >
                            <CgProfile size={27} />
                            Engagements
                          </NavLink>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {!hidden && (
            <div
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => setHidden(true)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SideBar_sm;
