import styled from 'styled-components';

const ActionItem = ({ title, icon, color }) => {
  return (
    <ActionItemStyled color={color}>
      <p>
        <span>{icon}</span>
        {title}
      </p>
    </ActionItemStyled>
  );
};

const ActionItemStyled = styled.button`
  height: 50px;
  margin: 25px;
  background-color: transparent;
  border: none;
  text-align: left;
  p {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) =>
      props.color === 'purple'
        ? props.theme.colors.purple
        : props.color === 'blue'
        ? props.theme.colors.blue
        : props.theme.colors.red};
    span {
      margin-right: 23px;
    }
  }
`;

export default ActionItem;
