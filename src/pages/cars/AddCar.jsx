import { useState } from "react";
import logo from "../../../public/images/logo.png";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Select from "react-select";
const AddCar = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedType, setSelectedType] = useState(null);


  const handleAddCar = (e) => {
    e.preventDefault();
    const form = e.target;
    const Image = form.Image.value;
    const Name = form.Name.value;
    const brand = form.brand.value;
    let brandLower = brand.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const Rating = form.Rating.value;
    const details = form.details.value;

if(!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(Image)){
  return toast.error('please add valid link')
}

  let car={Image,Name, brandLower, type, price, Rating,details}

  fetch('https://car-com-backend-hlo2j6lud-jhriyazs-projects.vercel.app/cars',{
    method: 'POST',headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(car)
  })
  .then(res=>res.json())
  .then(data=>{
    if (data.acknowledged===true){
      toast.success("Added Successfully");
      form.reset()
    }
  })

    
  };
 
  const brand = [
    { value: "BMW", label: "BMW" },
    { value: "Ford", label: "Ford" },
    { value: "TOYOTA", label: "TOYOTA" },
    { value: "Bentley", label: "Bentley" },
    { value: "Audi", label: "Audi" },
    { value: "Nissan", label: "Nissan" },
    { value: "Honda", label: "Honda" },
    { value: "Volkswagen", label: "Volkswagen" },
    { value: "Mercedes", label: "Mercedes" },
  ];
  const type = [
    { value: "SUV", label: "SUV" },
    { value: "Hatchback", label: "Hatchback" },
    { value: "Sedan", label: "Sedan" },
    { value: "Coupe", label: "Coupe" },
    { value: "Convertible", label: "Convertible" },
    { value: "Station Wagon", label: "Station Wagon" },
    { value: "Crossover", label: "Crossover" },
    { value: "Minivan", label: "Minivan" },
    { value: "Sports car", label: "Sports car" },
  ];

  return (
    <div className="container mx-auto lg:flex justify-between gap-8 items-center py-10 mt-10 px-4 pt-14 lg:pt-0">
      <Helmet>
        <title>Car-Com || Add A Car</title>
      </Helmet>
      <div className="hidden lg:grid lg:justify-center">
        <img src={logo} alt="logo" className="" />
      </div>
      <div
        className="  w-full border rounded-lg border-[#29eeeed0] shadow-xl"
        onSubmit={handleAddCar}
      >
        <form className="grid p-10 bt-0 gap-10">
          <h2 className="py-2 font-semibold text-4xl text-center text-[#29eeeed0]">
            ADD CAR
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Image link"
              name="Image"
              className="border-0 outline-none border-b-4 focus:border-[#8a322c] border-[#29eeeed0] mb-8 rounded-md py-2 px-1  text-center"
            />
            <input
              type="text"
              placeholder="Name"
              name="Name"
              className="border-0 outline-none border-b-4 focus:border-[#8a322c] border-[#29eeeed0] mb-8 rounded-md py-2 px-1  text-center"
            />
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <Select
                required
                placeholder="Select brand"
                className=" text-xs"
                name="brand"
                defaultValue={selectedBrand}
                onChange={setSelectedBrand}
                options={brand}
              />
              <Select
                required
                placeholder="Select Type"
                className=" text-xs"
                name="type"
                defaultValue={selectedType}
                onChange={setSelectedType}
                options={type}
              />
            </div>
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="border-0 outline-none border-b-4 focus:border-[#8a322c] border-[#29eeeed0] mb-8 rounded-md py-2 px-1  text-center"
            />
            <input
              type="number"
              placeholder="Rating (0-5)"
              name="Rating"
              max={5}
              min={0}
              className="border-0 outline-none border-b-4 focus:border-[#8a322c] border-[#29eeeed0] mb-8 rounded-md py-2 px-1  text-center"
            />
          </div>
          <textarea
            name="details"
            cols="30"
            rows="5"
            className="border-2 outline-none rounded-md focus:border-[#8a322c] focus:border-2 border-[#29eeeed0] p-3"
          ></textarea>
          <input
            className="btn uppercase py-4 rounded-lg px-10 bg-gradient-to-l from-[#ff1616b6] to-[#5f0606b6] hover:opacity-75 text-white text-lg font-bold text-center flex mx-auto"
            type="submit"
            value="Add Car"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCar;
