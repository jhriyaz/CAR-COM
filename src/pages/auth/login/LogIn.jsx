import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from "react";
import { AuthInfo } from "../../../context/AuthContext";
import toast from "react-hot-toast";
import SocialSignIn from "../../../components/auth/SocialSignIn";
import "../auth.css"
const LogIn = () => {
 let state =useLocation().state
  let [errorText, setErrorText] = useState('');
  let {logIn,setLoading}=useContext(AuthInfo)
  let navigate=useNavigate()

  const handleLogIn=e=>{
    e.preventDefault();
    setErrorText('')
    let email=e.target.email.value
    let password=e.target.password.value
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email
      )
    ) {
      return setErrorText("please Input Valid Email");
    } else if (
      password.length < 8 ||
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!*_])[A-Za-z\d@#$%^&+=!*_]{8,}$/.test(
        password
      )
    ) {
      return setErrorText(
        "password must be 8 character long and include special character"
      );
    }
   
    logIn(email,password)
    .then(()=>{
      state?  navigate(state):navigate('/')
      toast.success('logged In')
    })
    .catch((err)=> {setErrorText(err.code.slice(5))
      setLoading(false)})
   
  }
  return (
    
    <div className="container mx-auto flex justify-center items-center h-screen px-4 pt-14 lg:pt-0">
        <Helmet>
        <title>Car-Com || Log In</title>
      </Helmet>
    <div className=" max-w-[600px] w-full border rounded-lg border-[#29eeeed0]  shadow-xl" onSubmit={handleLogIn}>
      <form className="grid p-10 bt-0 gap-10">
      <h2 className="py-2 font-semibold text-4xl text-center transTTa">
           LogIn
        </h2>
        <input
              type="text"
              placeholder="Example@email.com"
              name="email"
              className="border-0 outline-none border-b-4 focus:border-[#8a322c] border-[#29eeeed0] mb-8 rounded-md py-2 px-1  text-center"
            />


<input
              type="password"
              placeholder="Password"
              name="password"
              className="border-0 outline-none border-b-4 focus:border-[#8a322c] border-[#29eeeed0] mb-8 rounded-md py-2 px-1  text-center"
            />
      
<p className="text-[#6d6d6d9a] text-right">Don&apos;t have account? Please <Link className="underline font-semibold transTT transTh" to="/register" state={state}>Register</Link></p>

{errorText && <p className=" text-red-900 py-5">{errorText}</p>}
<input
            className="btn uppercase py-4 rounded-lg px-10 bg-gradient-to-l from-[#ff1616b6] to-[#5f0606b6] hover:opacity-75 text-white text-lg font-bold text-center  flex mx-auto"
            type="submit"
            value="Log In"
          />
       
      </form>
      <div className="flex items-center px-10 py-10 gap-4">
  <p className=" font-bold transTT">Or,Log in with . . .</p><div className="w-40"><SocialSignIn state={state} setErrorText={setErrorText}></SocialSignIn></div>
</div>
    </div>
   
    </div>
  
  );
};

export default LogIn;
