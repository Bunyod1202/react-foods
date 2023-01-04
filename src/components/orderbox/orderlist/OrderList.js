
import { OrderItem } from '../orderitem/OrderItem';
import './orderlist.scss';
export const OrderList = ({setResult}) => {
  const obj = {
    num: 1,
    som: 2.29,
  }
  let foodsItem1 = Array(6).fill(obj)

 
  return (
    <ul className='order-list'>
      {
        foodsItem1.map((item, index) => <OrderItem foodsItem1={foodsItem1} setResult={setResult} num={item.num} som={item.som} key={index} />)
       
      }
    </ul>
  );
};
