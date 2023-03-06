import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
            <header id="header" className="header d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
                        <img src="https://i.imgur.com/O0EFl9W.png" className="img-fluid" alt="CookEase" style={{ width: '100%' }} />
                    </a>
                    <a className="btn-book-a-table" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        Menu
                    </a>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <img src="https://i.imgur.com/O0EFl9W.png" className="img-fluid" alt="CookEase" style={{ width: '75%' }} />
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" style={{ width: '100%', maxWidth: '100vw' }}>
                            <div className="dropdown mt-3" style={{ width: '100%', maxWidth: '100vw' }}>
                                <div>
                                    <a className="dropdown-item" href="/">Home</a>
                                    <a className="dropdown-item" href="/search-recipes">Search Recipes</a>
                                    <a className="dropdown-item" href="/favorites-recipes">Users - Loved Recipes</a>
                                    <div>
                                        {currentUser ? (
                                            <a className="dropdown-item" onClick={() => logOut()}>Log Out</a>
                                        ) : (
                                            <>
                                                <a className="dropdown-item" href="signup">Sign Up</a>
                                                <a className="dropdown-item" href="login">Log In</a>
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
