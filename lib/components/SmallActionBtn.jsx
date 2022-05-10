import styled from 'styled-components';

const SmallActionBtn = ({ icon }) => {
  return (
    <SmallActionBtnStyled>
      <img className='smallActionIcon' src={icon} alt='' />
    </SmallActionBtnStyled>
  );
};

const SmallActionBtnStyled = styled.div`
  position: relative;
  border: 1px solid #7d7d7d;
  border-radius: 1000px;
  width: 35px;
  height: 35px;

  .smallActionIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
    width: fit-content;
  }
`;

export default SmallActionBtn;
