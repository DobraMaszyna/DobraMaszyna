import styled from 'styled-components';
import InfoSide from './InfoSide';

const LeftSideInfo = ({ productName, producer }) => {
  return (
    <LeftSideInfoStyled className='card'>
      <img src='/img/test.jpg' alt='' />
      <InfoSide productName={productName} producer={producer} />
    </LeftSideInfoStyled>
  );
};

const LeftSideInfoStyled = styled.div`
  display: flex;
  width: 70%;
  padding: 7%;

  img {
    width: 53%;
  }
`;

export default LeftSideInfo;
