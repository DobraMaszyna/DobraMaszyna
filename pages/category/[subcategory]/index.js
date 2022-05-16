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
          category: 'maszyny-do-szycia',
        },
      },
      {
        params: {
          category: 'owerlocki',
        },
      },
      {
        params: {
          category: 'renderki',
        },
      },
      {
        params: {
          category: 'coverlocki',
        },
      },
      {
        params: {
          category: 'hafciarki',
        },
      },
      {
        params: {
          category: 'stebniowki',
        },
      },
      {
        params: {
          category: 'owerlocki',
        },
      },
      {
        params: {
          category: 'renderki',
        },
      },
      {
        params: {
          category: 'specjalistyczne',
        },
      },
      {
        params: {
          category: 'jedno-iglowe',
        },
      },
      {
        params: {
          category: 'multihafciarki',
        },
      },
      {
        params: {
          category: 'wieloiglowe',
        },
      },
      {
        params: {
          category: 'wieloiglowicowe',
        },
      },
      {
        params: {
          category: 'stoly-prasowalnicze',
        },
      },
      {
        params: {
          category: 'wytwornice-pary',
        },
      },
      {
        params: {
          category: 'termopodklejarki',
        },
      },
      {
        params: {
          category: 'specjalistyczne',
        },
      },
      {
        params: {
          category: 'igly',
        },
      },
      {
        params: {
          category: 'stopki',
        },
      },
      {
        params: {
          category: 'nici',
        },
      },
      {
        params: {
          category: 'dodatki-do-szycia',
        },
      },
      {
        params: {
          category: 'dodatki-do-haftowania',
        },
      },
      {
        params: {
          category: 'dodatki-do-ploterow',
        },
      },
      {
        params: {
          category: 'dodatki-do-rysowania-i-wyciniania',
        },
      },
      {
        params: {
          category: 'do-maszyn-domowych',
        },
      },
      {
        params: {
          category: 'do-maszyn-przemyslowych',
        },
      },
      {
        params: {
          category: 'do-hafciarek/multi-hafciarek',
        },
      },
      {
        params: {
          category: 'maszyny-do-szycia',
        },
      },
      {
        params: {
          category: 'owerlocki',
        },
      },
      {
        params: {
          category: 'hafciarki',
        },
      },
      {
        params: {
          category: 'maszyny-przemyslowe',
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
