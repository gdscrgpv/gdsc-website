import { Link } from "react-router-dom";
import "../Assets/css/error404card.css";

const Error404Card = () => {
  return (
    <div className="error-404-main pt-5 pb-5">
      <div className="oops-text">
        <span className="G">O</span>
        <span className="D">o</span>
        <span className="S">p</span>
        <span className="C">s</span>
        <span>!</span>
      </div>
      <div className="page-not-found-text">Error 404</div>
      <div className="page-not-found-tip-text">
        This is not the web page you are looking for.
      </div>
      <button className="go-to-homepage-btn">
        <Link className="link_text font-face-Bold " to="/">
          Go to homepage
        </Link>
      </button>
    </div>
  );
};
export default Error404Card;
