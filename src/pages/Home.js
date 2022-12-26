import React from 'react';
import Foods from '../components/Foods/Foods';
import { OrderBox } from '../components/orderbox/OrderBox';

export const Home = () => {

  return (
    <div className='home'>
      <Foods />
      <OrderBox/>
   
    </div>
  );
};

