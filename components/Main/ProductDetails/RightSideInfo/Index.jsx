import styled from "styled-components";

import Price from "../../../../lib/components/price";
import Availability from "../../../../lib/components/Availability";
import Delivery from "./Delivery";
import ActionBtn from "../../../../lib/components/ActionBtn";

const RightSideInfo = ({ price, priceBefore }) => {
  return (
    <PaymentStyled className="card">
      <Price price={price} priceBefore={priceBefore} />
      <Availability
        title="Dostępny"
        icon="https://img.icons8.com/dotty/80/2ecc71/ok.png"
      />
      <ul>
        <Delivery
          title="Dostawa w ciągu 7 dni"
          icon="https://img.icons8.com/dotty/80/000000/delivery.png"
        />
        <Delivery
          title="Darmowa dostawa"
          icon="https://img.icons8.com/dotty/80/000000/today.png"
        />
      </ul>
      <ActionBtn
        title="Do koszyka"
        btnClass="purple"
        icon="https://img.icons8.com/dotty/80/000000/shopping-cart.png"
      />
      <ActionBtn
        title="Polub"
        btnClass="silver"
        icon="https://img.icons8.com/dotty/80/000000/like.png"
      />
    </PaymentStyled>
  );
};

const PaymentStyled = styled.div`
  width: 20%;
  padding: 50px;
`;

export default RightSideInfo;
