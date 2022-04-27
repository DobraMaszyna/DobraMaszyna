import styled from 'styled-components';

const CategoryDetails = ({ isOver, hoverHandler, detailsContent }) => {
  return (
    <CategoryDetailsStyled
      onMouseOver={hoverHandler}
      onMouseOut={hoverHandler}
      isOver={isOver}>
      {isOver && <p>{JSON.stringify(detailsContent)}</p>}
    </CategoryDetailsStyled>
  );
};

const CategoryDetailsStyled = styled.div`
  margin-top: 150px;
  position: fixed;
  width: 100%;
  display: ${(props) => (props.isOver ? '' : 'none')};
  height: ${(props) => (props.isOver ? '231px' : '0px')};
  background-color: white;
  z-index: 80;
  transition: height ease-in-out 0.4s;
`;

export default CategoryDetails;
