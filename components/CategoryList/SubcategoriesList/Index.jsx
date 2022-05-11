import styled from 'styled-components';

import SubcategorySection from './SubcategorySection';

const SubcategriesList = ({ subcategories }) => {
  return (
    <SubcategriesListStyled>
      {subcategories.map((el) => (
        <SubcategorySection title={el.name} subcategories={el.categories} />
      ))}

      <SubcategorySection
        title='OWERLOKI'
        subcategories={['3-nitkowe', '4-nitkowe', '5-nitkowe']}
      />
      <SubcategorySection title='RENDERKI' subcategories={[]} />
      <SubcategorySection
        title='SPECJALISTYCZNE'
        subcategories={[
          'guzikarki',
          'rygłówki',
          'podszywarki',
          'zygzaki',
          'autolapy',
          'łańcuszkowe',
          'ramieniówki',
          'automaty kieszonkowe',
          'automaty słupkowe',
        ]}
      />
    </SubcategriesListStyled>
  );
};

const SubcategriesListStyled = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  padding-block: 20px;
  background-color: #fff;
  z-index: 80;
  box-shadow: inset 0 4px 20px -4px rgba(0, 0, 0, 0.1);
`;

export default SubcategriesList;
