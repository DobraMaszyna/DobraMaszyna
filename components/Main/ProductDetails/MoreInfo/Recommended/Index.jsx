import styled from 'styled-components';
import Product from '../../../../../lib/components/Product';

const Recommended = ({ recommended }) => {
  return (
    <RecommendedStyled id='Polecane' className='card'>
      <h1>Polecane</h1>
      <ul>
        <Product
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <Product
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <Product
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <Product
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <Product
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <Product
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <Product
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <Product
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
        <Product
          productName='bernette Sew&Go 5'
          price={2222}
          productProducer='BERNINA AG'
        />
      </ul>
    </RecommendedStyled>
  );
};

const RecommendedStyled = styled.section`
  margin-inline: auto;
  margin-block: 50px;
  width: 100%;
  padding: 50px;
  padding-right: 0;
  background: white;
  overflow-x: scroll;

  h1 {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-around;
    margin-left: 50px;
  }
`;

export default Recommended;
