import { Closebtn } from '../../../assets/icons/Icons'
import { Button } from '../button/Button'
import './modal.scss'

export const Modal = ({title, children}) => {
  return (
    <div className='modal'>
      <div className="modal-card">
      <div className="modal-header">
          <Button className="close-btn" ><Closebtn/></Button>
          <p className='modal-title'>{title}</p>
        </div>
          {children}
      </div>
    </div>
  )
}
