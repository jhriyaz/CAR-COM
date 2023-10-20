import { useContext, useEffect, useState } from "react";
import { AuthInfo } from "../../context/AuthContext";
import CartComponents from "../../components/cart/CartComponents";


const Cart = () => {
let {user}=useContext(AuthInfo)
let [cart,setCart]=useState([])
let email=user.email
    useEffect(()=>{
fetch(`https://car-com-backend-hlo2j6lud-jhriyazs-projects.vercel.app/carts/${email}`)
.then(res=>res.json())
.then(data=>{
    setCart(data)
  
})
    },[email])
    return (
       <section className="grid gap-10 container mx-auto py-24">
        {cart.length>0?cart.map(item=><CartComponents key={item._id} item={item} setCart={setCart} cart={cart}></CartComponents>):<p>NOthing here add some car to cart</p> }
       </section>
    );
};

export default Cart;