import PropTypes from "prop-types";
import { AiOutlineGoogle,AiOutlineGithub ,AiFillTwitterCircle} from 'react-icons/ai';
import { useContext } from 'react';
import { AuthInfo } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const SocialSignIn = ({state,setErrorText}) => {
    let navigate=useNavigate()
    let {signInWithGoogle,signInWithGithub,signInWithTwitter,setLoading}=useContext(AuthInfo)
    let handleSignIn=handle=>{
        setErrorText('')
        handle()
        .then(()=>{
            state?  navigate(state):navigate('/')
            toast.success('logged In')
          })
          .catch((err)=> {setErrorText(err.code.slice(5))
            setLoading(false)
        })
    }
    return (
        <div className="grid grid-cols-3 gap-6">
          <button onClick={()=>handleSignIn(signInWithGoogle)}> <AiOutlineGoogle className="hover:text-[#0f0f0fd3] text-[#8a322c] font-extrabold text-4xl"></AiOutlineGoogle></button>
          <button onClick={()=>handleSignIn(signInWithGithub)}><AiOutlineGithub className="hover:text-[#0f0f0fd3] text-[#8a322c] font-extrabold text-4xl" ></AiOutlineGithub></button>
        <button onClick={()=>handleSignIn(signInWithTwitter)}><AiFillTwitterCircle className="hover:text-[#0f0f0fd3] text-[#8a322c] font-extrabold text-4xl" ></AiFillTwitterCircle></button>
        </div>
    );
};
SocialSignIn.propTypes={
    state:PropTypes.string,
    setErrorText:PropTypes.func
}
export default SocialSignIn;