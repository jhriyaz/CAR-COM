import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Eror404 from "../components/errors/Eror404";

import AddCar from "../pages/cars/AddCar";
import Cart from "../pages/cart/Cart";
import EditCar from "../pages/cars/EditCar";
import axios from "axios";
import LogIn from "../pages/auth/login/LogIn";
import Register from "../pages/auth/register/Register";
import AddBrand from "../pages/cars/AddBrand";
import PublicRoute from "../routecontrol/PublicRoute";
import PrivateRoute from "../routecontrol/PrivateRoute";
import BrandCars from "../pages/cars/BrandCars";
import SingleCar from "../pages/cars/SingleCar";
import Home from "../pages/home/Home";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Eror404></Eror404>,
    children: [
      {
        path: "/",
        loader:()=>axios.get('https://car-com-backend-616ubipzo-jhriyazs-projects.vercel.app/cars'),
        element:<Home></Home>
      },
      {
        path:"/login",
        element: <PublicRoute><LogIn></LogIn></PublicRoute>
      },
      {
        path:"/register",
        element:<PublicRoute><Register></Register></PublicRoute>
      },
      {
       path:'/cart',
       element:<PrivateRoute><Cart/></PrivateRoute>
      },{
        path:"/cars/:id",
        loader:({params})=>axios.get(`https://car-com-backend-616ubipzo-jhriyazs-projects.vercel.app/cars/${params.id}`),
        element:<PrivateRoute><SingleCar></SingleCar></PrivateRoute>
      },{
        path:"/brands",
        element:<PrivateRoute> <AddBrand></AddBrand></PrivateRoute>
      },
      
      {
        path: "/add-car",
        element:<PrivateRoute><AddCar></AddCar></PrivateRoute>
      },
      {
        path:'/updatecar/:id',
        loader:({params})=>axios.get(`https://car-com-backend-616ubipzo-jhriyazs-projects.vercel.app/cars/${params.id}`),
        element:<PrivateRoute><EditCar></EditCar></PrivateRoute>
      },
      {
        path:"/brand/:brand",
        loader:({params})=>axios.get(`https://car-com-backend-616ubipzo-jhriyazs-projects.vercel.app/brand/${params.brand}`),
        element:<PrivateRoute><BrandCars></BrandCars></PrivateRoute>
      },

    ],
  },
]);
export default Routes;
