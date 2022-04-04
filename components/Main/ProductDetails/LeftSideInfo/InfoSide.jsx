import styled from 'styled-components';

const InfoSide = ({ productName, producer }) => {
  return (
    <InfoSideStyled>
      <h1 className='productName'>{productName}</h1>
      <p className='productProducer'>{producer}</p>
    </InfoSideStyled>
  );
};

const InfoSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 3% 0% 3% 15%;

  .productName {
    font-size: 29px;
  }

  .productProducer {
    font-size: 18px;
  }
`;

export default InfoSide;
