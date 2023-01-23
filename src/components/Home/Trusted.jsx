import React from 'react';
import { SiHuawei, SiMotorola, SiXiaomi } from 'react-icons/si';
import { AiFillApple, AiFillGoogleCircle } from 'react-icons/ai';

const Trusted = () => (
  <div className="trusted-box">
    <h3 className="trust-h3">Trusted By 1000+ Companies</h3>
    <div className="customers">
      <div className="slide">
        <SiXiaomi className="icon2" />
      </div>
      <div className="slide">
        <AiFillApple className="icon2" />
      </div>
      <div className="slide">
        <SiMotorola className="icon2" />
      </div>
      <div className="slide">
        <AiFillGoogleCircle className="icon2" />
      </div>
      <div className="slide">
        <SiHuawei className="icon2" />
      </div>
    </div>
  </div>
);

export default Trusted;
