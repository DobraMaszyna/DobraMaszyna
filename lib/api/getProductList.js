import clientPromise from '../../lib/mongodb';

const getProducts = async (category, count, searchQuery) => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const products = db.collection('products');

  let mongoJSON = {};

  if (category) mongoJSON.category = { $eq: category };
  if (searchQuery) {
    mongoJSON.$or = [
      { name: { $regex: searchQuery, $options: 'i' } },
      { producer: { $regex: searchQuery, $options: 'i' } },
    ];
  }

  const data = await products.find(mongoJSON).limit(count).toArray();

  console.log(category, mongoJSON);

  const productList = JSON.parse(JSON.stringify(data));

  return productList;
};

export default getProducts;
