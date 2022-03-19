import styled from 'styled-components';
import { useEffect, useState } from 'react';

const FilterCheckbox = ({ title, addProducer }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    addProducer(title, isChecked);
  }, [isChecked]);

  return (
    <ProductStyled onChange={checkHandler}>
      <label className='container'>
        {title}
        <input type='checkbox' name='checkbox' className='checkbox' />
        <span className='checkmark'></span>
      </label>
    </ProductStyled>
  );
};

const ProductStyled = styled.li`
  margin-left: 15px;

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 18px;
    color: ${(props) => props.theme.colors.purple};
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border: 2px solid ${(props) => props.theme.colors.purple};
    border-radius: 2px;
    transform: translateY(-50%);
  }

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    position: absolute;
    left: 25%;
    top: 50%;
    width: 4px;
    height: 8px;
    border: solid ${(props) => props.theme.colors.purple};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg) translate(-50%, -50%);
  }
`;

export default FilterCheckbox;
