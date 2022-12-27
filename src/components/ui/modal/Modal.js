import { useContext } from 'react'
import { Closebtn } from '../../../assets/icons/Icons'
import { ModalContextAdd, ModalContextEdit } from '../../../context/ModalContext'
import { Button } from '../button/Button'
import './modal.scss'

export const Modal = (props) => {
  const { setModalAdd } = useContext(ModalContextAdd)
  const {setModalEdit} = useContext(ModalContextEdit)
  return (
    <div {...props} >
      <div className="modal-card">
      <div className="modal-header">
          <Button className="close-btn" onClick={() => { setModalAdd(false); setModalEdit(false)}} ><Closebtn/></Button>
          <p className='modal-title'>{props.title}</p>
        </div>
          {props.children}
      </div>
    </div>
  )
}
