import "./foodsitem.scss"

export function FoodsItem({ img, title, price, span }) {
  return (
    <>
      <li className="foods-item" key={title}>
        <img
          className="foods-img"
          src={img}
          width="150"
          height="150"
          alt={title}
        />
        <h3 className="foods-title">{title}</h3>
        <p className="foods-price">{price}</p>
        <span className="foods-bowls">{span}</span>
      </li>
    </>
  )
}
