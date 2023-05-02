import Header from "../Components/Header";
import Agents from "../Components/Ageants";
import Menu from "../Components/Menu";
import Popularhouse from "../Components/Popularhouse";
import PopularApartmets from "../Components/Popularapartments";
import Contact from "../Components/Contact";
function Home(){
    return (
        <div>
      <Header></Header>
      <Menu></Menu>
      <Agents></Agents>
      <Popularhouse></Popularhouse>
      <PopularApartmets></PopularApartmets>
      <Contact></Contact>
        </div>
    )
}

export default Home;