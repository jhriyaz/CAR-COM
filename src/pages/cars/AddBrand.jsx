import toast from "react-hot-toast";

const AddBrand = () => {
    let handleAddBrand=e=>{
        e.preventDefault();
        const form = e.target;
        const brand = form.brand.value;
        const link = form.link.value;
        const brandDetails={brand,link}
        fetch('http://localhost:5000/brands',{
    method: 'POST',headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(brandDetails)
  })
  .then(res=>res.json())
  .then(data=>{
    if (data.acknowledged===true){
      toast.success("Added Successfully");
      form.reset()
    }
  })
    }
    return (
        <div>
            <form className="grid p-10 bt-0 gap-10" onSubmit={handleAddBrand}>
      <h2 className="py-2 font-semibold text-4xl text-center transTTa">
          Add A Brand
        </h2>
        <input
              type="text" required
              placeholder="Brand Name"
              name="brand"
              className="border-0 outline-none border-b-4 focus:border-[#8a322c] rounded-md py-2 px-1  text-center"
            />


<input
              type="text" required
              placeholder="Logo Link"
              name="link"
              className="border-0 outline-none border-b-4 focus:border-[#8a322c] rounded-md py-2 px-1  text-center"
            />
      
<input
            className="btn uppercase py-4 rounded-lg px-10 bg-gradient-to-l from-[#ff1616b6] to-[#5f0606b6] hover:opacity-75 text-white text-lg font-bold text-center w-40 flex mx-auto"
            type="submit"
            value="Add"
          />
       
      </form>
        </div>
    );
};

export default AddBrand;