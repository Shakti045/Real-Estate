import { agentdata } from "../images/agentsdata";
function Agents(){
 
    return (
        <div className="w-[100vw] bg-neutral-900 flex flex-col  gap-5  ">
            <h1 className=" text-3xl text-orange-600 text-center">AGENTS</h1>
          <div className="w-[100vw] overflow-hidden mx-auto">
            <div className="move flex gap-4">
            {
             agentdata.map((data)=>{
                return <img className=" agentimage border-2 rounded-full border-pink-600 w-[200px] h-[200px]" src={data}></img>
             })
            }
            </div>
          </div>
        </div>
    )
}

export default Agents;