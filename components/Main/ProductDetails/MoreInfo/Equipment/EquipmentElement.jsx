import styled from 'styled-components';

const EquipmentElement = ({ text }) => {
  return <EquipmentElementStyled>{text}</EquipmentElementStyled>;
};

const EquipmentElementStyled = styled.li`
  list-style: none;

  &::before {
    content: '\\27A4';
    color: ${(props) => props.theme.colors.purplePrimary};
    display: inline-block;
    width: 2.5em;
    font-size: 0.9rem;
  }
`;

export default EquipmentElement;
