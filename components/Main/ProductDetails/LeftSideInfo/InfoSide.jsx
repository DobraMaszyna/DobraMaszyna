import styled from 'styled-components';
import Params from '../MoreInfo/Params/Index';
import CustomButton from './CustomButton';

const InfoSide = ({ productName, producer, params }) => {
  return (
    <InfoSideStyled>
      <h1 className='productName'>{productName}</h1>
      <p className='productProducer'>{producer}</p>

      <div className='props-shortcut'>
        <Params params={params} short={true} />
        <a href='#Parametry'>Zobacz pełne paramentry</a>
      </div>
    </InfoSideStyled>
  );
};

const InfoSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
  }

  .productName {
    font-size: 2vw;
  }

  .productProducer {
    font-size: 1.2vw;
  }

  .props-shortcut {
    position: relative;

    a {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 75%;
      padding-block: 5px;
      transform: translateX(-50%);
      z-index: 100;
      background-color: black;
      color: white;
      border-radius: 5px;
      text-align: center;
      text-decoration: none;
    }
  }

  .props-shortcut:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 35%;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, transparent, white, white);
    z-index: 1;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding: 3% 0% 3% 15%;
  }
`;

export default InfoSide;
