import styled from 'styled-components';
import CategoryElement from './CategoryElement';

const CategoryList = () => {
  return (
    <CategoryListStyled>
      <ul>
        <CategoryElement
          imgSrc='https://img.icons8.com/dotty/80/7E7E80/cottage.png'
          title='Maszyny Domowe'
          href='maszyny-domowe'
        />
        <CategoryElement
          imgSrc='https://img.icons8.com/dotty/80/7E7E80/factory.png'
          title='Maczyny Przemysłowe'
          href='maszyny-przemyslowe'
        />
        <CategoryElement
          imgSrc='https://img.icons8.com/dotty/80/7E7E80/sewing-machine.png'
          title='Hafciarki'
          href='hafciarki'
        />
        <CategoryElement
          imgSrc='https://img.icons8.com/dotty/80/7E7E80/ironing.png'
          title='Prasowanie'
          href='prasowanie'
        />
        <CategoryElement
          imgSrc='https://img.icons8.com/dotty/80/7E7E80/pin-cushion.png'
          title='Akcesoria'
          href='akcesoria'
        />
        <CategoryElement
          imgSrc='https://img.icons8.com/dotty/80/7E7E80/sewing-button.png'
          title='Części Zamienne'
          href='czesci-zamienne'
        />
        <CategoryElement
          imgSrc='https://img.icons8.com/dotty/80/7E7E80/discount.png'
          title='Promocje'
          href='promocje'
        />
      </ul>
    </CategoryListStyled>
  );
};

const CategoryListStyled = styled.div`
  width: 100%;
  min-height: 150px;
  background: white;
  box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.1);
  padding-top: 90px;

  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 50px;
  }
`;

export default CategoryList;
