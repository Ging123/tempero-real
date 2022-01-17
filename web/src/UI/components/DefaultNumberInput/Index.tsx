import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Text from '../Text/Index';
import Calculator from './calculator';
import './styles.scss';

interface props {
  max?:number;
  min?:number;
  onClickPlus?:any;
  onClickMinus?:any;
  quantity:number;
}

const DefaultNumberInput = (props:props) => {
  const [ quantity, setQuantity ] = useState(props.quantity);
  const calculator = new Calculator(props.max, props.min);

  return (
    <div className='default-number-input-container'>
      <FaMinus onClick={async () => {
        if(props.onClickMinus) await props.onClickMinus();
        setQuantity(calculator.subtract(quantity));
      }}/>
      <Text 
        color='black'
        content={`${quantity}`} 
      />
      <FaPlus onClick={async () => {
        if(props.onClickPlus) await props.onClickPlus();
        setQuantity(calculator.add(quantity));
      }}/>
    </div>
  )
}

export default DefaultNumberInput;