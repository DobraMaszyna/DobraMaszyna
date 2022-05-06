import styled from 'styled-components';
import EquipmentElement from './EquipmentElement';

const Equipment = ({ equipment }) => {
  return (
    <EquipmentStyled id='Wyposażenie' className='card'>
      <h1>Wyposażenie:</h1>
      {equipment.map((elem) => (
        <EquipmentElement text={elem} />
      ))}
    </EquipmentStyled>
  );
};

const EquipmentStyled = styled.section`
  margin-inline: auto;
  margin-block: 50px;
  width: 80vmin;
  padding: 50px;
  background: white;

  h1 {
    margin-bottom: 20px;
  }
`;

export default Equipment;
