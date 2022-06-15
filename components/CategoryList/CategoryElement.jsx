import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';

const CategoryElement = ({ imgSrc, title, href, subcategories }) => {
  const elementRef = useRef();

  const [isOnRight, setIsOnRight] = useState(null);
  const [isOver, setIsOver] = useState(false);

  const [hoveredCategory, setHoveredCategory] = useState('');

  useEffect(() => {
    setIsOnRight(
      window.innerWidth / 2 < elementRef.current.getBoundingClientRect().x + 2
    );
  }, [isOver]);

  window.addEventListener('resize', () => {
    setIsOnRight(
      window.innerWidth / 2 < elementRef.current.getBoundingClientRect().x + 2
    );
  });

  return (
    <CategoryElementStyled
      onMouseOver={() => setIsOver(true)}
      isOnRight={isOnRight}>
      <Link href={`/${href}`}>
        <a class='parentLink'>
          <img src={imgSrc} alt='' />
          <p>{title}</p>
        </a>
      </Link>

      <div className='subcategories' ref={elementRef}>
        <div className='parentCategoriesContainer'>
          {subcategories.map((el) => (
            <Link
              href={`/category/${el.name
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .split(' ')
                .join('-')
                .toLowerCase()}`}>
              <a
                onMouseOver={() => setHoveredCategory(el.name)}
                ref={elementRef}>
                <p>{el.name}</p>
                <img src='https://img.icons8.com/dotty/80/8E94F2/forward.png' />
              </a>
            </Link>
          ))}
        </div>
        <div className='subcategoriesContainer'>
          {hoveredCategory &&
            subcategories
              .filter((el) => el.name === hoveredCategory)[0]
              .categories.map((el) => (
                <Link
                  href={`/category/${hoveredCategory
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .split(' ')
                    .join('-')
                    .toLowerCase()}/${el
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .split(' ')
                    .join('-')
                    .toLowerCase()}`}>
                  <a className='subcategoryElement'>{el}</a>
                </Link>
              ))}
        </div>
      </div>
    </CategoryElementStyled>
  );
};

const CategoryElementStyled = styled.li`
  height: 50px;
  width: calc(100% / 7);
  padding: 5px;
  padding-bottom: 5px;
  list-style: none;
  position: relative;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #7e7e80;
  }

  .parentLink {
    display: flex;
    align-items: center;
    width: 130px;
    height: 100%;
    margin: auto;
    justify-content: space-evenly;
  }

  img {
    width: 30px;
    z-index: 110;
  }

  p {
    line-height: 15px;
    margin-left: 10px;
    color: #7e7e80;
    z-index: 110;
  }

  .subcategories {
    display: none;
    width: 700px;
    background: white;
    position: absolute;
    left: ${(props) => (props.isOnRight ? 'auto' : '-2px')};
    right: ${(props) => (props.isOnRight ? '-2px' : 'auto')};
    top: 60px;
    z-index: 100;
    border: none;
    padding: 20px;
    filter: drop-shadow(0px 4px 24px rgba(142, 148, 242, 0.2));
    border-radius: ${(props) =>
      props.isOnRight ? '10px 0 10px 10px' : '0 10px 10px 10px'};

    .parentCategoriesContainer {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: 20px;

      a {
        display: flex;
        align-items: center;
        border: none;
        background: transparent;
        font-size: 16px;
        padding: 10px;

        p {
          padding-block: 4px;
        }

        img {
          height: 22px;
          width: auto;
          padding-left: 40px;
          margin-left: auto;
        }

        &:hover p {
          border-bottom: 2px solid
            ${(props) => props.theme.colors.purplePrimary};
        }
      }
    }

    .subcategoriesContainer {
      width: 60%;
      display: flex;
      flex-direction: column;
      padding-left: 20px;

      p {
        padding-block: 10px;

        &:hover {
          border-bottom: 2px solid
            ${(props) => props.theme.colors.purplePrimary};
        }
      }

      .subcategoryElement {
        margin-block: 5px;
      }
    }

    &::before {
      content: '';
      position: absolute;
      height: 68px;
      width: calc(100vw / 7);
      top: 0;
      left: ${(props) => (props.isOnRight ? 'auto' : '0')};
      right: ${(props) => (props.isOnRight ? '0' : 'auto')};
      transform: translateY(-100%);
      background: white;
      border-radius: 10px 10px 0 0;
    }
  }

  &:after {
    content: '';
    height: 75%;
    width: 1px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: ${(props) => props.theme.colors.purplePrimary};
  }

  &:hover .subcategories {
    display: flex;
  }
`;

export default CategoryElement;
