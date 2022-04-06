import styled from 'styled-components';

const CustomButton = ({ BtnImg }) => {
  return (
    <CustomButtonStyled>
      <img className='customBtn' src={BtnImg} />
    </CustomButtonStyled>
  );
};

const CustomButtonStyled = styled.li`
  height: 50px;
  width: 100px;
  border-radius: 5px;
  border: 0.5px solid ${(props) => props.theme.colors.onyx};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  img {
    height: 45px;
  }
`;

export default CustomButton;
