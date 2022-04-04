import clientPromise from '../../lib/mongodb';

const getProducts = async (category, subcategory, count) => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  console.log(category);

  const data = await db
    .collection('products')
    .find({
      category: category,
    })
    .limit(count)
    .toArray();

  const productList = JSON.parse(JSON.stringify(data));

  return productList;
};

export default getProducts;
