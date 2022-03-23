import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SubmitFilters = ({ submit }) => {
  return (
    <SubmitFiltersStyled onClick={submit}>
      Zastosuj Flitry{' '}
      <img src='https://img.icons8.com/dotty/80/000000/search.png' />
    </SubmitFiltersStyled>
  );
};

const SubmitFiltersStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border 2px solid ${(props) => props.theme.colors.purplePrimary};
  border-radius: 8px;
  font-size: 16px;
  padding: 10px 15px;
  background-color: transparent;
  margin-top: 40px;

  img {
    width: 24px;
  }
`;

export default SubmitFilters;
