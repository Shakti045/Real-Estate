import { useContext, useEffect } from "react";
import Loader from "../Components/Loader"
import Propertycard from "../Components/Propertycard";
import { Appcontext } from "../Contextprovider/Appcontextprovider";
function Rent(){
    let {loader,data,getdata,baseurl}=useContext(Appcontext);
    useEffect(()=>{
     getdata(`${baseurl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25`);
    },[])
    return (
            <div className="min-h-[100vh] w-[100vw] lg:grid grid-cols-3 gap-6 p-6 bg-neutral-900 text-white">
            {
                loader===true?<Loader></Loader>:data.length===0?<h1>NO DATA FOUND PLEASE TRY AGAIN</h1>:data.map((e)=>{
                    return <Propertycard key={e?.id} {...e}></Propertycard>
                })
            }
            </div>
        )
    
}

export default Rent;