import styled from 'styled-components';

const SubcategorySection = ({ title, subcategories }) => {
  return (
    <SubcategorySectionStyled>
      <h1>{title}</h1>
      <ul>
        {subcategories.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </SubcategorySectionStyled>
  );
};

const SubcategorySectionStyled = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 600;
    border-bottom: 2px solid ${({ theme }) => theme.colors.purplePrimary};
  }

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    margin-left: 5px;
  }

  li {
    font-size: 18px;
    margin-block: 2px;
  }

  li:nth-child(n/5) {
    background-color: blue;
  }
`;

export default SubcategorySection;
