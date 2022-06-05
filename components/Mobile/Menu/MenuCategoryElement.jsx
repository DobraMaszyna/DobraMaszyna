import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const MenuCategoryElement = ({ imgSrc, title, href, subcategories }) => {
  const [hoveredCategory, setHoveredCategory] = useState('');
  const [isSelected, setIsSelcted] = useState(false);

  return (
    <CategoryElementStyled onClick={() => setIsSelcted(!isSelected)}>
      <Link href={`/${href}`}>
        <a>
          <img src={imgSrc} alt='' />
          <p>{title}</p>
          <img
            className='arrow'
            src='https://img.icons8.com/dotty/80/8E94F2/chevron-right.png'
          />
        </a>
      </Link>

      <div className='subcategories'>
        {isSelected && (
          <div className='parentCategoriesContainer'>
            {subcategories.map((el) => (
              <button onClick={() => setHoveredCategory(el.name)}>
                <p>{el.name}</p>
                <img src='https://img.icons8.com/dotty/80/8E94F2/forward.png' />
              </button>
            ))}
          </div>
        )}

        <div className='subcategoriesContainer'>
          {hoveredCategory &&
            subcategories
              .filter((el) => el.name === hoveredCategory)[0]
              .categories.map((el) => <p>{el}</p>)}
        </div>
      </div>
    </CategoryElementStyled>
  );
};

const CategoryElementStyled = styled.li`
  width: 100%;
  padding: 15px 30px;
  border-right: solid ${(props) => props.theme.colors.purplePrimary} 1px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.onyx};
    display: flex;
    align-items: center;
  }

  img {
    width: 32px;
  }

  p {
    line-height: 15px;
    margin-left: 10px;
    color: #7e7e80;
  }

  .arrow {
    margin-left: auto;
  }

  .subcategories {
    display: none;
    border: none;

    .parentCategoriesContainer {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: 20px;
      background: red;

      button {
        display: flex;
        align-items: center;
        border: none;
        background: transparent;
        font-size: 16px;
        padding: 10px;
      }
    }
  }
`;

export default MenuCategoryElement;
