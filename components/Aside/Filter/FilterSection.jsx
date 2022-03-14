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
    color: ${(props) =>
      props.color === 'purple'
        ? props.theme.colors.purple
        : props.color === 'blue'
        ? props.theme.colors.blue
        : props.theme.colors.red};
  }
`;

export default FilterSection;
