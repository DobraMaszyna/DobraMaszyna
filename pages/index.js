import styled from 'styled-components';

import ProducerList from '../components/Main/home/ProducerList';
import SlideShow from '../components/Main/home/SlideShow';
import getProducers from '../lib/api/getProducers';

const Home = ({ producersList }) => {
  return (
    <HomeStyled className='card'>
      <ProducerList producersList={producersList} />
      <div className='home-main'>
        <SlideShow />
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  display: flex;
  width: 98%;
  margin: auto;
  padding: 80px 250px;

  .home-main {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-inline: 7vmax;
    overflow-x: hidden;
  }
`;

export const getStaticProps = async () => {
  const producersList = await getProducers();
  console.log(producersList);

  return { props: { producersList }, revalidate: 60 };
};

export default Home;
