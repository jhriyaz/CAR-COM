import { useLoaderData } from "react-router-dom";
import Car from "../../components/Car";
import Slider from "../../components/header/Slider";

const BrandCars = () => {
    let data= useLoaderData().data

 if(data.length>0){
return(
    
    <section className="container mx-auto pt-24">
        <Slider data={data}></Slider>
    <h1 className="transTT uppercase text-4xl font-bold text-center  pb-24">
        Cars from <span className="transTTa ">{data[0].brandLower}</span>
    </h1>
<div className=" grid lg:grid-cols-3  gap-8">
{
data.map(car=><Car key={car._id} car={car}> </Car>)
}
</div>
</section>
) }else{
   return(
    <section className="container mx-auto pt-24">
         <h1 className="transTT uppercase text-4xl font-bold text-center  pb-24">
        No car available from this <span className="transTTa ">Brand</span>
    </h1>
    </section>
   )
}
};

export default BrandCars;