import React, { useContext } from 'react'
import { ModalContextEdit, PutContextEdit } from '../../../../context/ModalContext'
import { Button } from '../../../ui/button/Button'
import './settingadditem.scss'

const SettingAddItem = ({ img, title, price, span, id}) => {
  const { modalEdit, setModalEdit } = useContext(ModalContextEdit)
  const {setPutEdit} = useContext(PutContextEdit)
  const btnEdit = (e) => {
    setModalEdit(!modalEdit)
    setPutEdit(id)
  }
  return (
    <li className="setting-add-items">
      <img
        className="setting-add-img"
        src={`http://localhost:5000/${img}`}
        width="150"
        height="150"
        alt={title}
      />
      <h3 className="setting-add-title">{title}</h3>
      <div className='setting-add-price-box'>
        <p className="setting-add-price">${price}</p>
        <span className="setting-add-bowls">{span}:Bowls</span>
      </div>
      <Button className='setting-add-edit' data-id={id} onClick={btnEdit} >Edit dish</Button>
    </li>
  )
}

export default SettingAddItem
