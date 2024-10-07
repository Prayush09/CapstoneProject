// AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Home.css'

const AboutUs = () => {
    return (
        <section className="about-us-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-left text-decoration-underline">
                        <h2 className="section-title">About <span className="text-primary">Us</span></h2>
                    </div>
                </div>

                {/* Accordion Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="image-box">
                            <img src="https://via.placeholder.com/500" alt="Building Image" className="img-fluid rounded" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="sub-title">We Are The Best <span className="text-primary">Roommate Finding Website!</span></h3>
                        <p className="description">
                            Our users have a 36% higher chance of finding a compatable roommate, compared to other websites!
                        </p>

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button 
                                        className="accordion-button" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#collapseOne" 
                                        aria-expanded="true" 
                                        aria-controls="collapseOne"
                                    >
                                        Why should I use this website?
                                    </button>
                                </h2>
                                <div 
                                    id="collapseOne" 
                                    className="accordion-collapse collapse show" 
                                    aria-labelledby="headingOne" 
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        We use our proprietary "Buddy Match" AI to suggest you potential roommates with the highest compatability.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button 
                                        className="accordion-button collapsed" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#collapseTwo" 
                                        aria-expanded="false" 
                                        aria-controls="collapseTwo"
                                    >
                                        What can I do on your website?
                                    </button>
                                </h2>
                                <div 
                                    id="collapseTwo" 
                                    className="accordion-collapse collapse" 
                                    aria-labelledby="headingTwo" 
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Users are allowed to find roommates, property listings and even put themselves up on the website to find potential roommates!
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button 
                                        className="accordion-button collapsed" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#collapseThree" 
                                        aria-expanded="false" 
                                        aria-controls="collapseThree"
                                    >
                                        Sed ut perspiciatis unde omnis?
                                    </button>
                                </h2>
                                <div 
                                    id="collapseThree" 
                                    className="accordion-collapse collapse" 
                                    aria-labelledby="headingThree" 
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
