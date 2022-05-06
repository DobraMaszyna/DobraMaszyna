import styled from 'styled-components';

const ProducerList = ({ producersList }) => {
  return (
    <ProducerListStyled>
      {producersList.map(({ name }) => (
        <img src={`/producers-img/${name}-logo.png`} id={`${name}-logo.png`} />
      ))}
    </ProducerListStyled>
  );
};

const ProducerListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  img {
    height: 50px;
    width: fit-content;
    margin-block: 20px;
  }
`;

export default ProducerList;
