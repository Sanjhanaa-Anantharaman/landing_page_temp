import React, { useState, useEffect } from 'react'
import { FiMenu } from "react-icons/fi";
import { AnimatePresence, motion } from 'motion/react';
import { CiGrid42 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";

const SideBar_sm = () => {
    const location = useLocation();
    function btnRouter(){
      if(location.pathname==='/home' || location.pathname==='/login' || location.pathname==='/sign-up' || location.pathname==='/'){
        return true
      }
    }
    const [hidden, setHidden] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div>
      {(btnRouter() || isSmallScreen) && (
        <div className="flex">
          <button className="mt-2" onClick={() => setHidden((prev) => !prev)}>
            <FiMenu size={25} />
          </button>
          <AnimatePresence>
            {!hidden && (
              <motion.div
                className="absolute top-0 left-0 bg-slate-200 w-[250px] z-2 min-h-screen flex-col flex p-4"
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
                  <button onClick={() => setHidden((prev) => !prev)}>
                    <MdCancel size={25} />
                  </button>
                </div>
                <div className="text-black">
                  <Link
                    className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2"
                    to={"/dashboard"}
                  >
                    <CiGrid42 size={27} />
                    Dashboard
                  </Link>
                  <Link
                    className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2"
                    to={"/profile"}
                  >
                    <CgProfile size={27} />
                    Profile
                  </Link>
                  <Link
                    className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2"
                    to={"/portfolio"}
                  >
                    <FiBriefcase size={27} />
                    Portfolio
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default SideBar_sm
