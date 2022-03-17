import styled from 'styled-components';

import ActionItem from '../../../../lib/components/ActionItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeCompare,
  faCartShopping,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const ProductActions = () => {
  return (
    <ProductActionsStyled className='ActionsContainer'>
      <ActionItem
        type={1}
        title='Porównaj'
        icon={<FontAwesomeIcon size='lg' icon={faCodeCompare} />}
        color='blue'
      />
      <ActionItem
        btnType={1}
        title='Koszyk'
        icon={<FontAwesomeIcon size='lg' icon={faCartShopping} />}
        color='purple'
      />
      <ActionItem
        btnType={1}
        title='Polubione'
        icon={<FontAwesomeIcon size='lg' icon={faHeart} />}
        color='red'
      />
    </ProductActionsStyled>
  );
};

const ProductActionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;

  padding: 5% 0;
`;

export default ProductActions;
