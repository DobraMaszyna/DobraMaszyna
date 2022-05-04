import styled from 'styled-components';
import Description from './Description/Index';

import InfoNavbar from './InfoNavbar';
import Params from './Params/Index';

const MoreInfo = ({ productInfo }) => {
  return (
    <MoreInfoStyled>
      <div className='nav'>
        <InfoNavbar title={'Opis'} />
        <InfoNavbar title={'Parametry'} />
        <InfoNavbar title={'Wyposażenie'} />
        <InfoNavbar title={'Polecane'} />
        <InfoNavbar title={'Tylko dla ciebie'} />
        <InfoNavbar title={'Wideo'} />
        <InfoNavbar title={'Komentarze'} />
      </div>

      <Description />
      <Params params={productInfo.params} />
    </MoreInfoStyled>
  );
};

const MoreInfoStyled = styled.div`
  width: 100%;
  margin-top: 200px;
  margin-inline: auto;
  padding-inline: 5vmin;
  background-color: white;

  .nav {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }
`;

export default MoreInfo;
