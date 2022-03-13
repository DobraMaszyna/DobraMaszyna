import styled from 'styled-components';

import Filter from './Filter/Index';

const Aside = () => {
  return (
    <AsideStyled>
      <Filter />
    </AsideStyled>
  );
};

const AsideStyled = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  padding: 20px;
`;

export default Aside;
