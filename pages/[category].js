import Aside from "../components/Aside/Index";
import Main from "../components/Main/Index";

import getProducts from "../lib/api/getProductList";

const CategoryPage = ({ productList }) => {
  return (
    <>
      <Aside />
      <Main products={productList} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const productList = await getProducts(
      "products",
      { maxPrice: 10000, producers: ["BERNINA AG"] },
      20
    );

    return {
      props: { isConnected: true, productList },
    };
  } catch (e) {
    console.log("test");
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default CategoryPage;
