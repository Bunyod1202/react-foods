import TotalItem from "./TotalItem/TotalItem"
import "./totallist.scss"
import { Revenue, Dish, Customer } from "../../../assets/icons/Icons"

function TotalList() {
  const total = [
    {
      svg: <Revenue />,
      percent: "+32.40%",
      text: "$10,243.00",
      title: "Total Revenue",
    },
    {
      svg: <Dish />,
      percent: "-12.40%",
      text: "23,456",
      title: "Total Dish Ordered",
    },
    {
      svg: <Customer />,
      percent: "+2.40%",
      text: "1,234",
      title: "Total Customer",
    },
  ]
  return (
    <ul className="total-list">
      {total.map((element, index) => (
        <TotalItem
          key={index}
          svg={element.svg}
          percent={element.percent}
          text={element.text}
          title={element.title}
        />
      ))}
    </ul>
  )
}
export default TotalList;
