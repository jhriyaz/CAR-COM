import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/images/logo.png';
import logow from '../../../public/images/logo-w.png';
import head from '../../../public/images/head.png';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useContext, useEffect, useState } from "react";
import { AuthInfo } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { GiMoonBats } from 'react-icons/gi';
import { FaSun } from 'react-icons/fa';
const NavBar = ({theme}) => {
  let {user,logOut,setCartItems,cartItems}=useContext(AuthInfo)
    let [expand,setExpand]=useState(false)
    let {dark,setDark}=theme
    const handleDarkMode=()=>{
      setDark(!dark)
    }
    let handleSignOut=()=>{
      logOut()
      .then(()=>{
        toast.success('Log Out complete')
        handleExpand(false)
      })
      .catch(err=> toast.error(err))
    }
    const handleExpand=(oo)=>{
        setExpand(oo)
    }
    let email=user?.email
    useEffect(()=>{
      fetch(`https://car-com-backend-96iwvry0w-jhriyazs-projects.vercel.app/carts/${email}`)
      .then(res=>res.json())
      .then(data=>{
          setCartItems(data.length)
      })
          },[setCartItems,email,cartItems])
    return (
        <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 px-4 bg-white bg-opacity-80 py-1 text-white backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-2 shadow-lg">
           <div className="bg-[#381411] w-12 p-1 flex gap-2 rounded-lg  transition-all ease-in-out absolute top-[70%] right-0" onClick={handleDarkMode}>
          <GiMoonBats></GiMoonBats>
          <FaSun></FaSun>
          <span className={`top-0 w-6 h-full absolute ${dark?'rounded-l-lg rounded-r-xl  left-0 bg-[#000000]':'rounded-r-lg rounded-l-xl right-0 bg-[#185f6b]'}`}></span>
        </div>
        <div className="flex items-center text-gray-900">
          <Link
            to='/'
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
          >
            <img className=" w-20" src={logo} alt="logo" />
          </Link>
        
          <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex navlinks">
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLink className="flex items-center text-lg  font-medium" to="/">
                Home
              </NavLink>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLink className="flex items-center text-lg font-medium " to="/add-car">
                Add Car
              </NavLink>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLink className="flex items-center text-lg font-medium" to="/cart">
                Cart <BsFillCartCheckFill className="ml-2"></BsFillCartCheckFill><small>{cartItems}</small>
              </NavLink>
            </li>
           
          </ul>
          {!user?<Link to="/login" className="middle hidden none lg:inline-block bg-gradient-to-tr from-[#ff1616] to-[#000] text-white center middle p-1 font-semibold px-4 rounded-lg " >
            <button>
            Log In
            </button>
          </Link>:<div className="hidden none lg:flex justify-center items-center gap-4 ">
            <img src={user?.photoURL?user?.photoURL:head}  alt="Profile Photo"  className="rounded-full w-11"/>
         <div className="flex flex-col justify-center ">
         <p className=" uppercase font-semibold">{ user?.displayName}</p>
         <p className="  text-center mx-auto text-xs font-bold"><button  className={`transTh transTT`} onClick={handleSignOut}>Log Out</button></p>
         </div>
            </div>
            }
         
          <button
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            data-collapse-target="sticky-navar" onClick={()=>{handleExpand(true)}}
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div
          className={`w-full ${!expand?'hidden':'absolute'} text-blue-gray-900 transition-all duration-300 ease-in lg:hidden left-0 top-0`}
          data-collapse="sticky-navar"
        >
          <ul className="gap-2 py-4 px-4  bg-[#000000f5]  flex flex-col  w-full text-center h-screen navlinks">
            <li className="flex justify-between p-2"> 
           <Link to='/'> <img className=" w-20" src={logow} alt="logo" /></Link>
            <button className="text-[red] text-xl font-bold" onClick={()=>{handleExpand(false)}}>X</button>
            </li>
            <li className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLink className="flex items-center text-lg font-medium" to="/" onClick={()=>{handleExpand(false)}}>
                Home
              </NavLink>
            </li>
            <li className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLink className="flex items-center text-lg font-medium" to="/add-car" onClick={()=>{handleExpand(false)}}>
                Add Car
              </NavLink>
            </li>
            <li className="block  font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLink className="flex items-center text-lg font-medium" to="/cart" onClick={()=>{handleExpand(false)}}>
              Cart <BsFillCartCheckFill className="ml-2"></BsFillCartCheckFill><small>{cartItems}</small>
              </NavLink>
            </li>
          
          
          {!user?<Link to="/login" className="bg-gradient-to-l from-[#ff1616b6] to-[#300202] text-white center middle p-1 mt-10 font-semibold px-4 rounded-lg w-full"onClick={()=>{handleExpand(false)}} >
            <button>
            Log In
            </button>
          </Link>:<div className="flex justify-end items-center gap-4 pt-10">
            <img src={user?.photoURL?user?.photoURL:head}  alt="Profile Photo"  className="rounded-full w-11"/>
         <div className="flex flex-col justify-center ">
         <p className=" uppercase font-semibold">{ user.displayName}</p>
         
         </div>
         <p className="  text-center mx-auto text-xs font-bold"><button  className={`transTh transTT`} onClick={handleSignOut}>Log Out</button></p>
            </div>
            }
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;