import { useEffect, useState } from "react";
import Brand from "./brand";

const Brands = () => {
    let [data,setData]=useState([])
    useEffect(()=>{
     fetch('https://car-com-backend-hlo2j6lud-jhriyazs-projects.vercel.app/brands')
     .then(res=>res.json())
     .then(datas=>{
        setData(datas)})},[])
    return (
        <section className="container mx-auto pt-24 transTT text-center" >
            <h1 className=" text-4xl font-bold  pb-20">
              ALL  BRANDS
            </h1>
<div className=" grid lg:grid-cols-4 gap-5 justify-center p-7">
{data.map(brands=><Brand key={brands._id} brands={brands}></Brand>)}
</div>
        </section>
    );
};

export default Brands;