// src/Reviews.js
import React from 'react';
import ReviewCard from './ReviewCard';
import '../Home.css'

const Reviews = () => {
    const reviews = [
        {
            text: "Maecenas eu odio ante. Lorem ipsum dolor sit amet.",
            author: "Christopher J. Larson",
            position: "Service Manager"
        },
        {
            text: "Aenean vulputate eleifend tellus. Aliquam lorem ante.",
            author: "Derrick P. Boudreaux",
            position: "Web Developer"
        },
        {
            text: "Cras ultricies turpis at pretium dignissim.",
            author: "Stanley S. Nesbitt",
            position: "Company Founder"
        },
    ];

    return (
        <div style={{ color: 'white' }}>
            <section className="reviews-section">
                <div className="container text-center">
                    {/* Stats Section */}
                    <div className="row mb-5" style={{ backgroundColor: 'rgb(106, 17, 203)' }}>
                        <div className="col-md-3">
                            <h1>10.5k</h1>
                            <p>Premium Property</p>
                        </div>
                        <div className="col-md-3">
                            <h1>8600+</h1>
                            <p>Happy Customers</p>
                        </div>
                        <div className="col-md-3">
                            <h1>1200</h1>
                            <p>Award Winning</p>
                        </div>
                        <div className="col-md-3">
                            <h1>750</h1>
                            <p>Years Experience</p>
                        </div>
                    </div>

                    {/* Client Reviews */}
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-4">What Our <span className="text-primary">Clients Say</span></h2>
                            {/* Review Cards */}
                            <div className="d-flex justify-content-center">
                                {reviews.map((review, index) => (
                                    <ReviewCard key={index} review={review} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Subscription Box */}
                    <div className="row mt-5">
                        <div className="col-md-12 subscribe-box">
                            <h3>Subscribe to get the latest news for you!</h3>
                            <form className="d-flex justify-content-center">
                                <input type="email" className="form-control w-50" placeholder="Enter your email..." />
                                <button type="submit" className="btn subscribe-button ml-3">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-section text-light text-center final-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <ul>
                                <li>How it Works</li>
                                <li>Our Story</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Support & Summary</h5>
                            <ul>
                                <li>Privacy & Policy</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>Email: yourmail@gmail.com</p>
                            <p>Phone: +123 456 7890</p>
                        </div>
                    </div>
                </div>
                <p className="mt-4">Copyright &copy; 2022 Homeey</p>
            </footer>
        </div>
    );
};

export default Reviews;
