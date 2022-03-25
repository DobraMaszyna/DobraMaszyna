import styled from 'styled-components';

import SortBtn from './SortBtn';

const SortOptions = () => {
  return (
    <SortContainerStyled>
      <SortBtn
        sortTypes={[
          'Po popularności',
          'Cena (Od najniższej)',
          'Cena (Od najwyższej)',
          'Według rabatu',
          'Według wagi maszyny',
          'Najczęściej najlepiej sprzedane',
        ]}
      />
      <SortBtn sortTypes={[10, 20, 50]} />
    </SortContainerStyled>
  );
};

const SortContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: 92%;
  height: 100%;
  margin: auto;
  border-radius: 41px 41px 0 0;
`;

export default SortOptions;
