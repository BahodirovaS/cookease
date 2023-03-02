import './assets/css/main.css'


function MainPage() {
    return (
        <section id="hero" className="hero d-flex align-items-center section-bg" style={{ backgroundImage: "url(https://heartstrokeprod.azureedge.net/-/media/images/articles/getty_1047798504_1920x1080.ashx?rev=10f9ef9ef9794e998b5cfe1bd3d60d85)" }}>
            <div className="container" >
                <div className="row justify-content-between gy-5">
                    <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                        <h2 className="text-white" data-aos="fade-up">Cook easily with<br />CookEase!</h2>
                        <p className="text-white" data-aos="fade-up" data-aos-delay="100" >No more wondering "What can I make with this!?"</p>
                        <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                            <a href="search-recipes" className="btn-book-a-table">Search for Recipes!</a>
                            <a href="login" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Login</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainPage;
