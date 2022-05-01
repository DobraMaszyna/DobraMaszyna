import Link from 'next/link';
import styled from 'styled-components';

const MenuCategoryElement = ({ imgSrc, title, href }) => {
  return (
    <CategoryElementStyled>
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
`;

export default MenuCategoryElement;
