import { Outlet } from 'react-router-dom'
import './setting.scss'
import {Modal} from '../ui/modal/Modal';
import {Input} from '../ui/input/Input';
import {Select} from '../ui/select/Select';
import {Button} from '../ui/button/Button';

import { SettingsHeader } from './settinsHeader/SettingsHeader'
import { Downland } from '../../assets/icons/Icons';
import { useContext } from 'react';
import { ModalContextAdd, ModalContextEdit } from '../../context/ModalContext';

export const Setting = () => {
  const {modalAdd,setModalAdd} = useContext(ModalContextAdd)
  const {modalEdit} = useContext(ModalContextEdit)
  return (
    <div className='setings'>
      <SettingsHeader />
      <Outlet />

      <Modal className={ modalAdd === true ?'modal modal-show':"modal"} title="Add new product item to list" >
          <form>
            <Input className='full-input input-add' type="text" placeholder='Enter yout Product name' name="ardholder_cname" required />
            <Input className='full-input input-add' type="text" placeholder='Enter yout Product bowls' name="ardholder_cname" required />
            <Input className='full-input input-add' type="text" placeholder='Enter yout Product price' name="ardholder_cname" required />
            <Select className="foodsform-select  modal-selects input-add" required>
              <option >Dine In</option>
              <option >Dine in</option>
              <option >Dine in</option>
              <option >Dine in</option>
              <option >Dine in</option>
            </Select>
          <label className='setting-add-file input-add' >
            <Input className=' visually-hidden' type="file" placeholder='Enter yout file' name="ardholder_cname" required />
            <span className='setting-add-content'>
              <Downland />
              <p className='setting-add-title' >Click or drag file to this area to upload</p>
              <p className='setting-add-text'>Support for a single or bulk upload.</p>
            </span>
           </label>
            <div className="modal-btn-group">
              <Button className='btn-view' onClick={()=>setModalAdd(!modalAdd)} type='button'>Cancel</Button>
              <span className='boxs'></span>
              <Button className='btn-payment m'  type='submit'>Add </Button>
            </div>
          </form>
      </Modal>
      
      <Modal className={ modalEdit === true ?'modal modal-show':"modal"} title="Edit or delete product item " >
          <form>
            <Input className='full-input input-add' type="text" placeholder='Enter yout Product name' name="ardholder_cname" required />
            <Input className='full-input input-add' type="text" placeholder='Enter yout Product bowls' name="ardholder_cname" required />
            <Input className='full-input input-add' type="text" placeholder='Enter yout Product price' name="ardholder_cname" required />
            <Select className="foodsform-select  modal-selects input-add" required>
              <option >Dine In</option>
              <option >Dine in</option>
              <option >Dine in</option>
              <option >Dine in</option>
              <option >Dine in</option>
            </Select>
          <label className='setting-add-file input-add' >
            <Input className=' visually-hidden' type="file" placeholder='Enter yout file' name="ardholder_cname" required />
            <span className='setting-add-content'>
              <Downland />
              <p className='setting-add-title' >Click or drag file to this area to upload</p>
              <p className='setting-add-text'>Support for a single or bulk upload.</p>
            </span>
           </label>
            <div className="modal-btn-group">
              <Button className='btn-view' type='button'>Delete</Button>
              <span className='boxs'></span>
              <Button className='btn-payment m'  type='submit'>Edit  </Button>
            </div>
          </form>
        </Modal>
    </div>
  )
}

