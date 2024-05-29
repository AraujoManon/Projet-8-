import banner2 from "../images/banner2.png";
import Dropdown from "../components/Dropdown.jsx";

const Dropdowns = () => {
  return (
    <div className="containerDropdowns">
      <div className="banner2">
        <img className="img2" src={banner2} alt="Seconde bannière" />
      </div>
      <div className="multipleDrop">
        <Dropdown title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Dropdown>
        <Dropdown title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Dropdown>
        <Dropdown title="Service">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Dropdown>
        <Dropdown title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Dropdown>
      </div>
    </div>
  );
};

export default Dropdowns;
