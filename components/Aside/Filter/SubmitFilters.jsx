import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SubmitFilters = ({ submit }) => {
  return (
    <SubmitFiltersStyled onClick={submit}>
      Zastosuj Flitry <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
    </SubmitFiltersStyled>
  );
};

const SubmitFiltersStyled = styled.button`
  display: flex;
  justify-content: space-between;
  border 2px solid ${(props) => props.theme.colors.onyx};
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 15px;
  background-color: transparent;
  margin-top: 40px;
`;

export default SubmitFilters;
