
import Brands from "../../components/brands/Brands";
import Slider from "../../components/header/Slider";
import { useEffect, useState } from "react";
import AllCars from "../../components/AllCars";
import Subscribe from "../../components/Subscribe";


const Home = () => {
  let[slideData,setSlideData]=useState([])
 useEffect(()=>{
  fetch('https://car-com-backend.vercel.app/cars')
.then(res => res.json())
.then(data => setSlideData(data))
 },[])


if(slideData.length>10){
  setSlideData(slideData.slice(0,9))
}

    return (
      <>
     
     <Slider slideData={slideData}></Slider>
     <Brands></Brands>
     <AllCars></AllCars>
     <Subscribe></Subscribe>
      </>

    );
};

export default Home;