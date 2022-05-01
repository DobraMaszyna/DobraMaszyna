import getProductInfo from '../../lib/api/getProductInfo';

export default async (req, res) => {
  const { productId } = req.query;

  try {
    const productInfo = await getProductInfo(productId);

    res.status(200).json(productInfo);
  } catch {
    res.status(400).json("Product does't exit");
  }
};
