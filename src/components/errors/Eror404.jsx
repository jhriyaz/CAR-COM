import {  useNavigate } from "react-router-dom";
import "./error.css"
const Error404 = () => {
    const navigate=useNavigate()
    let handleGoBack=()=>{
        navigate('/')
    }
  return (
    <div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>d</span>4
            </h1>
          </div>
          <h2>Oops! Page Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
        <button className="btn rounded-lg font-semibold text-white text-base bg-[#FF444A] mt-7 hover:bg-[#ff444ad5] shadow-lg " onClick={handleGoBack}>
            Let&rsquo;s Go back to homepage.
        </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
