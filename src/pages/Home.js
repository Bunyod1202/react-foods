import React from 'react';
import Foods from '../components/Foods/Foods';
import { OrderBox } from '../components/orderbox/OrderBox';
// import { Button } from '../components/ui/button/Button';
// import { Input } from '../components/ui/input/Input';
// import { Modal } from '../components/ui/modal/Modal';
// import { Select } from '../components/ui/select/Select';


export const Home = () => {

  return (
    <div className='home'>
      <Foods />
      <OrderBox/>
      {/* <Modal title="Add new product item to list" >
        <form>
        <Input className='full-input' type="text"  placeholder='Enter yout Product name' name="ardholder_cname"  required />
        <Input className='full-input' type="text"  placeholder='Enter yout Product bowls' name="ardholder_cname"  required />
          <Input className='full-input' type="text" placeholder='Enter yout Product price' name="ardholder_cname" required />
          <Select className="foodsform-select  modal-selects" required>
                  <option >Dine In</option>
                  <option >Dine in</option>
                  <option >Dine in</option>
                  <option >Dine in</option>
                  <option >Dine in</option>
          </Select>
          <div className="modal-btn-group">
          <Button className='btn-view' type='button'>Cancel</Button>
              <span className='boxs'></span>
              <Button className='btn-payment m' type='submit'>Add </Button>
          </div>
      </form>
      </Modal> */}
    </div>
  );
};

