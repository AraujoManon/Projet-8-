import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(
        <svg
          key={i}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2.2448L19.09 10.1753H27.7225L20.8182 14.6585L23.9082 22.589L16 18.1057L8.0918 22.589L11.1818 14.6585L4.2775 10.1753H12.91L16 2.2448Z"
            fill="#FF6060"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2.2448L19.09 10.1753H27.7225L20.8182 14.6585L23.9082 22.589L16 18.1057L8.0918 22.589L11.1818 14.6585L4.2775 10.1753H12.91L16 2.2448Z"
            fill="#E3E3E3"
          />
        </svg>
      );
    }
  }

  return <div className="rating">{stars}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;