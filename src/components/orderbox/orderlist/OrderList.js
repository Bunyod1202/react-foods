import { OrderItem } from '../orderitem/OrderItem';
import './orderlist.scss';
export const OrderList = () => {
  const obj = {

  }
  let foodsItem1 = Array(6).fill(obj)
  return (
    <ul className='order-list'>
      {
        foodsItem1.map((item,index)  => <OrderItem key={index}/>)
      }
    </ul>
  );
};

