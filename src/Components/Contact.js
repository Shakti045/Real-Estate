import cimage from "../images/houses/house10lg.png"
import Img from "../Components/Lazyimage"
import {FiPhoneCall} from 'react-icons/fi'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {FcVideoCall} from 'react-icons/fc'
import {TbMessage} from 'react-icons/tb'
import Calloption from "./Calloption"
function Contact(){
    return (
        <div id="contact" className="  items-center lg:flex justify-around bg-neutral-900">
        <div className=" flex flex-col gap-3 text-white lg:max-w-[40vw]">
         <h1 className=" text-3xl text-orange-700">Contact Us</h1>
         <h1 className=" text-4xl text-blue-950">Easy To Contact Us</h1>
         <p className=" text-lg font-bold">We always ready to help by providing the best services for you. We beleive a good blace to live can make your life better.</p>
         <div className=" grid lg:grid-cols-2 gap-5">
           <Calloption icon={<FiPhoneCall></FiPhoneCall>} name="Call" number="+917846996310" task="Call Now"></Calloption>
           <Calloption icon={<FcVideoCall ></FcVideoCall>} name="Video Call" number="+917846996310" task="Video Call Now"></Calloption>
           <Calloption icon={<BsFillChatDotsFill></BsFillChatDotsFill>} name="Chat" number="+917846996310" task="Chat Now"></Calloption>
           <Calloption icon={<TbMessage></TbMessage>} name="Message" number="+917846996310" task="Message Now"></Calloption>
         </div>
        </div>
        <div>
            <Img class={" lg:mx-0 mx-5 mt-16 w-[20rem] h-[25rem] rounded-t-[15rem]"} src={cimage}></Img>
        </div>
        </div>
    )
}
export default Contact;