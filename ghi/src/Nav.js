import './assets/css/main.css';
import { useNavigate, NavLink } from 'react-router-dom';
import { useLogOutMutation, useGetTokenQuery } from './auth/authApi';
import { useEffect } from "react";

function Nav() {
    const navigate = useNavigate();
    const [logOut, { data }] = useLogOutMutation();
    const { data: currentUser } = useGetTokenQuery();

    useEffect(() => {
        if (data) {
            navigate("/");
            window.location.reload();
        }
    }, [data, navigate]);

    return (
        <header id="header" className="header navigation d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <NavLink to="/" className="logo d-flex me-auto me-lg-0">
                    <img src="https://i.imgur.com/O0EFl9W.png" className="img-fluid logo-image" alt="CookEase" style={{ maxWidth: '130px' }} />
                </NavLink>
                <nav className="navbar navbar-expand-lg">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" end>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/search-recipes">Search Recipes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/favorites-recipes">Users - Loved Recipes</NavLink>
                            </li>
                            {!currentUser ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Log In</NavLink>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" onClick={() => logOut()}>Log Out</button>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
