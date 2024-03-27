import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.error.message && error.message && error.status}</p>
            <Link to={"/"}><button>Home</button></Link>
        </div>
    );
};

export default ErrorPage;
