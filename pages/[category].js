import Aside from '../components/Aside/Index';
import Main from '../components/Main/Index';

import getProducts from '../lib/api/getProductList';

import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const CategoryPage = ({ productList }) => {
  const router = useRouter();
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);

  const { category } = router.query;

  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(async () => {
    if (searchQuery !== '') {
      const data = await fetch(
        `/api/getProductList?c=${category}&num=20&sq=${searchQuery}`
      );

      const response = await data.json();

      setSearchProducts(response);
    } else {
      setSearchProducts([]);
    }
  }, [searchQuery]);

  return (
    <>
      <Aside />
      <Main
        products={searchProducts.length !== 0 ? searchProducts : productList}
      />
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
  const productList = await getProducts(context.params.category, 20, '');

  return {
    props: { productList },
    revalidate: 60,
  };
};

export default CategoryPage;
