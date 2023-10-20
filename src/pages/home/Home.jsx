import { useLoaderData } from "react-router-dom";
import Brands from "../../components/brands/Brands";
import Slider from "../../components/header/Slider";
import { useState } from "react";
import AllCars from "../../components/AllCars";
import Subscribe from "../../components/Subscribe";

const Home = () => {

let allData=useLoaderData().data
let [data,setData]=useState(allData)
if(allData.length>10){
  setData(allData.slice(0,9))
}

    return (
      <>
     
     <Slider data={data}></Slider>
     <Brands></Brands>
     <AllCars></AllCars>
     <Subscribe></Subscribe>
      </>

    );
};

export default Home;