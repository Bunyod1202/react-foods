import React from 'react'
import SettingAddItem from './SettingAddItem/SettingAddItem'
import AddImg from '../../../assets/images/foods1.png'
import "./settingaddlist.scss"

const SettingAddList = () => {
  const AddFood = [
    {
      img: AddImg,
      title: 'Spicy seasoned seafood noodles',
      price: '$ 2.29',
      span: '20 Bowls',
    },
  ]
  let AddFood1 = Array(12).fill(...AddFood)
  return (
    <ul className="setting-add-list">
      <li className="setting-add-item">
        <button className="setting-add-btn">Add new dish</button>
      </li>
      {AddFood1.map((item, index) => (
        <SettingAddItem
          key={index}
          img={item.img}
          title={item.title}
          price={item.price}
          span={item.span}
        />
      ))}
    </ul>
  )
}

export default SettingAddList
