
import Header from "../../component/header/index";
import Sectionone  from "../../component/sectionOne";
import Sectiontwo from "../../component/sectionTwo";
import Sectionthree from "../../component/sectionThree";
import Sectionfour from "../../component/sectionFour";
import Sectionfive from"../../component/sectionFive";
import SectionFooter from "../../component/footer";

function Home() {
  return (
    <div className="App">

      <Header/>
      <Sectionone/>
      <Sectiontwo/>
      <Sectionthree/>
      <Sectionfour/>
      <Sectionfive/>
      <SectionFooter/>


    </div>
  );
}

export default Home;