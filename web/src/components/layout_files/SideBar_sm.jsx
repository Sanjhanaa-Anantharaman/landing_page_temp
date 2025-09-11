import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";
import { CiGrid42 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";

const SideBar_sm = () => {
  const location = useLocation();
  // Always show the hamburger menu on all routes to ensure mobile access
  function btnRouter() {
    return true;
  }
  const [hidden, setHidden] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock page scroll when drawer is open
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
                initial={{
                  scale: 1,
                  x: "-250px",
                }}
                animate={{
                  scale: 1,
                  x: "0px",
                }}
                exit={{
                  x: "-250px",
                }}
                transition={{
                  duration: 0.3,
                }}
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
                  <Link
                    className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2"
                    to={"/dashboard"}
                    onClick={() => setHidden(true)}
                  >
                    <CiGrid42 size={27} />
                    Dashboard
                  </Link>
                  <Link
                    className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2"
                    to={"/profile"}
                    onClick={() => setHidden(true)}
                  >
                    <CgProfile size={27} />
                    Profile
                  </Link>
                  <Link
                    className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2"
                    to={"/portfolio"}
                    onClick={() => setHidden(true)}
                  >
                    <FiBriefcase size={27} />
                    Portfolio
                  </Link>
                  <Link
                    className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2"
                    to={"/internships"}
                    onClick={() => setHidden(true)}
                  >
                    <FiBriefcase size={27} />
                    Internships
                  </Link>
                  <Link
                    className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2"
                    to={"/approvals"}
                    onClick={() => setHidden(true)}
                  >
                    <FiBriefcase size={27} />
                    Approvals
                  </Link>
                  <Link
                    className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2"
                    to={"/service-log"}
                    onClick={() => setHidden(true)}
                  >
                    <CiGrid41 size={27} />
                    Community Log
                  </Link>
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
