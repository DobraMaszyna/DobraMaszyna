import clientPromise from '../../lib/mongodb';

const getProducts = async (category, type, count) => {
  const findParams = `{"category.${type}": "${category}"}`;

  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const products = db.collection('products');

  const data = await products
    .find(JSON.parse(findParams))
    .limit(count)
    .toArray();
  const productList = JSON.parse(JSON.stringify(data));

  console.log(findParams, data);

  return productList;
};

export default getProducts;
