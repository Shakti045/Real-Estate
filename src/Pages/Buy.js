import Loader from "../Components/Loader";
import { useContext, useEffect } from "react";
import { Appcontext } from "../Contextprovider/Appcontextprovider";
import Propertycard from "../Components/Propertycard";
function Sell(){
 let {baseurl,loader,getdata,data}=useContext(Appcontext);
 useEffect(()=>{
    getdata(`${baseurl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25`);
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
export default Sell;
