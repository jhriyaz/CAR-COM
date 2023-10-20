import {useLoaderData } from "react-router-dom";
import ReactStarsRating from 'react-awesome-stars-rating';
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthInfo } from "../../context/AuthContext";

const SingleCar = () => {
  let {user}=useContext(AuthInfo)
    const data=useLoaderData().data
    let{brandLower,Image,Name,type,price,Rating,details}=data
    let handleCart=()=>{
fetch(`https://car-com-backend-96iwvry0w-jhriyazs-projects.vercel.app/carts/`,{
    method: "POST",headers:{
        "content-type": "application/json"

    },
    body:JSON.stringify({data ,email:user.email})
})
.then(res=>res.json())
.then(data=>{
    (data.acknowledged)&&toast.success('Added to Cart')
})
    }
    return (
        <section className="container mx-auto p-7">

<div className="relative shadow-lg rounded-b-lg overflow-hidden">
<img src={Image} alt="car Image" className="w-full max-h-[600px]" />
<div className="w-full absolute bottom-0 bg-[#4b111152]" > <h1 className="text-2xl text-[#3389c2c0] font-bold p-10">{Name}</h1></div>
</div>
<div className="grid gap-7 pt-8">
<h2> <span className=" font-semibold">Type : </span> {type}</h2>
      <h3><span className=" font-semibold">Brand : </span> {brandLower}</h3>
      <h3  className="flex gap-6"><span className=" font-semibold">Rating : </span>  <ReactStarsRating  value={Rating*1} isEdit={false} className="flex" /></h3>
      <h4><span className=" font-semibold">Price :</span> ${price}</h4>
      <h3><span className=" font-semibold">Details : </span> {( length> 7) ?details.slice(0,7)+'....':details}</h3>
     
        <button onClick={handleCart} className="bg-gradient-to-l from-[#6eb2dab6] to-[#300202] text-white p-1 mt-6 font-semibold px-4 rounded-sm max-w-fit">Add to Cart</button>
      
</div>
     
        </section>
    );
};

export default SingleCar;