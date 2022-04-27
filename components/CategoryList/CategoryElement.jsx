import Link from 'next/link';
import styled from 'styled-components';

const CategoryElement = ({ imgSrc, title, href, hoverHandler }) => {
  return (
    <>
      <CategoryElementStyled>
        <Link href={`/${href}`}>
          <a>
            <img src={imgSrc} alt='' />
            <p>{title}</p>
          </a>
        </Link>
      </CategoryElementStyled>
    </>
  );
};

const CategoryElementStyled = styled.li`
  height: 100%;
  width: calc(100% / 7);
  padding: 5px;
  list-style: none;
  border-right: solid ${(props) => props.theme.colors.purplePrimary} 1px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.onyx};
    display: flex;
    align-items: center;
    width: 130px;
    margin: auto;
    justify-content: space-evenly;
  }

  img {
    width: 32px;
  }

  p {
    line-height: 15px;
    margin-left: 10px;
    color: #7e7e80;
  }
`;

export default CategoryElement;
