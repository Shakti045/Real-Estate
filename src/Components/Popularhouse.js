import { housedata } from "../images/houses";
import Img from "./Lazyimage"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import SliderButtons from "./SliderButtons";
import { useContext } from "react";
import { Appcontext } from "../Contextprovider/Appcontextprovider";
function Popularhouse(){
let {width}=useContext(Appcontext)
    return (
        <div className="flex flex-col gap-5  bg-neutral-900">
         <h1 className=" text-3xl text-orange-600 text-center">Popular Houses</h1> 
        <div className=" w-[60vw]   mx-auto">
        <Swiper slidesPerView={`${width<700?1:3}`}>
        <SliderButtons></SliderButtons>
         {
            housedata.map((data)=>{
                return <div><SwiperSlide><Img class={"h-[200px] w-[200px] "} src={data}></Img></SwiperSlide></div>
            })
          }
        </Swiper>
        </div>
        </div>
    )
}
export default Popularhouse;


