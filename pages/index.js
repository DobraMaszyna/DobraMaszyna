import styled from 'styled-components';

import ProducerList from '../components/Main/home/ProducerList';
import getProducers from '../lib/api/getProducers';

const Home = ({ producersList }) => {
  return (
    <HomeStyled className='card'>
      <ProducerList producersList={producersList} />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  width: 98%;
  margin: auto;
  padding: 50px 70px;
`;

export const getStaticProps = async () => {
  const producersList = await getProducers();
  console.log(producersList);

  return { props: { producersList }, revalidate: 60 };
};

export default Home;
