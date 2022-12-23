import './mostorderlist.scss'
import footsimg from '../../../assets/images/foods1.png'
import { MostOrderItem } from '../mostorderitem/MostOrderItem'
export const MostOrderList = () => {
  const mostOrder = [
    {
      img: footsimg,
      title: 'Spicy seasoned seafood noodles',
      text: "200 dishes ordered"
    }
  ]
  let customerArray = Array(10).fill(...mostOrder)
  return (
    <ul className='most-order-list'>
      {customerArray?.map((item, index) =>
        <MostOrderItem key={index} img={item.img} title={item.title} text={item.text} />)}
    </ul>
  )
}
