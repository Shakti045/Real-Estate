import { NavLink } from "react-router-dom";
import Img from "./Lazyimage"
function Card({imagelink,h1,h2,desc,btntext,btnlink}){
    return (
        <div className="hover:scale-105 duration-500 text-white flex lg:flex-row flex-col gap-4  ">
          <div>
          <Img class={" h-[200px] w-[200px] "} src={imagelink}></Img>
           </div>
           <div className=" flex flex-col justify-around">
            <h1 className=" text-3xl font-bold">{h1}</h1>
            <h1>{h2}</h1>
            <h1>{desc}</h1>
          <NavLink to={btnlink}><button className=" hover:scale-105 duration-500 p-2 rounded-md bg-blue-800">{btntext}</button></NavLink>
           </div>
         
        </div>
    )
}

export default Card;