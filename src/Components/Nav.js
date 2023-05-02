import {  Link,NavLink } from "react-router-dom";
import logo from "../images/extras/logo2.png"
function Nav(){
    return (
        <div className=" font-bold lg:flex p-4 justify-around bg-neutral-900 text-white items-center">
         <Link to="/">
         <div>
           <img src={logo} alt="logo"></img>
          </div>
         </Link>
        <div className="flex flex-wrap gap-6 items-center">
           <NavLink to="/search">Search By Filter</NavLink>
           <NavLink to="/rent">Rent Home</NavLink>
           <NavLink to="/sell">Sell Home</NavLink>
           <a href="#contact"><button className=" p-2 bg-blue-800 rounded-md">Contact</button></a>
        </div>
        </div>
    )
}

export default Nav;