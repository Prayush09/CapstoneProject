// src/ReviewCard.js
import React from 'react';
import '../stylesheets/Home.css'

const ReviewCard = ({ review }) => {
    return (
        <div className="card review-card text-left m-3">
            <div className="card-body">
                <p>{review.text}</p>
                <h6>{review.author}</h6>
                <small>{review.position}</small>
                <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
        </div>
    );
};

export default ReviewCard;
