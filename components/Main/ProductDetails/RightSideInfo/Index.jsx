import styled from "styled-components";

import Price from "../../../../lib/components/price";
import Availability from "../../../../lib/components/Availability";
import Delivery from "./Delivery";
import ActionBtn from "../../../../lib/components/ActionBtn";

const RightSideInfo = () => {
  return (
    <PaymentStyled className="card">
      <Price />
      <Availability />
      <ul>
        <Delivery />
        <Delivery />
      </ul>
      <ActionBtn title="" />
      <ActionBtn title="" />
    </PaymentStyled>
  );
};

const PaymentStyled = styled.div``;

export default RightSideInfo;
