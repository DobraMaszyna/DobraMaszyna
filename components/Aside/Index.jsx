import styled from 'styled-components';

import Filter from './Filter/Index';

const Aside = () => {
  return (
    <AsideStyled>
      <div className='AsideCard card'>
        <Filter />
      </div>
    </AsideStyled>
  );
};

const AsideStyled = styled.div`
  display: none;
  float: left;
  width: 410px;
  min-height: 100vh;

  .AsideCard {
    width: 319px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 50px;
    border-radius: 0 41px;
  }

  @media only screen and (min-width: 768px) {
    display: initial;
  }
`;

export default Aside;
