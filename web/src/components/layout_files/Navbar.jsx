import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/themeSlice';
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import SideBar_sm from './SideBar_sm';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state)=> state.theme.theme)

  useEffect(()=>{
    console.log(theme);
  }, [theme])

  return (
    <header className="fixed top-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between px-3 md:px-6 py-4">
        <div className='flex items-center gap-3'>
          <SideBar_sm />
          <Link className="text-xl font-bold text-gray-900" to={"/home"}>
            Smart Student Hub
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div>
            {theme === "light" ? (
              <IoSunnyOutline
                size={25}
                onClick={() => dispatch(toggleTheme())}
              />
            ) : (
              <FaMoon size={24} onClick={() => dispatch(toggleTheme())} />
            )}
          </div>
          <a className="text-gray-600 hover:text-[#137fec]" href="#">
            Features
          </a>

          <Link
            className="text-gray-600 hover:text-[#137fec] hidden sm:block"
            to="/login"
          >
            Log In
          </Link>
          <Link
            className="rounded-lg bg-[#137fec] px-4 py-2 text-white hover:bg-blue-700"
            href="/sign-up"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar
