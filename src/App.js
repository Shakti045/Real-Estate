import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Rent from "./Pages/Rent"
import Buy from "./Pages/Buy"
import Search from "./Pages/Search";
import Properydetail from "./Pages/Propertydetail";
function App(){
    return (
        <>
       <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/rent" element={<Rent></Rent>}></Route>
        <Route path="/sell" element={<Buy></Buy>}></Route>
        <Route path="/properydetail/:id" element={<Properydetail></Properydetail>}></Route>
        <Route path="/search" element={<Search></Search>} ></Route>
      </Routes>
        </>
    )
}

export default App;