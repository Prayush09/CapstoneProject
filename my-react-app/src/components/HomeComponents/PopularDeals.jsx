// PropertyDeals.js
import React from 'react';
import PropertyCard from './PropertyCard.jsx';
import '../Home.css'
import defaulthouseimg from '../../assets/defaulthouse.jpg'

const PropertyDeals = () => {
    const properties = [
        {
            image: {defaulthouseimg},
            title: 'The Most Luxurious House',
            address: '4059 Waterview Texico, NM 88135',
            bedrooms: 3,
            bathrooms: 2,
            price: '$1,560/Month',
            isForSale: true,
        },
        {
            image: 'property2.jpg',
            title: 'Flint Hill Luxurious House',
            address: '470 Lost Creek Road, PA 19103',
            bedrooms: 4,
            bathrooms: 3,
            price: '$2,500/Month',
            isForSale: false,
        },
        {
            image: 'property3.jpg',
            title: 'The Skay View Farm House',
            address: '4033 Gaynor Piscataway, NJ 08854',
            bedrooms: 2,
            bathrooms: 2,
            price: '$1,600/Month',
            isForSale: true,
        },
        {
            image: 'property4.jpg',
            title: 'Modern Capital House',
            address: '208 Barrington Court, AR 72601',
            bedrooms: 5,
            bathrooms: 6,
            price: '$4,200/Month',
            isForSale: false,
        },
        {
            image: 'property5.jpg',
            title: 'A Modern Accentuates House',
            address: '1904 Drummond Newark, NJ 07102',
            bedrooms: 2,
            bathrooms: 2,
            price: '$2,100/Month',
            isForSale: false,
        },
        {
            image: 'property6.jpg',
            title: 'Spacious & Warm Flat',
            address: '4806 Public Works Drive, TN 37745',
            bedrooms: 1,
            bathrooms: 1,
            price: '$800/Month',
            isForSale: false,
        },
        {
            image: 'property7.jpg',
            title: 'Orchard Farm House',
            address: '3521 Jenna Lane Des, IA 50309',
            bedrooms: 3,
            bathrooms: 2,
            price: '$2,000/Month',
            isForSale: true,
        },
        {
            image: 'property8.jpg',
            title: 'Perum Kencana asri Flat',
            address: '1102 Mattson Street, OR 97205',
            bedrooms: 1,
            bathrooms: 1,
            price: '$1,560/Month',
            isForSale: true,
        },
    ];

    return (
        <section className="popular-property-deals py-5">
            <div className="container">
                <h2 className="section-title text-white text-center">
                    Popular <span className="text-primary">Property Deals</span>
                </h2>
                <div className="row mt-4">
                    {properties.map((property, index) => (
                        <PropertyCard 
                            key={index}
                            image={property.image}
                            title={property.title}
                            address={property.address}
                            bedrooms={property.bedrooms}
                            bathrooms={property.bathrooms}
                            price={property.price}
                            isForSale={property.isForSale}
                        />
                    ))}
                </div>
                <div className="text-center mt-4">
                    <a href="#" className="btn deals-button">View More</a>
                </div>
            </div>
        </section>
    );
};

export default PropertyDeals;
