import axios from "axios";
import {  useState } from "react";
import "./foodsitem.scss"

export function FoodsItem({ img, title, price, span, id, categoryId }) {
  const [rest,setRest] = useState([])

console.log(rest);

  const addOrder = () => {
    const postproduct = async () => {
      const data = await axios.get(`http://172.17.13.155:5000/food/${categoryId}`)
      const filterData = data.data.filter(data => data.id === id)
      setRest([...rest,filterData])
      // console.log(...filterData)
      console.log(rest);

    }
    postproduct()
    
  }
  return (
    <>
      <li className="foods-item" onClick={addOrder} key={title}>
        <img
          className="foods-img"
          src={`http://172.17.13.155:5000/${img}`}
          width="150"
          height="150"
          alt={title}
        />
        <h3 className="foods-title">{title}</h3>
        <p className="foods-price">${price}</p>
        <span className="foods-bowls">{span} Bowls available</span>
      </li>
    </>
  )
}
