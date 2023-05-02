import Card from "./Card";
import image1 from "../images/houses/house3.png"
import image2 from "../images/houses/house4.png"
function Menu(){
    return (
        <div className="  bg-neutral-900 flex lg:flex-row flex-col justify-around h-[50vh] items-center">
          <Card imagelink={image1} h1={"Rent A Home"} h2={"Rental Homes For Everyone"} desc={"Explore Appartments,Homes and manymore"} btntext={"Explore Renting"} btnlink={"/rent"} ></Card>
          <Card  imagelink={image2} h1={"Buy A Home"} h2={"Find, Buy & Own your Dream Home"} desc={"Explore Appartments,Homes and manymore"} btntext={"Explore Buying"} btnlink={"/sell"}></Card>
        </div>
    )
}
export default Menu;