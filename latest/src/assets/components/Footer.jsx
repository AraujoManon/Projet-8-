import K from "../images/logoWhite/Vector.svg";
import svgHome from "../images/logoWhite/Group.svg";
import Z from "../images/logoWhite/Vector (1).svg";
import A from "../images/logoWhite/Vector (2).svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img className="K" src={K} alt="Logo Kasa" />
        <img className="svgHome" src={svgHome} alt="Logo Kasa" />
        <img className="Z" src={Z} alt="Logo Kasa" />
        <img className="A" src={A} alt="Logo Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};
export default Footer;
