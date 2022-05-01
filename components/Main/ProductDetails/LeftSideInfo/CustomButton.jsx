import styled from 'styled-components';
import { motion } from 'framer-motion';

const CustomButton = ({ BtnImg }) => {
  return (
    <CustomButtonStyled whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <img className='customBtn' src={BtnImg} />
    </CustomButtonStyled>
  );
};

const CustomButtonStyled = styled(motion.li)`
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
    width: auto;
    object-fit: contain;
  }
`;

export default CustomButton;
