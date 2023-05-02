import heroimage from "../images/extras/hero-image.png"
import CountUp from 'react-countup';
function Header(){
    return (
        <div className=" lg:flex justify-around items-center text-white w-[100vw] lg:h-[80vh] h-[90vh] bg-neutral-900">
         <div className=" flex  flex-col gap-14">
          <h1 className="  text-5xl">
            Discover <br></br> Most Suitable <br></br> Property
          </h1>
 
          <div className=" flex gap-5 ">
            <div className=" lg:flex flex-col items-center text-2xl">
            <p><CountUp start={1} end={9999} duration={4}></CountUp><span className=" text-3xl text-orange-600">+</span></p>
  
            <h1>Happy Customers</h1>
            </div>
          <div className=" lh:flex flex-col items-center text-2xl">
          <p><CountUp start={1} end={999} duration={4}></CountUp><span className=" text-3xl text-orange-600">+</span></p>
      
            <h1>Availaible Houses</h1>
          </div>
            <div className=" lg:flex flex-col items-center text-2xl">
           <p><CountUp start={1} end={99} duration={4}></CountUp><span className=" text-3xl text-orange-600">+</span></p>
            <h1>Total Awards</h1>
            </div>

          </div>
          <h2 className=" text-2xl text-blue-800">Forget All Difficulties In Finding Home</h2>
         </div>
         <div>
           <img id="topimage" className=" animate border-4 border-blue-950 w-[20rem] h-[25rem] rounded-t-[15rem] " src={heroimage}></img>
         </div>
        </div>
    )
}

export default Header;