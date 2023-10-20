
import Brands from "../../components/brands/Brands";
import Slider from "../../components/header/Slider";
import { useEffect, useState } from "react";
import AllCars from "../../components/AllCars";
import Subscribe from "../../components/Subscribe";


const Home = () => {
  let[allData,setAllData]=useState([])
 useEffect(()=>{
  fetch('https://car-com-backend-96iwvry0w-jhriyazs-projects.vercel.app/cars')
.then(res => res.json())
.then(data => setAllData(data))
 },[])


if(allData.length>10){
  setAllData(allData.slice(0,9))
}

    return (
      <>
     
     <Slider data={allData}></Slider>
     <Brands></Brands>
     <AllCars></AllCars>
     <Subscribe></Subscribe>
      </>

    );
};

export default Home;