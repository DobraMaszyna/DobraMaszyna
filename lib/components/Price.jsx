import React from "react";

const Price = ({ priceBefore, price }) => {
  return (
    <div className="PriceContainer">
      <p>
        {priceBefore}
        {priceBefore % 1 === 0 && ".00"} zł
      </p>
      <h1>
        {price}
        {price % 1 === 0 && ".00"} zł
      </h1>
    </div>
  );
};

export default Price;
