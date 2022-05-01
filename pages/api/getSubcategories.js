export default async (req, res) => {
  if (req.method === 'GET') {
    const { category } = req.query;

    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 400;
    res.end({ error: 'Bad request method' });
  }
};
