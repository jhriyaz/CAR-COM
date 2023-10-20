import PropTypes from "prop-types";
import { useContext } from "react";
import  { AuthInfo } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute =({children}) => {
    let {loading,user}=useContext(AuthInfo)
    let location = useLocation().pathname
   if (loading) {
    return <div className=" flex justify-center items-center pt-16"><span className="loading loading-spinner loading-lg"></span></div>
   }
    if (user){
        return children
    }else{
       return <Navigate to='/login' state={location}></Navigate>
    }
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;