
import banner from "../../images/banner.png";
import Thumb from "../Thumb";
import locations from "../../../data.json"
const Home = () => {
    return (
    <section className="home">
      <article className="banner">
     <img className="bannerImg" src={banner} alt="Image de montagne"/>
        <h1>Chez vous, partout et ailleurs</h1>
      </article>
      <article className="gallery">
        <Thumb locations={locations} />
      </article>
      </section>
    );
  };
  
  export default Home;