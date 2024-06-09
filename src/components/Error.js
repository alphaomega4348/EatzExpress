import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
    const err=useRouteError()
    return (
        <div className="error-container">
            <h1>404</h1>
            <h2>Oops! Page not found.</h2>
            <p className="error-message">{err.data}</p>
            <Link to="/">Go To Homepage</Link>
        </div>
    );
}

export default Error;