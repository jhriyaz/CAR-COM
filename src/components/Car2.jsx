
import ReactStarsRating from 'react-awesome-stars-rating';
import { Link } from "react-router-dom";

const Car2 = ({ car }) => {

  let { _id, Image, Name, type, brandLower, details, price, Rating } = car;

let length=details.length

  return (
    <div className="grid p-5 bg-[#7c78787e] rounded-lg">
      <img src={Image} alt="car image" className="rounded pb-4" />
      <h2><span className=" font-semibold">Name:</span> {Name}</h2>
      <h2> <span className=" font-semibold">Type : </span> {type}</h2>
      <h3><span className=" font-semibold">Brand : </span> {brandLower}</h3>
      <h3  className="flex gap-6"><span className=" font-semibold">Rating : </span>  <ReactStarsRating  value={Rating*1} isEdit={false} className="flex" /></h3>
      <h4><span className=" font-semibold">Price :</span> ${price}</h4>
      <h3><span className=" font-semibold">Details : </span> {( length> 7) ?details.slice(0,7)+'....':details}</h3>
     <div className="flex justify-between items-center"> <Link to={'/cars/'+_id}>
        <button className="bg-gradient-to-l from-[#6eb2dab6] to-[#300202] text-white center middle p-1 mt-10 font-semibold px-4 rounded-lg">See More</button>
      </Link>
      </div>
    </div>
  );
};

export default Car2;
