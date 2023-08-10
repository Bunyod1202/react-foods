import React, { useContext, useEffect, useState } from 'react'
import SettingAddItem from './SettingAddItem/SettingAddItem'
import "./settingaddlist.scss"
import {  ModalContextAdd } from '../../../context/ModalContext'
import axios from 'axios'

const SettingAddList = ({id}) => {
  const { modalAdd, setModalAdd } = useContext(ModalContextAdd)
  const [data,setData] = useState([])

  useEffect(() => {
  const postproduct = async () => {

    const data = await axios.get(`http://172.17.13.155:5000/food/${id}`)
    setData(data.data)

  }
    postproduct()
  }, [id])
  return (
    <ul className="setting-add-list">
      <li className="setting-add-item">
        <button className="setting-add-btn" onClick={()=>setModalAdd(!modalAdd)}>Add new dish</button>
      </li>
      {data.map((item, index) => (
        <SettingAddItem
  
          key={index}
          img={item.image}
          title={item.name}
          price={item.price}
          span={item.bowls}
          id={item.id}
        />
      ))}
    </ul>
  )
}

export default SettingAddList
