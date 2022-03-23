import styled from 'styled-components';
import { motion } from 'framer-motion';

const ActionBtn = ({ btnClass, title, icon }) => {
  return (
    <ActionBtnStyled
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={btnClass}>
      {title}
      <img src={icon} className='icon' />
    </ActionBtnStyled>
  );
};

const ActionBtnStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  float: right;
  padding: 12px 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  font-size: 16px;
  border: none;
  margin: 5px 0;
  font-weight: 600;

  .icon {
    width: 30px;
  }

  &.silver {
    background: linear-gradient(91.74deg, #ffffff -33.26%, #e5e5e5 181.03%);
  }

  &.purple {
    background: linear-gradient(269.51deg, #8e94f2 0.08%, #c6c9f8 124.01%);
    color: #fff;
  }
`;

export default ActionBtn;
