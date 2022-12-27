import React, { useContext } from 'react'
import { ModalContextEdit } from '../../../../context/ModalContext'
import { Button } from '../../../ui/button/Button'
import './settingadditem.scss'

const SettingAddItem = ({ img, title, price, span }) => {
  const {modalEdit ,setModalEdit} = useContext(ModalContextEdit)
  return (
    <li className="setting-add-items">
      <img
        className="setting-add-img"
        src={img}
        width="150"
        height="150"
        alt={title}
      />
      <h3 className="setting-add-title">{title}</h3>
      <div className='setting-add-price-box'>
        <p className="setting-add-price">{price}</p>
        <span className="setting-add-bowls">{span}</span>
      </div>
      <Button className='setting-add-edit' onClick={()=>setModalEdit(!modalEdit)} >Edit dish</Button>
    </li>
  )
}

export default SettingAddItem
