import { FoodsItem } from "../FoodsItem/FoodsItem"
import FoodsImg from "../../../assets/images/foods1.png"
import "./foodslist.scss"
export const FoodsList = () => {
  const foodsItem = [
    {
      img: FoodsImg,
      title: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      span: "20 Bowls available",
    },
  ]
  let foodsItem1 = Array(11).fill(...foodsItem)
  return (
    <ul className="foods-list">
      {foodsItem1.map((element, index) => (
        <FoodsItem
          key={index}
          img={element.img}
          title={element.title}
          price={element.price}
          span={element.span}
        />
      ))}
    </ul>
  )
}
