import getProducts from '../../lib/api/getProductList';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { c, num, sq } = req.query;

    console.log(c, num, sq);

    const result = await getProducts(c, parseInt(num), sq);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 400;
    res.end({ error: 'Bad request method' });
  }
};
