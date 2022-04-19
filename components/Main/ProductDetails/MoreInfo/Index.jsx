import styled from 'styled-components';
import InfoNavbar from './InfoNavbar';
import InfoContent from './InfoContent';

const MoreInfo = () => {
  return (
    <MoreInfoStyled>
      <div className='nav'>
        <InfoNavbar title={'Najważniejsze parametry'} />
        <InfoNavbar title={'Szczegółowy opis'} />
        <InfoNavbar title={'Wyposażenie standardowe'} />
        <InfoNavbar title={'Polecane'} />
        <InfoNavbar title={'Tylko dla ciebie'} />
        <InfoNavbar title={'Wideo'} />
        <InfoNavbar title={'Komentarze'} />
      </div>

      <InfoContent content={'gotowyhtml'} />
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
