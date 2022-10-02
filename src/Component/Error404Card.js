import { Link } from "react-router-dom";
import "../Assets/css/error404card.css";

const Error404Card = () => {
    return (<div className="error-404-main">
            <div className="oops-text">
                Oops!
            </div>
            <div className="page-not-found-text">
                404 - PAGE NOT FOUND
            </div>
            <div className="page-not-found-tip-text">
                The page you are looking for might have been removed,
            </div>
            <div className="page-not-found-tip-text">
                had its name changed or is temporarily available.
            </div>
            <button className="go-to-homepage-btn">
               <Link className="link_text font-face-Bold " to="/">
                GO TO HOMEPAGE
                </Link>
           </button>
           </div>
    )
}
export default Error404Card;