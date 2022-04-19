import styled from 'styled-components';

import Price from '../../../../lib/components/Price';
import Availability from '../../../../lib/components/Availability';
import Delivery from './Delivery';
import ActionBtn from '../../../../lib/components/ActionBtn';

const RightSideInfo = ({ price, priceBefore }) => {
  return (
    <PaymentStyled className='card'>
      <Price price={price} priceBefore={priceBefore} />
      <Availability
        title='Dostępny'
        icon='https://img.icons8.com/dotty/80/2ecc71/ok.png'
      />
      <ul>
        <Delivery
          title='Dostawa w ciągu 7 dni'
          icon='https://img.icons8.com/dotty/80/C6C9F8/today.png'
        />
        <Delivery
          title='Darmowa dostawa'
          icon='https://img.icons8.com/dotty/80/C6C9F8/delivery.png'
        />
      </ul>
      <ActionBtn
        style={{ margin: '5px auto', width: '90%' }}
        title='Do koszyka'
        btnClass='purple'
        icon='https://img.icons8.com/dotty/80/ffffff/shopping-cart.png'
      />
      <ActionBtn
        style={{ margin: '5px auto', width: '90%' }}
        title='Polub'
        btnClass='silver'
        icon='https://img.icons8.com/dotty/80/000000/like.png'
      />
    </PaymentStyled>
  );
};

const PaymentStyled = styled.div`
  width: 20%;
  padding: 50px;

  ul {
    margin: 50px 0;
  }
`;

export default RightSideInfo;
