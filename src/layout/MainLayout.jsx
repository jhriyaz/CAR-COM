import { Outlet, useNavigation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/header/NavBar";
import { useState } from "react";
import Footer from "../components/footer";

const MainLayout = () => {
  let [dark,setDark]=useState(true)
  let navigation=useNavigation()
  return (
    <div className={`${dark?'bg-[#7c8da3]':'bg-[#0000005b]'}`} >
         <Toaster ></Toaster>
         <NavBar theme={{dark,setDark}}></NavBar>
    {navigation.state==='loading'?  <div className=" flex justify-center items-center pt-16"><span className="loading loading-spinner loading-lg"></span></div> : <>

      <Outlet></Outlet>
   <Footer></Footer>
      </>}
    </div>
  );
};

export default MainLayout;
