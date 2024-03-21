import { NavLink } from "react-router-dom"

function Footer() {


    return (
        <>
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row justify-content-center gy">
                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <div>
                            <h4>API</h4>
                            <NavLink to="https://spoonacular.com/food-api">
                                Link
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <div>
                            <h4>CookEase GitLab</h4>
                            <div className="social-links d-flex">
                                <NavLink to="http://gitlab.com/guardians-of-the-repository/cookease" className="github"><i className="bi bi-github"></i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Follow Spoonacular</h4>
                        <div className="social-links d-flex">
                            <NavLink to="https://twitter.com/spoonacular" className="twitter"><i className="bi bi-twitter"></i></NavLink>
                            <NavLink to="https://www.facebook.com/spoonacular" className="facebook"><i className="bi bi-facebook"></i></NavLink>
                            <NavLink to="http://pinterest.com/spoonacular/" className="instagram"><i className="bi bi-pinterest"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Copyright
                    <strong><span> CookEase</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/ */}
                    Designed by <NavLink to="https://gitlab.com/guardians-of-the-repository/cookease">Guardians of the Repository</NavLink>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
