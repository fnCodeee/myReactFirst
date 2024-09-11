import { Link } from "react-router-dom";

const  lobby = () => {
    return (
        <div className="w-full min-h-screen text-center justify-center">
            <h1 className="text-5xl font-bold">Lobby</h1>
            <div className="flex flex-row text-center justify-center gap-9 mt-10">
                <Link to="/product">Product</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/perbaikan">False</Link>
            </div>
        </div>
    )
}

export default lobby;