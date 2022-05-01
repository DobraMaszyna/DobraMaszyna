import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useSelector, useDispatch } from 'react-redux';
import { changeState } from '../../../redux/menu';

import MenuCategoryElement from './MenuCategoryElement';

const Menu = () => {
  const menuState = useSelector((state) => state.menu.shown);
  const dispatch = useDispatch();

  return (
    <>
      {menuState && (
        <ScreenContainer>
          <motion.div
            className='menu'
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.2 }}>
            <div className='top'>
              <h1>Menu</h1>
              <img
                onClick={() => dispatch(changeState())}
                src='https://img.icons8.com/dotty/80/000000/delete-sign.png'
              />
            </div>
            <ul>
              <MenuCategoryElement
                imgSrc='https://img.icons8.com/dotty/80/7E7E80/cottage.png'
                title='Maszyny Domowe'
                href='maszyny-domowe'
              />
              <MenuCategoryElement
                imgSrc='https://img.icons8.com/dotty/80/7E7E80/factory.png'
                title='Maczyny Przemysłowe'
                href='maszyny-przemyslowe'
              />
              <MenuCategoryElement
                imgSrc='https://img.icons8.com/dotty/80/7E7E80/sewing-machine.png'
                title='Hafciarki'
                href='hafciarki'
              />
              <MenuCategoryElement
                imgSrc='https://img.icons8.com/dotty/80/7E7E80/ironing.png'
                title='Prasowanie'
                href='prasowanie'
              />
              <MenuCategoryElement
                imgSrc='https://img.icons8.com/dotty/80/7E7E80/pin-cushion.png'
                title='Akcesoria'
                href='akcesoria'
              />
              <MenuCategoryElement
                imgSrc='https://img.icons8.com/dotty/80/7E7E80/sewing-button.png'
                title='Części Zamienne'
                href='czesci-zamienne'
              />
              <MenuCategoryElement
                imgSrc='https://img.icons8.com/dotty/80/7E7E80/discount.png'
                title='Promocje'
                href='promocje'
              />
            </ul>
          </motion.div>
        </ScreenContainer>
      )}
    </>
  );
};

const ScreenContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  z-index: 150;

  .menu {
    width: 80vw;
    min-height: 100vh;
    background: white;

    .top {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 2px solid ${(props) => props.theme.colors.purpleLighter};
      margin-bottom: 20px;

      h1 {
        font-size: 25px;
      }

      img {
        width: 30px;
        border: none;
      }
    }
  }
`;

export default Menu;
