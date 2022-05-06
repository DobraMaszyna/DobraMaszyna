import styled from 'styled-components';

const SubcategriesList = () => {
  return <SubcategriesListStyled>SubcategriesList</SubcategriesListStyled>;
};

const SubcategriesListStyled = styled.div`
  position: absolute;
  width: 100%;
  padding-block: 20px;
  background-color: #fff;
  z-index: 80;
  box-shadow: inset 0 4px 20px -4px rgba(0, 0, 0, 0.1);
`;

export default SubcategriesList;
