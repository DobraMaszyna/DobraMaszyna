import styled from "styled-components";
import { motion } from "framer-motion";

const NavIcon = ({ imgSrc }) => {
  return (
    <NavIconsStyled whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <img src={imgSrc} alt="" />
    </NavIconsStyled>
  );
};

const NavIconsStyled = styled(motion.li)`
  img {
    width: 32px;
  }
`;

export default NavIcon;
