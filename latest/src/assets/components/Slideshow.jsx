import { useState } from 'react';
import PropTypes from 'prop-types';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="slideshow">
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
        src={pictures[currentIndex].url} // Accédez à l'URL de l'image
        alt={pictures[currentIndex].alt || `Slide ${currentIndex + 1}`} // Utilisez l'alt de l'image ou une alternative par défaut
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
  );
};

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  ).isRequired
};

export default Slideshow;