import { useState } from 'react';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [producer, setProducer] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const addProduct = () => {   
    const response = await fetch("/api/admin/addProduct", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name,
        producer,
        category,
        subcategory,
        price,
        image
      }
    });
  };

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
      <input
        type='text'
        placeholder='name'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='producer'
        onChange={(e) => setProducer(e.target.value)}
      />
      <input
        type='text'
        placeholder='category'
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type='text'
        placeholder='subcategory'
        onChange={(e) => setSubcategory(e.target.value)}
      />
      <input type='file' name='myImage' onChange={uploadToClient} />
      <input
        type='number'
        placeholder='price'
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addProduct}>Dodaj</button>
    </div>
  );
};

export default AddProduct;
