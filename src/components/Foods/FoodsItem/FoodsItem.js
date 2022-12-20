import FoodsImg from "../../../assets/images/foods1.png"
import "./foodsitem.scss"

export function FoodsItem() {
  const foodsItem = [
    {
      img: FoodsImg,
      title: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      span: "20 Bowls available",
    },
  ]
  let foodsItem1 = Array(12).fill(...foodsItem)
  return (
    <>
      {foodsItem1.map((element) => (
        <li className="foods-item" key={element.title}>
          <img
            className="foods-img"
            src={element.img}
            width="150"
            height="150"
            alt={element.title}
          />
          <h3 className="foods-title">{element.title}</h3>
          <p className="foods-price">{element.price}</p>
          <span className="foods-bowls">{element.span}</span>
        </li>
      ))}
    </>
  )
}

