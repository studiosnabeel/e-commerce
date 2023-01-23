import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const Services = () => (
  <div className="services-container">
    <div className="services-sub-container">
      <div className="services-card">
        <div className="card1">
          <TbTruckDelivery className="icon" />
          <h3 className="services-h3">Super Fast and Free delivery</h3>
        </div>
      </div>

      <div className="service-card">
        <div className="cards2">
          <div className="card2a">
            <MdSecurity className="icon" />
            <h3 className="services-h3">Non-contact Shipping</h3>
          </div>
        </div>
        <div className="cards2">
          <div className="card2b">
            <GiReceiveMoney className="icon" />
            <h3 className="services-h3">Money-back Guaranteed</h3>
          </div>
        </div>
      </div>

      <div className="services-card">
        <div className="card3">
          <RiSecurePaymentLine className="icon" />
          <h3 className="services-h3">Super Secure Payment System</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
