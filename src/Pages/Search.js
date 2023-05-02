import { useContext, useEffect, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { filterData } from '../filterdata';
import { Appcontext } from "../Contextprovider/Appcontextprovider";
import Propertycard from '../Components/Propertycard';
import Loader from "../Components/Loader";
function Search(){
    let [extraurl,setextraurl]=useState("");
    let [show,setshow]=useState(false);
    let [filter,setfilter]=useState({purpose:"for-rent",rentFrequency:"",minPrice:"",maxPrice:"",sort:"",areaMax:"",roomsMin:"",bathsMin:"",furnishingStatus:"",categoryExternalID:""});
    let {baseurl,loader,data,getdata}=useContext(Appcontext)
    function changehandler(e){
      setfilter(()=>{
        return {
          ...filter,[e.target.name]:e.target.value
        }
      })
    }
    
    function extraurlsetter(){
      let furl="";
      Object.entries(filter).forEach((e)=>{
           if(e[1]!==""){
             furl=furl+`&${e[0]}=${e[1]}`
           }
       })
       setextraurl(furl);
       console.log(extraurl);
    }
    useEffect(()=>{
     extraurlsetter();
      getdata(`${baseurl}/properties/list?locationExternalIDs=5002%2C6020&purpose=${filter.purpose}&hitsPerPage=25${extraurl}`);
    },[filter])
   
    return (
        <div className="  bg-neutral-900 min-h-[90vh]">
         <div onClick={()=>setshow(!show)} className=' cursor-pointer lg:w-[50vw] bg-slate-900 text-white p-2 rounded-lg items-center justify-center mx-auto flex gap-1 text-3xl font-bold text-center'>
            <h1 >Search By Filter</h1><BsFilter className=' relative top-2'></BsFilter>
         </div>
          {
          <div className= {`${show===false?"h-[0] opacity-0":" h-[300px] opacity-100"} overflow-hidden transition-all duration-1000 p-6  mt-1 lg:w-[50vw] bg-slate-900 mx-auto grid grid-cols-3 gap-6`}>
          {
             filterData.map((e,index)=>{
                 return       <select key={index*10} name={e.queryName} onChange={changehandler}  className=' outline-none text-white  bg-blue-800 border-2 border-blue-700 p-2 rounded-lg'>
                 <option value={""} hidden >{e.placeholder}</option>
                  {
                     e.items.map((data,index)=>{
                         return <option key={index} value={data.value} className=' rounded-md  bg-black'>{data.name}</option>
                     })
                  }
                </select>
           
             })
          }
     </div>
          }
          
           {
            loader===true?<Loader></Loader>:data.length===0?<h1 className='text-white font-bold text-3xl text-center absolute top-[70vh] left-[40vw] '>No data Found</h1>:<div className=' lg:grid grid-cols-3 gap-6 p-6'>
              {
                data.map((e)=>{
                return  <Propertycard key={e?.id} {...e}></Propertycard>
                })
              }
            </div>
           }
        
        </div>
    )
}
export default Search;
