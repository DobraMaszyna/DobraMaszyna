import styled from 'styled-components';

const Delivery = ({ title, icon }) => {
  return (
    <DelveriyStyled>
      <img class='icon' src={icon} />
      <p>{title}</p>
    </DelveriyStyled>
  );
};

const DelveriyStyled = styled.li`
  display: flex;
  border-top: 0.5px solid ${(props) => props.theme.colors.gray};
  align-items: center;
  padding: 7px 10%;
  justify-content: space-between;
  text-align: left;

  .imageContainer {
    display: flex;
    align-items: center;
    width: 30%;
    img {
      margin: auto;
    }
  }

  p {
    font-size: 12px;
  }

  @media (min-width: 768px) {
  }
`;

export default Delivery;
