import styled from "styled-components";

const Delivery = ({ title, icon }) => {
  return (
    <DelveriyStyled>
      <img src={icon} />
      <p>{title}</p>
    </DelveriyStyled>
  );
};

const DelveriyStyled = styled.li`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.5px solid ${(props) => props.theme.colors.gray};
  padding: 10px;

  img {
    width: 40px;
  }

  p {
    font-size: 20px;
  }
`;

export default Delivery;
