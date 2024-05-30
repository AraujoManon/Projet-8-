import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Thumb = ({ locations }) => {
  return (
    <section className="thumb-container">
      {locations.map((location) => (
        <Link to={`/location/${location.id}`} className="thumb" key={location.id}>
          <img src={location.cover} alt={location.title} />
          <h2>{location.title}</h2>
        </Link>
      ))}
    </section>
  );
};

Thumb.propTypes = {
  locations: PropTypes.array.isRequired
};

export default Thumb;