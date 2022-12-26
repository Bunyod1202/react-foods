import { Outlet } from 'react-router-dom'
import './setting.scss'
import {Modal} from '../ui/modal/Modal';
import {Input} from '../ui/input/Input';
import {Select} from '../ui/select/Select';
import {Button} from '../ui/button/Button';

import { SettingsHeader } from './settinsHeader/SettingsHeader'

export const Setting = () => {
  return (
    <div className='setings'>
      <SettingsHeader />
      <Outlet />
        {/* <Modal title="Add new product item to list" >
          <form>
            <Input className='full-input' type="text" placeholder='Enter yout Product name' name="ardholder_cname" required />
            <Input className='full-input' type="text" placeholder='Enter yout Product bowls' name="ardholder_cname" required />
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
  )
}

