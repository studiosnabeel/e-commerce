import React from 'react';
import Jeans from '../Assets/Jeans.jpg';

const Products = () => (
  <div className="flex m-4 justify-center flex-wrap">
    <div className="bg-red-200 p-2 m-4">
      <img src={Jeans} alt="jeans" className="w-40" />
      <h2 className="px-2">Mens Jeans</h2>
      <p>
        <span className="px-2">Price</span>
        <span>£20.00</span>
      </p>
    </div>
    <div className="bg-red-200 p-2 m-4">
      <img src={Jeans} alt="jeans" className="w-40" />
      <h2 className="px-2">Mens Jeans</h2>
      <p>
        <span className="px-2">Price</span>
        <span>£20.00</span>
      </p>
    </div>
    <div className="bg-red-200 p-2 m-4">
      <img src={Jeans} alt="jeans" className="w-40" />
      <h2 className="px-2">Mens Jeans</h2>
      <p>
        <span className="px-2">Price</span>
        <span>£20.00</span>
      </p>
    </div>
  </div>
);

export default Products;
