// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';

import { Link } from 'react-router-dom';

const Slider = ({slideData}) => {

    return (
     <div className=" shadow-lg">
       <Swiper  className=" bg-zinc-800 max-h-[600px] max-h-xl"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay= {
       { delay: 2000,
        disableOnInteraction: false}
      }
    >
      {slideData.map(car=> <SwiperSlide key={car._id}><Link to={'/cars/'+car._id}><img className="w-full h-full" src={car.Image} alt="" /></Link></SwiperSlide>)}
     
   
    </Swiper>
     </div>
    );
};

export default Slider;