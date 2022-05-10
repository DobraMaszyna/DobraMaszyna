import styled from 'styled-components';

import { useSelector } from 'react-redux';

import SlideShow from '../components/Main/home/SlideShow';
import ProductListSection from '../lib/components/ProductListSection';

import clientPromise from '../lib/mongodb';

const Home = ({ recommendedProducts }) => {
  const viewedProducts = useSelector(
    (state) => state.recentlyViewed.recentlyViewed
  );

  return (
    <HomeStyled className='card'>
      <SlideShow />
      <ProductListSection title='Polecane' products={recommendedProducts} />
      <ProductListSection title='Ostatnio oglądane' products={viewedProducts} />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 75px 10vmin;
  overflow: hidden;
`;

export const getStaticProps = async () => {
  const client = await clientPromise;
  const db = await client.db('bmd_db');

  const products = db.collection('products');

  const data = await products.find({ recommended: true }).limit(9).toArray();

  const productList = JSON.parse(JSON.stringify(data));

  return { props: { recommendedProducts: productList } };
};

export default Home;
