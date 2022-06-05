import Aside from '../../components/Aside/Index';
import Main from '../../components/Main/Index';

import queryProducts from '../../lib/api/queryProducts';

const SearchPage = ({ productList }) => {
  return (
    <>
      <Aside />
      <Main products={productList} />
    </>
  );
};

export default SearchPage;

export const getServerSideProps = async (context) => {
  const productList = await queryProducts(context.params.searchQuery, 20);
  console.log(productList);

  return {
    props: { productList: productList.products },
  };
};
