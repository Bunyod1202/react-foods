import './mostorderitem.scss'

export const MostOrderItem = ({img,title,text}) => {
  return (
    <div className='most-order-item' >
      <img className='most-order-img'  src={img} alt={title} />
      <div className="most-order-content">
          <p className="most-order-content-title">{title}</p>
          <p className="most-order-content-text">{text}</p>
      </div>
    </div>
  )
}
