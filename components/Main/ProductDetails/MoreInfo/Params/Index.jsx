import styled from 'styled-components';
import ParamsRow from './ParamsRow';

const Params = ({ params, short }) => {
  return (
    <ParamsSection
      id={`${!short && 'Parametry '}`}
      className={`${!short && 'card'}`}
      short={short}>
      {!short && <h1>Parametry:</h1>}

      <table>
        {params &&
          Object.entries(params).map(([key, value], index) => {
            if (short && index < 5 && index !== 0) {
              return <ParamsRow title={key} value={value} />;
            } else if (!short) {
              return <ParamsRow title={key} value={value} />;
            }
          })}
      </table>
    </ParamsSection>
  );
};

const ParamsSection = styled.section`
  margin-inline: auto;
  margin-block: 50px;
  width: ${({ short }) => (short ? '100%' : '80vmin')};
  padding: ${({ short }) => (short ? '0' : '50px')};
  background: ${({ short }) => (short ? 'transparent' : 'white')};

  h1 {
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
`;

export default Params;
