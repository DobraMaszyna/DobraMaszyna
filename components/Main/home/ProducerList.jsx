import styled from 'styled-components';

const ProducerList = ({ producersList }) => {
  return (
    <ProducerListStyled>
      {producersList.map(({ name }) => (
        <img src={`/producers-img/${name}-logo.png`} />
      ))}
    </ProducerListStyled>
  );
};

const ProducerListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 10vmin;
  border-right: 1px solid ${({ theme }) => theme.colors.purplePrimary};
  img {
    height: 40px;
    width: fit-content;
    margin-block: 20px;
  }
`;

export default ProducerList;
