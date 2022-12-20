import React from 'react';
import Foods from '../components/Foods/Foods';
import { OrderBox } from '../components/orderbox/OrderBox';
import Total from '../components/Total/Total';

export const Home = () => {

  return (
    <div className='home'>
      <Foods />
      {/* <Total /> */}
      <OrderBox/>
    </div>
  );
};

