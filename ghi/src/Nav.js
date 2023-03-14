import { useNavigate, NavLink } from 'react-router-dom';
import { useLogOutMutation, useGetTokenQuery } from './auth/authApi';
import { useEffect } from "react";


function Nav() {
    const navigate = useNavigate();
    const [logOut, { data }] = useLogOutMutation();
    const { data: currentUser } = useGetTokenQuery()

    useEffect(() => {
        if (data) {
            navigate("/");
        }
    }, [data, navigate]);

    return (
        <>
            <header id="header" className="header navigation d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <NavLink to="/" className="logo d-flex align-items-center me-auto me-lg-0">
                        <img src="https://i.imgur.com/O0EFl9W.png" className="img-fluid logo-image" alt="CookEase" style={{ width: '100%' }} />
                    </NavLink>
                    <NavLink className="btn-search-for-recipes" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        Menu
                    </NavLink>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <img src="https://i.imgur.com/O0EFl9W.png" className="img-fluid" alt="CookEase" style={{ width: '75%' }} />
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" style={{ width: '100%', maxWidth: '100vw' }}>
                            <div className="dropdown mt-3" style={{ width: '100%', maxWidth: '100vw' }}>
                                <div>
                                    <NavLink className="dropdown-item" to="/">Home</NavLink>
                                    <NavLink className="dropdown-item" to="search-recipes">Search Recipes</NavLink>
                                    <NavLink className="dropdown-item" to="favorites-recipes">Users - Loved Recipes</NavLink>
                                    <div>
                                        {currentUser ? (
                                            <button className="dropdown-item" onClick={() => logOut()}>Log Out</button>
                                        ) : (
                                            <>
                                                <NavLink className="dropdown-item" to="signup" >Sign Up</NavLink>
                                                <NavLink className="dropdown-item" to="login">Log In</NavLink>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Nav;
