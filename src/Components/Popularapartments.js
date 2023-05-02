import {Popularapartment} from "../images/Popularapart"
import Img from "../Components/Lazyimage"
import SliderButtons from "./SliderButtons";
import { Swiper,SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { Appcontext } from "../Contextprovider/Appcontextprovider";
function PopularApartmets(){
    let {width}=useContext(Appcontext)
    return (
        <div className="flex flex-col gap-5 pt-5  bg-neutral-900">
         <h1 className=" text-3xl text-orange-600 text-center">Popular Apartments</h1> 
         <div className=" w-[60vw]  mx-auto">
            <Swiper slidesPerView={`${width<700?1:3}`}>
            <SliderButtons></SliderButtons>
                {
                    Popularapartment.map((data)=>{
                        return <div><SwiperSlide><Img class={"h-[200px] w-[200px] rounded-lg"} src={data}></Img></SwiperSlide></div>
                    })
                }
            
            </Swiper>
            </div>
        </div>
    )
}
 export default PopularApartmets;