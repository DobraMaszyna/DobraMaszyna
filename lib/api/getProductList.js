import clientPromise from '../../lib/mongodb';

const getProducts = async (filters, count) => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const data = await db
    .collection('products')
    .find(
      filters !== null && {
        price: { $lte: filters.maxPrice },
        producer: { $in: filters.producers },
      }
    )
    .limit(count)
    .toArray();

  const productList = JSON.parse(JSON.stringify(data));

  return productList;
  // {
  //   producers: [],
  //   minPrice: 102,
  //   maxPrice: 100023.
  // }
};

export default getProducts;
