import './assets/css/main.css'

function MainPage() {
    return (
        <>
            <section id="hero" className="hero d-flex align-items-center section-bg" style={{ backgroundImage: "url(https://heartstrokeprod.azureedge.net/-/media/images/articles/getty_1047798504_1920x1080.ashx?rev=10f9ef9ef9794e998b5cfe1bd3d60d85)" }}>
                <div className="container" >
                    <div className="row justify-content-between gy-5">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h2 className="text-white" data-aos="fade-up">Cook easily with<br />CookEase!</h2>
                            <p className="text-white" data-aos="fade-up" data-aos-delay="100" >No more wondering "What can I make with this!?"</p>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <a href="search-recipes" className="btn-book-a-table">Search for Recipes!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>About Us</h2>
                        <p>What is <span>CookEase?</span></p>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-7 position-relative about-img" style={{ backgroundImage: 'url(https://bootstrapmade.com/demo/templates/Yummy/assets/img/about-2.jpg)' }} data-aos="fade-up" data-aos-delay="150">
                            <div className="call-us position-absolute">
                                <h4>Join to save hundreds of recipes!</h4>
                                <a href="signup">Create an Account</a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
                            <div className="content ps-0 ps-lg-5">
                                <p className="bi bi-check2-all">
                                    Welcome to our little corner of the culinary world! We're the app that's dedicated to making your cooking adventures more exciting, more delicious, and definitely more stress-free.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check2-all"></i> We know that sometimes, finding the perfect recipe can be a bit of a puzzle. You've got a fridge full of ingredients, a rumbling tummy, and a hankering for something tasty. But where do you even begin?</li>
                                    <li><i className="bi bi-check2-all"></i> That's where we come in. With our nifty search function, you can easily find recipes that fit your exact needs. Want to make something vegan? No problem. Got a gluten intolerance? We've got you covered. Just type in your ingredients, select your preferences, and voila! You've got a whole bunch of recipes at your fingertips.</li>
                                </ul>
                                <p>
                                    So go ahead, explore, experiment, and enjoy. And if you create something truly amazing, don't forget to share it with us! We love seeing what our users cook up.
                                    Happy cooking!
                                </p>
                                <div className="position-relative mt-4">
                                    <img src="assets/img/about-2.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="stats-counter" className="stats-counter">
                <div className="container" data-aos="zoom-out">
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    className="purecounter"
                                    data-purecounter-start="0"
                                    data-purecounter-end="232"
                                    data-purecounter-duration="1"
                                >2,600+</span>
                                <p>Ingredients</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    className="purecounter"
                                    data-purecounter-start="0"
                                    data-purecounter-end="521"
                                    data-purecounter-duration="1"
                                >5,000+</span>
                                <p>Recipes</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    className="purecounter"
                                    data-purecounter-start="0"
                                    data-purecounter-end="1453"
                                    data-purecounter-duration="1"
                                >600K+</span>
                                <p>Products</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    className="purecounter"
                                    data-purecounter-start="0"
                                    data-purecounter-end="32"
                                    data-purecounter-duration="1"
                                >115K+</span>
                                <p>Menu Items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="chefs" className="chefs section-bg">
                <div className="container"data-aos="fade-up">
                    <div className="section-header">
                        <h2>Developers</h2>
                        <p>Our <span>Developers</span></p>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="chef-member">
                                <div className="member-img">
                                    <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sabina Bahodirova</h4>
                                    <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="chef-member">
                                <div className="member-img">
                                    <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Eric Dong</h4>
                                    <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="chef-member">
                                <div className="member-img">
                                    <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Benjamin Hoag</h4>
                                    <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="chef-member">
                                <div className="member-img">
                                    <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Braeden Sizemore</h4>
                                    <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="chef-member">
                                <div className="member-img">
                                    <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Jennifer Tovar</h4>
                                    <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainPage;
