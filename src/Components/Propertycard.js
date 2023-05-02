import { Link } from "react-router-dom";
import { GoVerified } from 'react-icons/go';
import { FaBed,FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';

import Img from "../Components/Lazyimage"
import millify from "millify";

function Propertycard({price,coverPhoto,isVerified,rentFrequency,title,rooms,area,baths,agency,externalID}){
    return (
        <Link to={`/properydetail/${externalID}`}>
            <div className=" text-white">
             <div>
             <Img  src={coverPhoto?.url} class=" h-[270px] w-[400px]  propertyimage  rounded-lg shadow-md" ></Img>
             </div>
             <div className=" flex items-center justify-between gap-3">
             <div className=" flex gap-2 items-center">
             {isVerified===true?<GoVerified color="green" ></GoVerified>:""}
                <h1 className=" font-bold">{`${millify(price)}/${rentFrequency?rentFrequency:""}`}</h1>
             </div>
                 <Img class={" h-[20px] w-[50px]"} src={agency?.logo?.url}></Img>
             </div>
             <div className=" flex  gap-4 items-center">
                {rooms} <FaBed className="text-blue-500"></FaBed> | {baths} <FaBath className="text-blue-500"></FaBath> |  {millify(area)}sqft <BsGridFill className="text-blue-500"></BsGridFill>
             </div>
             <h1 >{title.substring(0,100)}</h1>
            </div>
        </Link>
    )
}
export default Propertycard;