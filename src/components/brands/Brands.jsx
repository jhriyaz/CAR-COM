import { useEffect, useState } from "react";
import Brand from "./brand";

const Brands = () => {
    let [allBrand,setAllBrand]=useState([])
    useEffect(()=>{
     fetch('https://car-com-backend.vercel.app/brands')
     .then(res=>res.json())
     .then(Data=>{
        setAllBrand(Data)
    })},[])
    console.log(allBrand)
    return (
        <section className="container mx-auto pt-24 transTT text-center" >
            <h1 className=" text-4xl font-bold  pb-20">
              ALL  BRANDS
            </h1>
<div className=" grid lg:grid-cols-4 gap-5 justify-center p-7">
{allBrand?allBrand.map(brands=><Brand key={brands._id} brands={brands}></Brand>) : <div className=" flex justify-center items-center pt-16"><span className="loading loading-spinner loading-lg"></span></div> }
</div>
        </section>
    );
};

export default Brands;