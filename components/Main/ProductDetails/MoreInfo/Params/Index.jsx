import styled from 'styled-components';
import ParamsRow from './ParamsRow';

const Params = ({ params }) => {
  return (
    <ParamsSection className='cart'>
      <h1>Parametry:</h1>
      <table>
        {Object.entries(params).map(([key, value]) => (
          <ParamsRow title={key} value={value} />
        ))}
      </table>
    </ParamsSection>
  );
};

const ParamsSection = styled.section`
  margin-inline: auto;
  margin-block: 50px;
  width: 80vmin;
  padding: 20px;
  background: white;

  h1 {
    margin-block: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
`;

export default Params;
