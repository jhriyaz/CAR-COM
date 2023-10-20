import Swal from 'sweetalert2'
import { BsPencil } from "react-icons/bs";
const CartComponents = ({ item, cart, setCart }) => {
  let { data, _id } = item;
  let { Image, Name } = data;
  let handleDelete = () => {
    
          Swal.fire({
            title: "Are you sure want to remove this item?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove!",
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-com-backend-96iwvry0w-jhriyazs-projects.vercel.app/carts/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
            Swal.fire("Removed!", "success");
            let afterDelete = cart.filter((item) => item._id != _id);
            setCart(afterDelete);
        }
             
            })
  }});
       
      };


  return (
    <div className="grid grid-cols-6 gap-1 items-center justify-between bg-slate-400 border-[gray] p-2 text-black">
      <img src={Image} alt="image" className="rounded-md" />
      <h4 className=" col-span-4">{Name}</h4>
      <div className="flex justify-around gap-1 items-center">
        <BsPencil className="text-[#236320]"></BsPencil>{" "}
        <b className=" text-[#4e1717] font-bold" onClick={handleDelete}>
          X
        </b>
      </div>
    </div>
  );
};

export default CartComponents;
