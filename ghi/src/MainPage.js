import './assets/css/main.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function MainPage() {
    useEffect(() => {
        const scrollTop = document.querySelector('.scroll-top');
        if (scrollTop) {
            const togglescrollTop = function () {
                window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
            }
            window.addEventListener('load', togglescrollTop);
            document.addEventListener('scroll', togglescrollTop);
            scrollTop.addEventListener('click', window.scrollTo({
                top: 0,
                behavior: 'smooth'
            }));
        }
    })

    return (
        <>
            <section id="welcome" className="welcome d-flex align-items-center section-bg" style={{ backgroundImage: "url(https://heartstrokeprod.azureedge.net/-/media/images/articles/getty_1047798504_1920x1080.ashx?rev=10f9ef9ef9794e998b5cfe1bd3d60d85)" }}>
                <div className="container" >
                    <div className="row justify-content-between gy-5">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h2 className="text-white" data-aos="fade-up">Cook easily with<br />CookEase!</h2>
                            <p className="text-white" data-aos="fade-up" data-aos-delay="100" >No more wondering "What can I make with this!?"</p>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <a href="search-recipes" className="btn-search-for-recipes">Search for Recipes!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>About Us</h2>
                        <p>What is
                            <img src="https://i.imgur.com/O0EFl9W.png" className="img-fluid" alt="CookEase" style={{ width: '25%' }} />?
                        </p>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-7 position-relative about-img" style={{ backgroundImage: 'url(https://bootstrapmade.com/demo/templates/Yummy/assets/img/about-2.jpg)' }} data-aos="fade-up" data-aos-delay="150">
                            <div className="join-us position-absolute">
                                <h4>Join to save hundreds of recipes!</h4>
                                <a href="signup">Create an Account</a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
                            <div className="content ps-0 ps-lg-5">
                                <p >
                                    Welcome to our little corner of the culinary world! We're the app that's dedicated to making your cooking adventures more exciting, more delicious, and definitely more stress-free.
                                </p>
                                <ul>
                                    <li><i ></i> We know that sometimes, finding the perfect recipe can be a bit of a puzzle. You've got a fridge full of ingredients, a rumbling tummy, and a hankering for something tasty. But where do you even begin?</li>
                                    <li><i ></i> That's where we come in. With our nifty search function, you can easily find recipes that fit your exact needs. Want to make something vegan? No problem. Got a gluten intolerance? We've got you covered. Just type in your ingredients, select your preferences, and voila! You've got a whole bunch of recipes at your fingertips.</li>
                                </ul>
                                <p>
                                    So go ahead, explore, experiment, and enjoy. And if you create something truly amazing, don't forget to share it with us! We love seeing what our users cook up.
                                    Happy cooking!
                                </p>
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
                                    data-purecounter-end="2600"
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
                                    data-purecounter-end="5000"
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
                                    data-purecounter-end="600"
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
                                    data-purecounter-end="115"
                                    data-purecounter-duration="1"
                                >115K+</span>
                                <p>Menu Items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="developers" className="developers section-bg">
                <div className="container"data-aos="fade-up">
                    <div className="section-header">
                        <h2>Developers</h2>
                        <p>Our <span>Developers</span></p>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-2 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="developer-member">
                                <div className="member-img">
                                    <img src="https://media.licdn.com/dms/image/D5603AQEroIqWTEaRcA/profile-displayphoto-shrink_800_800/0/1665683162033?e=1683158400&v=beta&t=Gy71-N8tyzeVgCV_Wt4A85cUOwVOtB4lPP6cqrLxFY0" className="img-fluid" alt="" />
                                    <div className="social">
                                        <NavLink to="https://gitlab.com/sbahodirova"><i className="bi bi-github"></i></NavLink>
                                        <NavLink to="https://www.linkedin.com/in/sabinabahodirova/"><i className="bi bi-linkedin"></i></NavLink>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sabina Bahodirova</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="developer-member">
                                <div className="member-img">
                                    <img src="https://ca.slack-edge.com/T040E31DKM2-U0477JWLGBT-865f48ebb996-512" className="img-fluid" alt="" />
                                    <div className="social">
                                        <NavLink to="https://gitlab.com/ericd214"><i className="bi bi-github"></i></NavLink>
                                        <NavLink to="https://www.linkedin.com/in/ericdong214/"><i className="bi bi-linkedin"></i></NavLink>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Eric Dong</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="developer-member">
                                <div className="member-img">
                                    <img src="https://media.licdn.com/dms/image/D5603AQFDpVKxYRTGUg/profile-displayphoto-shrink_800_800/0/1664378159408?e=1683158400&v=beta&t=nrpptTTor0xPpkB0C5Y7924iuJK0WhGIEV9cqN5CiWU" className="img-fluid" alt="" />
                                    <div className="social">
                                        <NavLink to="https://gitlab.com/ben_hoag"><i className="bi bi-github"></i></NavLink>
                                        <NavLink to="https://www.linkedin.com/in/benjamin-hoag/"><i className="bi bi-linkedin"></i></NavLink>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Benjamin Hoag</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="developer-member">
                                <div className="member-img">
                                    <img src="https://media.licdn.com/dms/image/D4E03AQFUEPkARwkTDg/profile-displayphoto-shrink_800_800/0/1671496174672?e=1683158400&v=beta&t=l6Eo7fNbrSDxpqZGZcrLlPOZ3qBFEaDkc0qpYdlBokM" className="img-fluid" alt="" />
                                    <div className="social">
                                        <NavLink to="https://gitlab.com/braedensizemore"><i className="bi bi-github"></i></NavLink>
                                        <NavLink to="https://www.linkedin.com/in/braedensizemore/"><i className="bi bi-linkedin"></i></NavLink>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Braeden Sizemore</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="developer-member">
                                <div className="member-img">
                                    <img src="https://media.licdn.com/dms/image/C5603AQGJ1n_GtbbxgQ/profile-displayphoto-shrink_800_800/0/1664238671994?e=1683158400&v=beta&t=g92XLu-xklVD3bZQVHvW3vasQ15WeivuGVmQkOGYAMw" className="img-fluid" alt="" />
                                    <div className="social">
                                        <NavLink to="https://gitlab.com/jennifertovar2010"><i className="bi bi-github"></i></NavLink>
                                        <NavLink to="https://www.linkedin.com/in/jennifermtovar/"><i className="bi bi-linkedin"></i></NavLink>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Jennifer Tovar</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <button class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></button>
        </>
    );
}

export default MainPage;
