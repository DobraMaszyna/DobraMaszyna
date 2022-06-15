import { useState } from 'react';

import styled from 'styled-components';

import CategoryElement from './CategoryElement';
import {
  maszynyDomoweSubcategories,
  maszynyPrzemysloweSubcategories,
  hafciarkiSubcategories,
  prasowanieSubcategories,
  aksesoriaSubcategories,
  czesciZamienneSubcategories,
  stefaPromocjiZamienneSubcategories,
} from '../../DUMMY_DATA/subcategories';

const CategoryList = () => {
  return (
    <>
      <CategoryContainerStyled>
        <div className='CategoryList'>
          <ul>
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/cottage.png'
              title='Maszyny Domowe'
              href='maszyny-domowe'
              subcategories={maszynyDomoweSubcategories}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/factory.png'
              title='Maczyny Przemysłowe'
              href='maszyny-przemyslowe'
              subcategories={maszynyPrzemysloweSubcategories}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/sewing-machine.png'
              title='Hafciarki'
              href='hafciarki'
              subcategories={hafciarkiSubcategories}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/ironing.png'
              title='Prasowanie'
              href='prasowanie'
              subcategories={prasowanieSubcategories}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/pin-cushion.png'
              title='Akcesoria'
              href='akcesoria'
              subcategories={aksesoriaSubcategories}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/sewing-button.png'
              title='Części Zamienne'
              href='czesci-zamienne'
              subcategories={czesciZamienneSubcategories}
            />
            <CategoryElement
              imgSrc='https://img.icons8.com/dotty/80/7E7E80/discount.png'
              title='Promocje'
              href='promocje'
              subcategories={stefaPromocjiZamienneSubcategories}
            />
          </ul>
        </div>
      </CategoryContainerStyled>
    </>
  );
};

const CategoryContainerStyled = styled.div`
  .CategoryList {
    display: none;
    align-items: center;
    justify-items: center;
  }

  @media (min-width: 768px) {
    .CategoryList {
      display: flex;
      width: 100%;
      height: 150px;
      background: white;
      padding-top: 75px;
      z-index: 90;
      box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.1);

      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        width: 100%;
        padding: 0 50px;
        z-index: 90;
      }
    }
    p {
      display: none;
    }
  }

  @media (min-width: 1100px) {
    ul {
      p {
        display: block;
      }
    }
  }
`;

export default CategoryList;
