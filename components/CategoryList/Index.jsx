import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import CategoryElement from './CategoryElement';
import SubcategoriesList from './SubcategoriesList/Index';

const CategoryList = () => {
  const [isOverElement, setIsOverElement] = useState(false);

  const hoverElementHandler = () => setIsOverElement(!isOverElement);

  return (
    <>
      <CategoryContainerStyled>
        <div className='CategoryList'>
          <ul>
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/cottage.png'
              title='Maszyny Domowe'
              href='maszyny-domowe'
              hoverHandler={hoverElementHandler}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/factory.png'
              title='Maczyny Przemysłowe'
              href='maszyny-przemyslowe'
              hoverHandler={hoverElementHandler}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/sewing-machine.png'
              title='Hafciarki'
              href='hafciarki'
              hoverHandler={hoverElementHandler}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/ironing.png'
              title='Prasowanie'
              href='prasowanie'
              hoverHandler={hoverElementHandler}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/pin-cushion.png'
              title='Akcesoria'
              href='akcesoria'
              hoverHandler={hoverElementHandler}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/sewing-button.png'
              title='Części Zamienne'
              href='czesci-zamienne'
              hoverHandler={hoverElementHandler}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/discount.png'
              title='Promocje'
              href='promocje'
              hoverHandler={hoverElementHandler}
            />
          </ul>
        </div>
        {isOverElement && <SubcategoriesList />}
      </CategoryContainerStyled>
    </>
  );
};

const CategoryContainerStyled = styled.div`
  .CategoryList {
    width: 100%;
    height: 150px;
    background: white;
    padding-top: 90px;
    z-index: 90;
    box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.1);

    ul {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding: 0 50px;
      z-index: 90;
    }
  }

  @media (max-width: 768px) {
    .CategoryList {
      display: none;
    }
    ul {
      position: fixed;
      width: 100%;
      left: -120%;
      text-align: center;
      transition: all 0.6s;
    }
  }
`;

export default CategoryList;
