import Aside from '../../../../components/Aside/Index';
import Main from '../../../../components/Main/Index';

import getProducts from '../../../../lib/api/getProductList';

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
          subcategory: 'stebnowki',
          childSubcategory: 'z-pojedynczym-transportem',
        },
      },
      {
        params: {
          subcategory: 'stebnowki',
          childSubcategory: 'z-podwojnym-transportem',
        },
      },
      {
        params: {
          subcategory: 'stebnowki',
          childSubcategory: 'z-trojnym-transportem',
        },
      },
      {
        params: {
          subcategory: 'stebnowki',
          childSubcategory: '2-iglowe',
        },
      },
      {
        params: {
          subcategory: 'owerloki',
          childSubcategory: '3-nitkowe',
        },
      },
      {
        params: {
          subcategory: 'owerloki',
          childSubcategory: '4-nitkowe',
        },
      },
      {
        params: {
          subcategory: 'owerloki',
          childSubcategory: '5-nitkowe',
        },
      },
      {
        params: {
          subcategory: 'specialistyczne',
          childSubcategory: 'guzikarki',
        },
      },
      {
        params: {
          subcategory: 'specialistyczne',
          childSubcategory: 'ryglowki',
        },
      },
      {
        params: {
          subcategory: 'specialistyczne',
          childSubcategory: 'podszywarki',
        },
      },
      {
        params: {
          subcategory: 'specialistyczne',
          childSubcategory: 'zygzaki',
        },
      },
      {
        params: {
          subcategory: 'specialistyczne',
          childSubcategory: 'automaty-kieszeniowe',
        },
      },
      {
        params: {
          subcategory: 'specialistyczne',
          childSubcategory: 'autolapy',
        },
      },
      {
        params: {
          subcategory: 'specialistyczne',
          childSubcategory: 'lancuszkowe',
        },
      },
      {
        params: {
          subcategory: 'specialistyczne',
          childSubcategory: 'ramieniowki',
        },
      },
      {
        params: {
          subcategory: 'specialistyczne',
          childSubcategory: 'slupkowe',
        },
      },
      {
        params: {
          subcategory: 'stoly-prasowalnicze',
          childSubcategory: 'z-wytwornica-pary',
        },
      },
      {
        params: {
          subcategory: 'stoly-prasowalnicze',
          childSubcategory: 'bez-wytwornicy-pary',
        },
      },
      {
        params: {
          subcategory: 'stoly-prasowalnicze',
          childSubcategory: 'do-centralnej-pary',
        },
      },
      {
        params: {
          subcategory: 'wytwornice-pary',
          childSubcategory: 'do-3-litrow',
        },
      },
      {
        params: {
          subcategory: 'wytwornice-pary',
          childSubcategory: 'do-5-litrow',
        },
      },
      {
        params: {
          subcategory: 'wytwornice-pary',
          childSubcategory: 'do-7-litrow',
        },
      },
      {
        params: {
          subcategory: 'termopodklejarki',
          childSubcategory: 'manualne',
        },
      },
      {
        params: {
          subcategory: 'termopodklejarki',
          childSubcategory: 'automatyczne',
        },
      },
      {
        params: {
          subcategory: 'specjalistyczne',
          childSubcategory: 'kabiny-obrotowe',
        },
      },
      {
        params: {
          subcategory: 'specjalistyczne',
          childSubcategory: 'manekiny',
        },
      },
      {
        params: {
          subcategory: 'specjalistyczne',
          childSubcategory: 'maszyny-do-skladania',
        },
      },
      {
        params: {
          subcategory: 'specjalistyczne',
          childSubcategory: 'zaprasowywanie-kieszeni',
        },
      },

      {
        params: {
          subcategory: 'specjalistyczne',
          childSubcategory: 'prasy',
        },
      },
      {
        params: {
          subcategory: 'specjalistyczne',
          childSubcategory: 'stoly-detaszerskie',
        },
      },
      {
        params: {
          subcategory: 'specjalistyczne',
          childSubcategory: 'toppery',
        },
      },
      {
        params: {
          subcategory: 'igly',
          childSubcategory: 'do-maszyn-domowych',
        },
      },
      {
        params: {
          subcategory: 'igly',
          childSubcategory: 'do-maszyny-przemyslowych',
        },
      },
      {
        params: {
          subcategory: 'igly',
          childSubcategory: 'do-hafciarek',
        },
      },
      {
        params: {
          subcategory: 'igly',
          childSubcategory: 'specjalistyczne',
        },
      },

      {
        params: {
          subcategory: 'stopki',
          childSubcategory: 'do-maszyn-domowych',
        },
      },
      {
        params: {
          subcategory: 'stopki',
          childSubcategory: 'do-maszyny-owerlokow/renderek/coverlokow domowych',
        },
      },
      {
        params: {
          subcategory: 'stopki',
          childSubcategory: 'do-hafciarek',
        },
      },
      {
        params: {
          subcategory: 'stopki',
          childSubcategory: 'do-maszyn-przemysłowych',
        },
      },
      {
        params: {
          subcategory: 'nici',
          childSubcategory: 'do-maszyn-domowych',
        },
      },

      {
        params: {
          subcategory: 'nici',
          childSubcategory: 'do-maszyn-owerlokow/renderek/coverlokow-domowych',
        },
      },
      {
        params: {
          subcategory: 'nici',
          childSubcategory: 'do-hafciarek/multi-hafciarek',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'manekiny',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'noze-tarczowe',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'noze-pionowe',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'krzesla-szalnicze',
        },
      },

      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'lampki-szalnicze',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'stoliki-powiekszające-pole/obszar-pracy',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'szpulki',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'Szpilki',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'kredy-krawieckie',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'oleje',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'torby-i-walizki',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-szycia',
          childSubcategory: 'pozostałe',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-haftowania',
          childSubcategory: 'tamborki',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-haftowania',
          childSubcategory: 'szpulki',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-haftowania',
          childSubcategory: 'programy-do-projektowania',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-haftowania',
          childSubcategory: 'stabilizatory,flizeliny,hydrofolie',
        },
      },

      {
        params: {
          subcategory: 'dodatki-do-haftowania',
          childSubcategory: 'pozostałe',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-ploterow',
          childSubcategory: 'uchwyty-pisaki-i-noże',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-ploterow',
          childSubcategory: 'maty',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-ploterow',
          childSubcategory: 'folie',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-ploterow',
          childSubcategory: 'pozostałe',
        },
      },

      {
        params: {
          subcategory: 'dodatki-do-rysowania-i-wycinania',
          childSubcategory: 'kredy',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-rysowania-i-wycinania',
          childSubcategory: 'pisaki-samo-znikające',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-rysowania-i-wycinania',
          childSubcategory: 'nozyczki',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-rysowania-i-wycinania',
          childSubcategory: 'noze-krazkowe',
        },
      },
      {
        params: {
          subcategory: 'dodatki-do-rysowania-i-wycinania',
          childSubcategory: 'pozostale',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  console.log(context.params);

  const productList = await getProducts(
    context.params.childSubcategory,
    'child',
    20
  );

  return {
    props: { productList },
    revalidate: 60,
  };
};

export default CategoryPage;
