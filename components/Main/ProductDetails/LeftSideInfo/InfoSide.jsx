import styled from 'styled-components';
import CustomButton from './CustomButton';

const InfoSide = ({
  productName,
  producer,
  productFooters,
  productType,
  productPower,
}) => {
  return (
    <InfoSideStyled>
      <h1 className='productName'>{productName}</h1>
      <p className='productProducer'>{producer}</p>
      <p className='footers'>{productFooters}</p>
      <p className='type'>{productType}</p>
      <p className='power'>{productPower}</p>
      <h3>Warianty</h3>
      <ul>
        <CustomButton BtnImg={'/img/test.jpg'} />
        <CustomButton BtnImg={'/img/test.jpg'} />
        <CustomButton BtnImg={'/img/test.jpg'} />
      </ul>
    </InfoSideStyled>
  );
};

const InfoSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 3% 0% 3% 15%;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
  }

  .productName {
    font-size: 29px;
  }

  .productProducer {
    font-size: 18px;
  }
`;

export default InfoSide;
