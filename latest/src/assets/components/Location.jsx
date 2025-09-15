import { useParams, Navigate } from "react-router-dom";
import locations from "../../data.json";
import Rating from "../components/StarRating.jsx";
import Slideshow from "../components/Slideshow.jsx";
import Dropdown from "../components/Dropdown.jsx";

const findIdLocation = (id) => {
  return locations.find((location) => location.id === id);
};

const Location = () => {
  const { id } = useParams();
  const location = findIdLocation(id);

  if (!location) {
    return <Navigate to="*" />;
  }

  return (
    <section className="location">
      <Slideshow pictures={location.pictures} />

      <article className="containerInfos">
        <div className="firstInfos">
          <h2>{location.title}</h2>
          <p>{location.location}</p>

          <div className="tags">
            {location.tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>

        <div className="secondInfos">
          <div className="host">
            <h3>{location.host.name}</h3>
            <img
              className="pictureHost"
              src={location.host.picture}
              alt={location.host.name}
            />
          </div>
          <Rating rating={parseInt(location.rating)} />
        </div>
      </article>
      <article className="dropdownContainer">
        <Dropdown title="Description">{location.description}</Dropdown>
        <Dropdown title="Équipements">
          <ul className="equipmentList">
            {location.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
      </article>
    </section>
  );
};

export default Location;
