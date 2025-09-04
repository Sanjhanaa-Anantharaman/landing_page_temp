import React from 'react'
import { CiGrid42 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import {Link} from 'react-router-dom'
import {motion} from 'motion/react'
import { FiBriefcase } from 'react-icons/fi';

const SideBar = () => {
  return (
    <motion.div className="bg-slate-200 z-2 min-h-screen hidden md:flex md:w-65 p-4">
      <div className="text-black w-full">
        <Link className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2 w-full" to={'/dashboard'}>
          <CiGrid42 size={27} />
          Dashboard
        </Link>
        <Link className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2 w-full" to={'/profile'}>
          <CgProfile size={27} />
          Profile
        </Link>
        <Link
          className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2 w-full"
          to={"/portfolio"}
        >
            <FiBriefcase size={27} />
            Portfolio
          </Link>
      </div>
    </motion.div>
  );
}

export default SideBar
