import { useState } from 'react';
import { BascetIcon } from '../../../assets/icons/Icons';
import food from '../../../assets/images/foods1.png'
import { Button } from '../../ui/button/Button';
import { Input } from '../../ui/input/Input';
import "./orderitem.scss"
export const OrderItem = ({ num, som }) => {
  const [cauterInput, setCauterInput] = useState(som)
  const caunts = (e) => {
    if (e.key === "Enter") {
      let res = num = e.target.value
      setCauterInput(Number(res)  * Number(som))
    }
  }
  return (
    <li className='order-item'>
      <div className="food-top">
        <div className="food-content-left">
          <img className='food-img' src={food} alt="food"/>
          <div className="content-box">
            <p className='content-titles'>Spicy seasoned sea...</p>
            <p className='content-text'>$ 2.29</p>
          </div>
        </div>
        <div className="food-content-right">
          <Input  onKeyDown={caunts} maxLength="1" className="cauter-input" defaultValue={num} />
          <p className='cunter-sum'>${cauterInput}</p>
        </div>
      </div>
      <div className="food-bottom">
        <Input className='input-order' placeholder="Order Note..." />
        <Button className="btn-bascet"><BascetIcon/></Button>
      </div>
    </li>
  );
};

