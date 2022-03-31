import styled from "styled-components";

const Delivery = ({ title }) => {
  return (
    <DelveriyStyled>
      <img src="" />
      <p>{title}</p>
    </DelveriyStyled>
  );
};

const DelveriyStyled = styled.li`
  display: flex;
  justify-content: space-between;
  border-top: 0.5px solid ${(props) => props.theme.colors.gray};
`;

export default Delivery;
