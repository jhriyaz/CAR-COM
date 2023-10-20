import { Link } from "react-router-dom";
const Brand = ({brands}) => {
    let {brand,link}=brands;
let brandName=brand.toLowerCase()
    return (
     <Link to={`/brand/${brandName}`} className="grid gap-4">
      <div className="  bg-slate-500 rounded-full p-10 shadow-2xl">
         <div className="text-center gap-5 grid grid-cols-1">
        <img src={link} alt="brand logo" className="w-full"/>
     
        </div>
        
      </div>
      
      <p className=" uppercase font-bold">{brand}</p>
      </Link>
    );
};


export default Brand;