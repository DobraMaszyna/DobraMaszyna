import styled from 'styled-components';

const FilterSection = ({ title, children, color }) => {
  return (
    <FilterSectionStyled color={color}>
      <h2 className='title'>{title}</h2>
      {children}
    </FilterSectionStyled>
  );
};

const FilterSectionStyled = styled.div`
  .title {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export default FilterSection;
