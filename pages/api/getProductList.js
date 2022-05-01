import getProducts from '../../lib/api/getProductList';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { c, num } = req.query;

    console.log(c, num);

    const result = await getProducts(c, parseInt(num));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 400;
    res.end({ error: 'Bad request method' });
  }
};
