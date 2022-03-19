import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort, faGrip } from '@fortawesome/free-solid-svg-icons';

import ProductList from './ProductList/Index';
import SortBtn from './SortBtn';

const Main = ({ products }) => {
  return (
    <MainStyled>
      <div className='ContentContainer card'>
        <div className='SortContainer'>
          <SortBtn
            sortTypes={[
              'Po popularności',
              'Cena (Od najniższej)',
              'Cena (Od najwyższej)',
            ]}
          />
          <SortBtn sortTypes={[10, 20, 50]} />
        </div>
        <ProductList products={products} />
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  float: right;
  width: 100%;
  height: 100%;

  .ContentContainer {
    width: 92%;
    height: 100%;
    margin: auto;
    border-radius: 41px 41px 0 0;
  }

  .SortContainer {
    display: flex;
    align-items: center;
    padding: 0 50px;
  }
`;

export default Main;
