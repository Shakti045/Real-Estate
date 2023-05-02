import { createContext, useState } from "react";
export let Appcontext=createContext();
function Appcontextcreator({children}){
    let [loader,setloader]=useState(false);
    let [data,setdata]=useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd8084555f1msh92235c16cf28bffp17586ejsnc8cda798bf39',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };
    const baseurl="https://bayut.p.rapidapi.com";
    async function getdata(url){
        setloader(true)
        let output=await fetch(url,options);
        let {hits}=await output.json();
        console.log(hits);
        setdata(hits);
        setloader(false);

    }
    let [width,setwidth]=useState(window.screen.width)
    window.addEventListener("resize",()=>{
        setwidth(window.screen.width)
    })
    let value={
        loader,
        baseurl,
        setloader,
        data,setdata,
        getdata,
        options,
        width
    }
    return (
    <Appcontext.Provider value={value}>
           {children}
     </Appcontext.Provider>
    )
}

export default Appcontextcreator;