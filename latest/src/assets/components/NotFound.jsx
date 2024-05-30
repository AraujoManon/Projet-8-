import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>

      <p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </section>
  );
};

export default NotFound;
