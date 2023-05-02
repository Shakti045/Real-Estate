function Calloption(props){
    return (
        <div className=" hover:scale-110 duration-700 flex flex-col gap-2 bg-neutral-700 border-1  shadow-lg p-3 rounded-lg">
         <div className=" flex gap-3 items-center  ">
          <div  className=" bg-blue-800  p-2 rounded-lg  text-2xl">
          {props.icon}
          </div>
          <div>
            <h1 className="  text-blue-800 font-bold text-xl">{props.name}</h1>
            <h1 className=" text-white ">{props.number}</h1>
          </div>
         </div>
          <button className=" hover:scale-105 duration-700 hover:bg-blue-700 hover:text-white p-2 rounded-lg text-blue-700 bg-blue-300">{props.task}</button>
        </div>
    )
}
export default Calloption;