import React from 'react';

const AddProduct = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        height: '40vh',
        justifyContent: 'space-around',
      }}>
      <h1>Dodaj produkt</h1>
      <input type='text' placeholder='name' />
      <input type='text' placeholder='producer' />
      <input type='text' placeholder='category' />
      <input type='text' placeholder='subcategory' />
      <input type='file' placeholder='subcategory' />
      <input type='number' placeholder='price' />
      <input type='number' placeholder='pricebefore' />
      <button>Dodaj</button>
    </div>
  );
};

export default AddProduct;
