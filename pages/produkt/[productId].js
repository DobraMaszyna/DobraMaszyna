import styled from "styled-components";

import LeftSideInfo from "../../components/Main/ProductDetails/LeftSideInfo/Index";
import RightSideInfo from "../../components/Main/ProductDetails/RightSideInfo/Index";

import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

const ProductPage = ({ data }) => {
  console.log(data);
  return (
    <ProductViewStyled>
      <LeftSideInfo />
      <RightSideInfo price={100} priceBefore={100} />
    </ProductViewStyled>
  );
};

const ProductViewStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const getServerSideProps = async (context) => {
  console.log(context.query.productId);
  try {
    const client = await clientPromise;
    const db = await client.db("bmd_db");

    const data = await db
      .collection("products")
      .find({ _id: ObjectId(context.query.objectId) })
      .toArray();

    return {
      props: { data: JSON.parse(JSON.stringify(data)) },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default ProductPage;
