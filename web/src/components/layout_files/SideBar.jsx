import React from 'react'
import { CiGrid42 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import {Link} from 'react-router-dom'
import {motion} from 'motion/react'

const SideBar = () => {
  return (
    <motion.div className="bg-slate-200 min-h-screen w-0 md:w-65 p-4">
      <div className="text-black">
        <Link className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2" to={'/dashboard'}>
          <CiGrid42 size={27} />
          Dashboard
        </Link>
        <Link className="text-lg mb-3 flex gap-2 hover:bg-slate-300 rounded-lg p-2" to={'/profile'}>
          <CgProfile size={27} />
          Profile
        </Link>
      </div>
    </motion.div>
  );
}

export default SideBar
