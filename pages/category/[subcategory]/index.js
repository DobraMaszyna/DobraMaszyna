import Aside from '../../../components/Aside/Index';
import Main from '../../../components/Main/Index';

import getProducts from '../../../lib/api/getProductList';

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
          subcategory: 'maszyny-do-szycia',
        },
      },
      {
        params: {
          subcategory: 'owerlocki',
        },
      },
      {
        params: {
          subcategory: 'renderki',
        },
      },
      {
        params: {
          subcategory: 'coverlocki',
        },
      },
      {
        params: {
          subcategory: 'hafciarki',
        },
      },
      {
        params: {
          subcategory: 'stebniowki',
        },
      },
      {
        params: {
          subcategory: 'owerlocki',
        },
      },
      {
        params: {
          subcategory: 'renderki',
        },
      },
      {
        params: {
          subcategory: 'specjalistyczne',
        },
      },
      {
        params: {
          subcategory: 'jedno-iglowe',
        },
      },
      {
        params: {
          subcategory: 'multihafciarki',
        },
      },
      {
        params: {
          subcategory: 'wieloiglowe',
        },
      },
      {
        params: {
          subcategory: 'wieloiglowicowe',
        },
      },
      {
        params: {
          subcategory: 'stoly-prasowalnicze',
        },
      },
      {
        params: {
          subcategory: 'wytwornice-pary',
        },
      },
      {
        params: {
          subcategory: 'termopodklejarki',
        },
      },
      {
        params: {
          subcategory: 'specjalistyczne',
        },
      },
      {
        params: {
          subcategory: 'igly',
        },
      },
      {
        params: {
          subcategory: 'stopki',
        },
      },
      {
        params: {
          subcategory: 'nici',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-haftowania',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-ploterow',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-rysowania-i-wyciniania',
        },
      },
      {
        params: {
          subcategory: 'do-maszyn-domowych',
        },
      },
      {
        params: {
          subcategory: 'do-maszyn-przemyslowych',
        },
      },
      {
        params: {
          subcategory: 'do-hafciarek/multi-hafciarek',
        },
      },
      {
        params: {
          subcategory: 'maszyny-do-szycia',
        },
      },
      {
        params: {
          subcategory: 'owerlocki',
        },
      },
      {
        params: {
          subcategory: 'hafciarki',
        },
      },
      {
        params: {
          subcategory: 'maszyny-przemyslowe',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const productList = await getProducts(
    context.params.subcategory,
    'category',
    20
  );

  return {
    props: { productList },
    revalidate: 60,
  };
};

export default CategoryPage;
