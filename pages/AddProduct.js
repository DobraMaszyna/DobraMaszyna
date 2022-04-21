import { useState } from 'react';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [producer, setProducer] = useState('BERNINA AG');
  const [category, setCategory] = useState('maszyny-domowe');
  const [subcategory, setSubcategory] = useState('');

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const addProduct = async (event) => {
    const body = new FormData();

    body.append('image', image);
    body.append('price', price);
    body.append('name', name);
    body.append('producer', producer);
    body.append('category', category);
    body.append('subcategory', subcategory);

    const response = await fetch('/api/admin/addProduct', {
      method: 'POST',
      body,
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

      <select value={producer} onChange={(e) => setProducer(e.target.value)}>
        <option value='BERNINA AG' selected='selected'>
          BERNINA AG
        </option>
        <option value='JUKI'>JUKI</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value='maszyny-domowe' selected='selected'>
          maszyny-domowe
        </option>
        <option value='maszyny-przemyslowe'>maszyny-przemyslowe</option>
        <option value='hafciarki'>hafciarki</option>
        <option value='prasowanie'>prasowanie</option>
        <option value='akcesoria'>akcesoria</option>
        <option value='czensci-zamienne'>czensci-zamienne</option>
        <option value='promocje'>promocje</option>
      </select>

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
