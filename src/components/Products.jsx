import React from 'react';

const Products = () => (
  <div className="flex justify-center flex-wrap">
    <div className="bg-slate-200 hover:bg-red-400 p-2 m-4">
      <img src="./images/Jeans.jpg" alt="jeans" className="w-40" />
      <h2 className="px-2">Mens Jeans</h2>
      <p>
        <span className="px-2">Price</span>
        <span>£20.00</span>
      </p>
    </div>
    <div className="bg-slate-200 hover:bg-red-400 p-2 m-4">
      <img src="./images/Jeans.jpg" alt="jeans" className="w-40" />
      <h2 className="px-2">Mens Jeans</h2>
      <p>
        <span className="px-2">Price</span>
        <span>£20.00</span>
      </p>
    </div>
    <div className="bg-slate-200 hover:bg-red-400 p-2 m-4">
      <img src="./images/Jeans.jpg" alt="jeans" className="w-40" />
      <h2 className="px-2">Mens Jeans</h2>
      <p>
        <span className="px-2">Price</span>
        <span>£20.00</span>
      </p>
    </div>
  </div>
);

export default Products;
