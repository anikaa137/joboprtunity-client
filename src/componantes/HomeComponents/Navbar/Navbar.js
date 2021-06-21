import React, { useContext } from "react";
import "./NAvbar.css"
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div >

            <nav class="navbar navbar-expand-lg navbar-light  mx-auto">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav">
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <Link to="/home" className="nav-link mr-5">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link
                                        to="/home/about"
                                        className="nav-link mr-5"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/dashbord"
                                        className="nav-link mr-5 "
                                    >
                                        Dashboard{" "}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {loggedInUser.email ? (
                                        ""
                                    ) : (
                                        <Link
                                            to="/login"
                                            className="nav-link mr-5 "
                                        >
                                            Login
                                        </Link>
                                    )}
                                    {loggedInUser.email ? (
                                        <Link
                                            className="nav-link mr-5 "
                                            onClick={() => setLoggedInUser({})}
                                        >
                                            {" "}
                                            Logout
                                        </Link>
                                    ) : (
                                        <p></p>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;