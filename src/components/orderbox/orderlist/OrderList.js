import { OrderItem } from '../orderitem/OrderItem';
import './orderlist.scss';
export const OrderList = () => {
  const obj = {
    num: 1,
    som: 4,
  }
  let foodsItem1 = Array(6).fill(obj)
  // console.log(obj);
  return (
    <ul className='order-list'>
      {
        foodsItem1.map((item,index)  => <OrderItem num={item.num} som={item.som} key={index}/>)
      }
    </ul>
  );
};
