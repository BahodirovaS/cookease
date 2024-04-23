import '../assets/css/main.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
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
            scrollTop.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            });
        }
    })


    return (
        <>
            <section id="welcome" className="welcome d-flex align-items-center section-bg">
                <div className="container" >
                    <div className="row justify-content-between gy-5">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h2 data-aos="fade-up">Cook easily with<br />CookEase!</h2>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <NavLink to="search-recipes" className="btn-search-for-recipes">Search for Recipes!</NavLink>
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
                        <div className="col-lg-7 position-relative about-img" data-aos="fade-up" data-aos-delay="150">
                            <div className="join-us position-absolute">
                                <h4>Join to save hundreds of recipes!</h4>
                                <NavLink to="signup" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Create an Account</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
                            <div className="content ps-0 ps-lg-5">
                                <p>
                                    Welcome to our little corner of the culinary world! We're the app
                                    that's dedicated to making your cooking adventures more exciting,
                                    more delicious, and definitely more stress-free.
                                </p>
                                <p>
                                    We know that sometimes, finding the perfect recipe can be a bit of
                                    a puzzle. You've got a fridge full of ingredients, a rumbling tummy,
                                    and a hankering for something tasty. But where do you even begin?
                                </p>
                                <p>
                                    That's where we come in. With our nifty search function, you can
                                    easily find recipes that fit your exact needs. Want to make something
                                    vegan? No problem. Got a gluten intolerance? We've got you covered.
                                    Just type in your ingredients, select your preferences, and voila!
                                    You've got a whole bunch of recipes at your fingertips.
                                </p>
                                <p>
                                    So go ahead, explore, experiment, and enjoy. And if you create
                                    something truly amazing, don't forget to share it with us! We love
                                    seeing what our users cook up.
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

            </section>
            <button className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></button>
        </>
    );
}

export default MainPage;
