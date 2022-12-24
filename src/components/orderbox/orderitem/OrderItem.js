import { useEffect, useState } from 'react';
import { BascetIcon } from '../../../assets/icons/Icons';
import food from '../../../assets/images/foods1.png'
import { Button } from '../../ui/button/Button';
import { Input } from '../../ui/input/Input';
import "./orderitem.scss"
export const OrderItem = ({ num, som,foodsItem1,setResult }) => {
  const [cauterInput, setCauterInput] = useState(som)
  const ress = foodsItem1.reduce((ac, item) => {
    console.log(item);
    return ac += item.som
  }, 0)
  useEffect(() => {
    setResult(ress.toFixed(2))
  }, [ress])
  
  const caunts = (e) => {
    if (e.key === "Enter") {
      let res = num = e.target.value
      setCauterInput(Number(res) * Number(som))
      setResult(ress.toFixed(2))
      som = cauterInput
    }
  }
  return (
    <li className='order-item'>
      <div className="food-top">
        <div className="food-content-left">
          <img className='food-img' src={food} alt="food"/>
          <div className="content-box">
            <p className='content-titles'>Spicy seasoned sea...</p>
            <p className='content-text'>$ {som}</p>
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

