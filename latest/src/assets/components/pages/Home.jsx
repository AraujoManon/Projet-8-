
import banner from "../../images/banner.png";
import Thumb from "../Thumb";
import locations from "../../../data.json"
const Home = () => {
    return (
    <div className="home">
      <div className="banner">
     <img className="bannerImg" src={banner} alt="Image de montagne"/>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery">
        <Thumb locations={locations} />
      </div>
      </div>
    );
  };
  
  export default Home;