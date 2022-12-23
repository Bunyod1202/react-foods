import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { Button } from '../ui/button/Button';
import  './orderbox.scss';
import { OrderList } from './orderlist/OrderList';

export const OrderBox = () => {
  const {modalPayments,setModalPayment} = useContext(ModalContext)
  return (
    <div className='order'>
      <div className="order-header">
        <h3 className='order-title'>Orders #34562</h3>
        <div className="btn-group">
        <Button className='btn-dine btn-dine-active'>Dine In</Button>
        <Button className="btn-dine">To Go</Button>
        <Button className='btn-dine' >Delivery</Button>
        </div>
        <div className="price-list">
          <p className='price-text'>Item</p>
          <p className='price-text'>Qty</p>
          <p className='price-text'>Price</p>
        </div>
        <OrderList />
        <div className="sub-total-group">
          <div className="sub-total-discount">
            <p className='sub-text'>Discount</p>
            <p className='sub-sum'>$0</p>
          </div>
          <div className="sub-total-subtotal">
          <p className='sub-text'>Sub total</p>
            <p className='sub-sum'> $ 21,03</p>
          </div>
          <Button className="btn-payment" onClick={()=>setModalPayment(!modalPayments)}>Continue to Payment</Button>
        </div>
      </div>
    </div>
  );
};

