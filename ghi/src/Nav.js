import './assets/css/main.css'
import { useNavigate, NavLink } from 'react-router-dom';
import { useLogOutMutation, useGetTokenQuery } from './auth/authApi';
import { useEffect, useRef } from "react";


function Nav() {
    const navigate = useNavigate();
    const [logOut, { data }] = useLogOutMutation();
    const { data: currentUser } = useGetTokenQuery()
    const offcanvasRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
                offcanvasRef.current.classList.remove('show');
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [offcanvasRef]);

    useEffect(() => {
        if (data) {
            navigate("/");
            window.location.reload();
        }
    }, [data, navigate]);

    return (
        <>
            <header id="header" className="header navigation d-flex align-items-center">
                <div className="container justify-content-between">
                    <NavLink to="/" className="logo d-flex  me-auto me-lg-0">
                        <img src="https://i.imgur.com/O0EFl9W.png" className="img-fluid logo-image" alt="CookEase" style={{ maxWidth: '130px' }} />
                    </NavLink>
                    <NavLink className="btn-search-for-recipes" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        Menu
                    </NavLink>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: '300px' }}>
                        <div className="offcanvas-header">
                            <img src="https://i.imgur.com/O0EFl9W.png" className="img-fluid" alt="CookEase" style={{ maxWidth: '150px' }} />
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" style={{ width: '100%', maxWidth: '100vw' }}>
                            <div className="dropdown mt-3" style={{ width: '100%', maxWidth: '100vw' }}>
                                <div>
                                    <NavLink className="dropdown-item" to="/" onClick={() => offcanvasRef.current.classList.remove('show')}>Home</NavLink>
                                    <NavLink className="dropdown-item" to="./search-recipes" onClick={() => offcanvasRef.current.classList.remove('show')}>Search Recipes</NavLink>
                                    <NavLink className="dropdown-item" to="favorites-recipes" onClick={() => offcanvasRef.current.classList.remove('show')}>Users - Loved Recipes</NavLink>
                                    <div>
                                        {currentUser ? (
                                            <button className="dropdown-item" onClick={() => logOut()}>Log Out</button>
                                        ) : (
                                            <>
                                                <NavLink className="dropdown-item" to="/signup" onClick={() => offcanvasRef.current.classList.remove('show')}>Sign Up</NavLink>
                                                <NavLink className="dropdown-item" to="/login" onClick={() => offcanvasRef.current.classList.remove('show')}>Log In</NavLink>
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
