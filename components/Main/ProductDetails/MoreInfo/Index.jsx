import styled from 'styled-components';

import InfoNavbar from './InfoNavbar';
import Params from './Params/Index';

const MoreInfo = ({ productInfo }) => {
  return (
    <MoreInfoStyled>
      <div className='nav'>
        <InfoNavbar title={'Parametry'} />
        <InfoNavbar title={'Opis'} />
        <InfoNavbar title={'Wyposażenie'} />
        <InfoNavbar title={'Polecane'} />
        <InfoNavbar title={'Tylko dla ciebie'} />
        <InfoNavbar title={'Wideo'} />
        <InfoNavbar title={'Komentarze'} />
      </div>

      <Params params={productInfo.params} />
    </MoreInfoStyled>
  );
};

const MoreInfoStyled = styled.div`
  width: 95%;
  margin-top: 200px;
  margin-right: auto;
  margin-left: auto;

  .nav {
    display: flex;
    flex-direction: row;
  }
`;

export default MoreInfo;
