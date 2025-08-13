import React from "react";
import { Link } from 'react-router-dom';
import nav from '../../assets/nav.png'; 

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top " style={{ backgroundColor: "#171728" }}>
                <div className="container-fluid">
                    <img src={nav} alt="" style={{ height: "50px", width: "auto" }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100 gap-2">
                            <li className="nav-item ">
                                <Link to="/about" className="text-white mt-5 text-decoration-none">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="text-white mt-5 text-decoration-none">Resource</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/intro" className="text-white mt-5 text-decoration-none">Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="text-white mt-5 text-decoration-none">Code Editor</Link>
                            </li>
                        </ul>
                        <div className="mx-auto gap-2 d-flex">
                            <Link to="/login" className="btn btn-outline-dark text-white text-decoration-none">Login</Link>
                            <Link to="/signup" className="btn bg-white text-dark text-decoration-none">SignUp</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;