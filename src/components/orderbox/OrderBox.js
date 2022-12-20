import { Button } from '../ui/button/Button';
import  './orderbox.scss';
import { OrderList } from './orderlist/OrderList';

export const OrderBox = () => {
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
        <OrderList/>
      </div>
    </div>
  );
};

