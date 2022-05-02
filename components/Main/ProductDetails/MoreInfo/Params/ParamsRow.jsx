import styled from 'styled-components';

const ParamsRow = ({ title, value }) => {
  return (
    <ParamsRowStyled>
      <th>{title}</th>
      <td>{value}</td>
    </ParamsRowStyled>
  );
};

const ParamsRowStyled = styled.tr`
  th,
  td {
    border-bottom: 2px solid ${(props) => props.theme.colors.gray};
    text-align: left;
    padding-block: 10px;
  }
`;

export default ParamsRow;
