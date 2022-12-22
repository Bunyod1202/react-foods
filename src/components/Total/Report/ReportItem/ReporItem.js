import "./reportitem.scss"
import Eren from "../../../../assets/images/Eren.png"

function ReportItem() {
  const customer = [
    {
      img: Eren,
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles ",
      price: "$125",
      status: "Completed",
    },
  ]
  let customerArray = Array(12).fill(...customer)
  return (
    <>
      {customerArray.map((element) => (
        <li className="reportitem">
          <div className="reportitem-box">
            <img
              className="reportitem-img"
              src={element.img}
              alt={element.name}
            />
            <p className="reportitem-name">{element.name}</p>
          </div>
          <p className="reportitem-menu">{element.menu}</p>
          <p className="reportitem-price">{element.price}</p>
          <span className="reportitem-status">{element.status}</span>
        </li>
      ))}
    </>
  )
}
export default ReportItem
