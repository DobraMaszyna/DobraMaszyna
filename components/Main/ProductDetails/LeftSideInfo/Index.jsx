import styled from 'styled-components';
import InfoSide from './InfoSide';

const LeftSideInfo = ({ productName, producer, params }) => {
  return (
    <LeftSideInfoStyled className='card'>
      <img
        className='productImage'
        src={`/productImages/${productName}.jpeg`}
        alt=''
      />
      <InfoSide productName={productName} params={params} producer={producer} />
    </LeftSideInfoStyled>
  );
};

const LeftSideInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 7%;
  margin-inline: auto;

  .productImage {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 768px) {
    width: 70%;
    margin: 0;
    flex-direction: row;

    .productImage {
      width: 53%;
      object-fit: contain;
    }
  }
`;

export default LeftSideInfo;
