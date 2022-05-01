import Aside from '../components/Aside/Index';
import Main from '../components/Main/Index';

import getProducts from '../lib/api/getProductList';

const CategoryPage = ({ productList }) => {
  return (
    <>
      <Aside />
      <Main products={productList} />
    </>
  );
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          category: 'maszyny-domowe',
        },
      },
      {
        params: {
          category: 'maszyny-przemyslowe',
        },
      },
      {
        params: {
          category: 'hafciarki',
        },
      },
      {
        params: {
          category: 'prasowanie',
        },
      },
      {
        params: {
          category: 'akcesoria',
        },
      },
      {
        params: {
          category: 'czesci-zamienne',
        },
      },
      {
        params: {
          category: 'promocje',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const productList = await getProducts(context.params.category, 20);

  return {
    props: { productList },
    revalidate: 60,
  };
};

export default CategoryPage;
