import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import locations from "../../data.json";
import Rating from '../components/StarRating.jsx';

const findIdLocation = (id) => {
  return locations.find((location) => location.id === id);
};

const Location = () => {
  const { id } = useParams();
  const location = findIdLocation(id);
  if (!location) {
    return <Navigate to="*" />;
  }
  const pictures = location.pictures;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipment = () => {
    setIsEquipmentOpen(!isEquipmentOpen);
  };

  return (
    <div className="location">
      <div className="carrousel">
        <button className="arrow left" onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </button>
        <img
          src={pictures[currentIndex]}
          alt={location.title}
          key={currentIndex}
        />
        <button className="arrow right" onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="containerInfos">
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
      </div>
      <div className="dropdownContainer">
        <div className="dropdown" onClick={toggleDescription}>
          <div className="dropdownHeader">
            <span>Description</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className={`arrow ${isDescriptionOpen ? "open" : ""}`}
            >
              <path
                d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z"
                fill="white"
              />
            </svg>
          </div>
          {isDescriptionOpen && (
            <div className="dropdownContent">{location.description}</div>
          )}
        </div>

        <div className="dropdown" onClick={toggleEquipment}>
          <div className="dropdownHeader">
            <span>Equipements</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className={`arrow ${isEquipmentOpen ? "open" : ""}`}
            >
              <path
                d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z"
                fill="white"
              />
            </svg>
          </div>
          {isEquipmentOpen && (
            <div className="dropdownContent">
              <ul className="equipmentList">
                {location.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;