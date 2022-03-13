import styled from 'styled-components';

const FilterSection = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const FilterSectionStyled = styled.div`
  h2 {
    font-size: 16px;
  }
`;

export default FilterSection;
