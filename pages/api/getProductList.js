import getProducts from '../../lib/api/getProductList';

export default async (req, res) => {
  const result = await getProducts(
    req.category,
    req.subcategory,
    req.body.filters,
    req.body.count
  );

  console.log(result, req);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result));
};
