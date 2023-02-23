import { NavLink, useLocation } from 'react-router-dom';


function Nav() {
    const location = useLocation()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
            <div className="container-fluid">
            <NavLink className="navbar-brand fs-3" to="/">CookEase</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="dropdown">
                    <button className="btn text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                        <NavLink className="dropdown-item" aria-current="page" to="signup">SignUp</NavLink>
                        </li>
                        <li>
                        <NavLink className="dropdown-item" aria-current="page" to="login">LogIn</NavLink>
                        </li>
                    </ul>
                </div>
                </ul>
                </div>
            </div>
        </nav>
        )
    }

export default Nav;