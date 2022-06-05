import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavElement = ({ title, imgSrc }) => {
  return (
    <NavElementStyled whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <img src={imgSrc} alt='' />
      <p>{title}</p>
    </NavElementStyled>
  );
};

const NavElementStyled = styled(motion.li)`
  display: flex;
  align-items: center;

  img {
    width: 28px;
    margin-right: 10px;
  }
`;

export default NavElement;
