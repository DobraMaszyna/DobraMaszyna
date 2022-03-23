import styled from 'styled-components';

const CategoryIcon = ({catSrc}) => {
  return (
    <CategoryIconStyled>
      <img src={catSrc} alt=''/>
    </CategoryIconStyled>
  )
}

const CategoryIconStyled = styled.li`
  img{
    width: 32px;
  }
`;

export default CategoryIcon;