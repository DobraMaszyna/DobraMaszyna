import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';



const CategoryList = () => {
  return (
    <CategoryListStyled>
      <ul>
        <CategoryIcon catSrc=''/>
        <CategoryIcon catSrc=''/>
        <CategoryIcon catSrc=''/>
        <CategoryIcon catSrc=''/>
        <CategoryIcon catSrc=''/>
        <CategoryIcon catSrc=''/>
        <CategoryIcon catSrc=''/>
      </ul>
    </CategoryListStyled>
  )
}

const CategoryListStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.1);

  ul{
    width: 12%;
    display: flex;
    justify-content: space-around;
    list-style: none
  }
`;

export default CategoryList