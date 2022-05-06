import styled from 'styled-components';
import Description from './Description/Index';

import DetailsNavElement from './DetailsNavElement';
import Equipment from './Equipment/Index';
import Params from './Params/Index';
import Video from './Video/Index';
import Recommended from './Recommended/Index';

const MoreInfo = ({ productInfo }) => {
  return (
    <MoreInfoStyled>
      <div className='product-details-nav card'>
        <DetailsNavElement title={'Opis'} href='Opis' />
        <DetailsNavElement title={'Parametry'} href='Parametry' />
        <DetailsNavElement title={'Wyposażenie'} href='Wyposażenie' />
        <DetailsNavElement title={'Polecane'} href='Polecane' />
        <DetailsNavElement title={'Tylko dla ciebie'} href='Tylko dla ciebie' />
        <DetailsNavElement title={'Wideo'} href='Wideo' />
        <DetailsNavElement title={'Komentarze'} href='Komentarze' />
      </div>

      <Description />
      <Params params={productInfo.params} />
      <Equipment equipment={productInfo.equipment} />
      <Video video={productInfo.video} />
      <Recommended />
    </MoreInfoStyled>
  );
};

const MoreInfoStyled = styled.div`
  width: 95%;
  margin-top: 75px;
  margin-inline: auto;
  padding: 2rem 5vmin;

  .product-details-nav {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    background-color: white;
    overflow: hidden;
  }
`;

export default MoreInfo;
