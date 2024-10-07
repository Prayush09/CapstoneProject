// Card.js
import React from 'react';
import PropTypes from 'prop-types';
import '../Home.css'; // Import your CSS file

const PropertyCard = ({ image, title, address, bedrooms, bathrooms, price, isForSale }) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card property-card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    {isForSale && <span className="badge bg-dark">For Sale</span>}
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-muted">{address}</p>
                    <div className="property-details">
                        <span><i className="bi bi-door-open"></i> {bedrooms} Bedroom</span>
                        <span><i className="bi bi-droplet"></i> {bathrooms} Bathroom</span>
                    </div>
                    <div className="price-view d-flex justify-content-between align-items-center mt-3">
                        <span className="price">{price}</span>
                        <a href="#" className="btn btn-outline-light btn-sm">View More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

PropertyCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    isForSale: PropTypes.bool
};

export default PropertyCard;
