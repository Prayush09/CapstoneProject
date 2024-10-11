import React from 'react';
import '../stylesheets/Home.css'
import hotelicon from '../../assets/hotel.png';
import houseicon from '../../assets/house.png';
import roomicon from '../../assets/room.png';
import warehouseicon from '../../assets/warehouse.png';
import apartmenticon from '../../assets/apartment.png';



const PropertyTypes = () => {
  return (
    <section className="property-types container text-center mt-5">
      <h2 className="text-primary">Property Types</h2>
      <div className="row mt-4">
        {/* Property Cards */}
        <div className="col-md-2 offset-md-1">
          <div className="property-card">
            <img src={houseicon} alt="Private House" className="property-icon" />
            <h5>Private House</h5>
            <p>360 Listings</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="property-card">
            <img src={apartmenticon} alt="Apartment" className="property-icon" />
            <h5>Apartment</h5>
            <p>265 Listings</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="property-card">
            <img src={hotelicon} alt="Exclusive Hotel" className="property-icon" />
            <h5>Exclusive Hotel</h5>
            <p>480 Listings</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="property-card">
            <img src={roomicon} alt="Private Room" className="property-icon" />
            <h5>Private Room</h5>
            <p>102 Listings</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="property-card">
            <img src={warehouseicon} alt="Warehouse" className="property-icon" />
            <h5>Warehouse</h5>
            <p>136 Listings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
