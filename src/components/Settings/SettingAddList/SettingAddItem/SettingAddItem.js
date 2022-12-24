import React from 'react'
import './settingadditem.scss'

const SettingAddItem = ({ img, title, price, span }) => {
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
      <button className='setting-add-edit'>Edit dish</button>
    </li>
  )
}

export default SettingAddItem
