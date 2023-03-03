function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row gy">
                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <i className="bi bi-geo-alt icon"></i>
                        <div>
                            <h4>API</h4>
                            <a href="https://spoonacular.com/food-api">
                                Link
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <i className="bi bi-telephone icon"></i>
                        <div>
                            <h4>Contact</h4>
                            <p>
                                <strong>Email:</strong> mail@spoonacular.com<br />
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <i className="bi bi-clock icon"></i>
                        <div>
                            <h4>Opening Hours</h4>
                            <p>
                                <strong>Mon-Sun: 8AM</strong> - 5PM
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Follow Us</h4>
                        <div className="social-links d-flex">
                            <a href="https://twitter.com/spoonacular" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.facebook.com/spoonacular" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="http://pinterest.com/spoonacular/" className="instagram"><i className="bi bi-pinterest"></i></a>
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
                    Designed by <a href="https://gitlab.com/guardians-of-the-repository/cookease">Guardians of the Repository</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
