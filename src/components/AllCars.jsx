import { useEffect, useState } from 'react';
import Car2 from './Car2';

const AllCars = () => {
    let [allCar,setallCar]=useState([])
  
    useEffect(()=>{
     fetch('https://car-com-backend.vercel.app/cars')
     .then(res=>res.json())
     .then(Data=>{
      setallCar(Data)})},[])
        if(allCar.length>10){
          setallCar(allCar.slice(0,9))
        }
    return (
        <section className="container mx-auto pt-24" >
            <h1 className=" text-4xl font-bold text-center  transTT pb-20">
              Cars
            </h1>
<div className=" grid lg:grid-cols-4 gap-5 p-7">
{allCar?allCar.map(car=><Car2 key={car._id} car={car}></Car2>): <div className=" flex justify-center items-center pt-16"><span className="loading loading-spinner loading-lg"></span></div>}
</div>
        </section>
    );
};

export default AllCars;