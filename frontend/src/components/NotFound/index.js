import "./NotFound.css";
import notFound from "./notfound.jpeg";

const NotFound = () => {
    return (
        <div className="not-found-cont">
            <h1>We're sorry, but that bear just ain't there...</h1>
            <img src={notFound} alt="confession-bear" className="not-found"/>
        </div>
    );
}

export default NotFound;