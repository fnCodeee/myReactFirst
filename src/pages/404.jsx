import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="flex font-sans text-3xl font-bold text-slate-500">OOO... LOL</h1>
            <p className="flex text-slate-400 mt-1">Something went wrong</p>
            <p className="flex text-slate-400 mt-1">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;