import { useEffect, useState } from 'react';
import Car2 from './Car2';

const AllCars = () => {
    let [data,setData]=useState([])
    if(data.length>10){
      setData(data.slice(0,9))
    }
    useEffect(()=>{
     fetch('https://car-com-backend-hlo2j6lud-jhriyazs-projects.vercel.app/cars')
     .then(res=>res.json())
     .then(datas=>{
        setData(datas)})},[])
    return (
        <section className="container mx-auto pt-24" >
            <h1 className=" text-4xl font-bold text-center  transTT pb-20">
              Cars
            </h1>
<div className=" grid lg:grid-cols-4 gap-5 p-7">
{data?data.map(car=><Car2 key={car._id} car={car}></Car2>):<p>No Carr Added</p>}
</div>
        </section>
    );
};

export default AllCars;