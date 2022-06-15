import getProducts from '../../lib/api/getProductList';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { c, type, num, f } = req.query;

    console.log(c, type, num);

    const result = await getProducts(c, type, num, f);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 400;
    res.end({ error: 'Bad request method' });
  }
};
