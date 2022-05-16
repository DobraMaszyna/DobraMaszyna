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
          category: 'z-pojedynczym-transportem',
        },
      },
      {
        params: {
          category: 'z-podwojnym-transportem',
        },
      },
      {
        params: {
          category: 'z-trojnym-transportem',
        },
      },
      {
        params: {
          category: 'dwu-iglowe',
        },
      },
      {
        params: {
          category: '3-nitkowe',
        },
      },
      {
        params: {
          category: '4-nitkowe',
        },
      },
      {
        params: {
          category: '5-nitkowe',
        },
      },
      {
        params: {
          category: 'guzikarki',
        },
      },
      {
        params: {
          category: 'ryglowki',
        },
      },
      {
        params: {
          category: 'podszywarki',
        },
      },
      {
        params: {
          category: 'zygzaki',
        },
      },
      {
        params: {
          category: 'automaty-kieszeniowe',
        },
      },
      {
        params: {
          category: 'autolapy',
        },
      },
      {
        params: {
          category: 'lancuszkowe',
        },
      },
      {
        params: {
          category: 'ramieniowki',
        },
      },
      {
        params: {
          category: 'slupkowe',
        },
      },
      {
        params: {
          category: 'z-wytwornica-pary',
        },
      },
      {
        params: {
          category: 'bez-wytwornicy-pary',
        },
      },
      {
        params: {
          category: 'do-centralnej-pary',
        },
      },
      {
        params: {
          category: 'do-3-litrow',
        },
      },
      {
        params: {
          category: 'do-5-litrow',
        },
      },
      {
        params: {
          category: 'do-7-litrow',
        },
      },
      {
        params: {
          category: 'manualne',
        },
      },
      {
        params: {
          category: 'automatyczne',
        },
      },
      {
        params: {
          category: 'kabiny-obrotowe',
        },
      },
      {
        params: {
          category: 'manekiny',
        },
      },
      {
        params: {
          category: 'maszyny-do-skladania',
        },
      },
      {
        params: {
          category: 'zaprasowywanie-kieszeni',
        },
      },

      {
        params: {
          category: 'prasy',
        },
      },
      {
        params: {
          category: 'stoly-detaszerskie',
        },
      },
      {
        params: {
          category: 'toppery',
        },
      },
      {
        params: {
          category: 'do-maszyn-domowych',
        },
      },
      {
        params: {
          category: 'do-maszyny-przemyslowych',
        },
      },
      {
        params: {
          category: 'do-hafciarek',
        },
      },
      {
        params: {
          category: 'specjalistyczne',
        },
      },

      {
        params: {
          category: 'do-maszyn-domowych',
        },
      },
      {
        params: {
          category: 'do-maszyny-owerlokow/renderek/coverlokow domowych',
        },
      },
      {
        params: {
          category: 'do-hafciarek',
        },
      },
      {
        params: {
          category: 'do-maszyn-przemysłowych',
        },
      },
      {
        params: {
          category: 'do-maszyn-domowych',
        },
      },

      {
        params: {
          category: 'do-maszyn-owerlokow/renderek/coverlokow-domowych',
        },
      },
      {
        params: {
          category: 'do-hafciarek/multi-hafciarek',
        },
      },
      {
        params: {
          category: 'manekiny',
        },
      },
      {
        params: {
          category: 'moze-tarczowe',
        },
      },
      {
        params: {
          category: 'noze-pionowe',
        },
      },
      {
        params: {
          category: 'krzesla-szalnicze',
        },
      },

      {
        params: {
          category: 'lampki-szalnicze',
        },
      },
      {
        params: {
          category: 'stoliki-powiekszające-pole/obszar-pracy',
        },
      },
      {
        params: {
          category: 'szpulki',
        },
      },
      {
        params: {
          category: 'Szpilki',
        },
      },
      {
        params: {
          category: 'kredy-krawieckie',
        },
      },
      {
        params: {
          category: 'oleje',
        },
      },
      {
        params: {
          category: 'torby-i-walizki',
        },
      },
      {
        params: {
          category: 'pozostałe',
        },
      },
      {
        params: {
          category: 'tamborki',
        },
      },
      {
        params: {
          category: 'szpulki',
        },
      },
      {
        params: {
          category: 'programy-do-projektowania',
        },
      },
      {
        params: {
          category: 'stabilizatory,flizeliny,hydrofolie',
        },
      },

      {
        params: {
          category: 'pozostałe',
        },
      },
      {
        params: {
          category: 'uchwyty-pisaki-i-noże',
        },
      },
      {
        params: {
          category: 'maty',
        },
      },
      {
        params: {
          category: 'folie',
        },
      },
      {
        params: {
          category: 'pozostałe',
        },
      },

      {
        params: {
          category: 'kredy',
        },
      },
      {
        params: {
          category: 'pisaki-samo-znikające',
        },
      },
      {
        params: {
          category: 'nozyczki',
        },
      },
      {
        params: {
          category: 'noze-krazkowe',
        },
      },
      {
        params: {
          category: 'pozostałe',
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
