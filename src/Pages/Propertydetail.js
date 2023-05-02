import { useContext } from "react";
import { Appcontext } from "../Contextprovider/Appcontextprovider";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoVerified } from 'react-icons/go';
import { FaBed,FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import Img from "../Components/Lazyimage"
import millify from "millify";
import Propertyimages from "../Components/Propertyimages"
import Loader from "../Components/Loader";
function Properydetail(){
    let {loader,setloader,options,baseurl}=useContext(Appcontext);
    let [details,setdetails]=useState(null);
    let location=useLocation();
    let pid=location.pathname.split("/").at(-1);
    async function getdata(){
        setloader(true);
       let data=await fetch(`${baseurl}/properties/detail?externalID=${pid}`,options)
       let result=await data.json();
        setdetails(result);
        console.log(result);
        setloader(false);
    }
    useEffect(()=>{
        getdata();
    },[location.pathname])
    return (
        <>
      {
        loader===true?<Loader></Loader>:<div className=" flex flex-col gap-6 text-white bg-neutral-900 p-6">
        <div>
        
        <Propertyimages photos={details?.photos}></Propertyimages>
        
        </div>
        <h1 className=" text-3xl font-bold">{details?.title}</h1>
        <h1 className=" text-2xl font-bold">${millify(details?.price)}</h1>
        <div className=" flex gap-4 items-center">
         <Img class={" h-[50px]"} src={details?.agency?.logo?.url}></Img>
         <h1 className=" font-bold">{details?.agency?.name}</h1>
        </div>
        <div className=" flex gap-3">
        {details?.isVerified===true?<GoVerified color="green"></GoVerified>:""} {details?.rooms} <FaBed className=" text-blue-800"></FaBed> | {details?.baths} <FaBath className=" text-blue-800"></FaBath> |  {millify(details?.area)}sqft <BsGridFill className=" text-blue-800"></BsGridFill>
        </div>
      <div className=" flex gap-1 items-center"><IoLocationSharp className=" text-red-800"></IoLocationSharp>{details?.location[0]?.name+","+details?.location[1]?.name}</div>
        <h1>{details?.description}</h1>
     </div>
      }
      </>
    )
}
 export default Properydetail;