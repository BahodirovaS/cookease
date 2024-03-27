import { NavLink } from "react-router-dom"

function Footer() {


    return (
        <>
        <footer id="footer" className="footer">
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
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
