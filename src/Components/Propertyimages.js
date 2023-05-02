import { Swiper,SwiperSlide,useSwiper } from "swiper/react";
import Img from "../Components/Lazyimage"
function Propertyimages(props){
  
    return (
        <div className=" relative w-[50vw] mx-auto">
            <Swiper slidesPerView={1}>
                <Swipperbuttons></Swipperbuttons>
                {
                  props.photos?props.photos.map((data,index)=>{
                    return <div key={index}><SwiperSlide><Img class={" w-[50vw] h-[400px] rounded-lg"} src={data?.url}></Img></SwiperSlide></div>
                }):""
                }
            </Swiper>
        </div>
    )
}
export default Propertyimages;
const Swipperbuttons=()=>{
    const swipe =useSwiper();
  return(
    <div className=" mx-24 flex gap-2">
          <button onClick={()=>swipe.slidePrev()} className=" absolute top-[50%] left-0 z-40 p-2 rounded-lg bg-blue-700 text-white">&lt;</button>
          <button className=" absolute  top-[50%] right-0  z-50 p-2 bg-blue-700 text-white rounded-lg" onClick={()=>swipe.slideNext()}>&gt;</button>
    </div>
  )
}