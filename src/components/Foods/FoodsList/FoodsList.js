import { FoodsItem } from "../FoodsItem/FoodsItem"
import "./foodslist.scss"
import { useEffect, useState } from "react"
import axios from "axios"
export const FoodsList = ({id}) => {
  const [data,setData] = useState([])
  useEffect(() => {
  const postproduct = async () => {

    const data = await axios.get(`http://localhost:5000/food/${id}`)
    setData(data.data)
;
  }
    postproduct()
  }, [id])
  return (
    <>
    {data.length > 0 ? <ul className="foods-list">
        {data.map((element, index) => (
        <FoodsItem
            key={index}
            id={element.id}
            categoryId={id}
          img={element.image}
          title={element.name}
          price={element.price}
          span={element.bowls}
        />
      ))}
    </ul> : <p className="no-product">The product is currently unavailable</p>}
    </>
  )
}
