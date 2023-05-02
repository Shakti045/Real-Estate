import { useSwiper } from "swiper/react"
import { FcPrevious,FcNext } from 'react-icons/fc';
function SliderButtons(){
    let swip=useSwiper();
    return (
        <div className=" pl-[25vw] flex gap-2">
        <button className="   p-2 bg-white rounded-md" onClick={()=>swip.slidePrev()}>{<FcPrevious></FcPrevious>}</button>
        <button  className=" p-2 bg-white rounded-md" onClick={()=>swip.slideNext()}>{<FcNext></FcNext>}</button>
        </div>
    )
}
export default SliderButtons;