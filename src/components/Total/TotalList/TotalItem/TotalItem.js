
import "./totalitem.scss"

function TotalItem({svg,percent,text,title}) {
  

  return (
    <>
      
        <li className="total-item" >
          <div className="total-box">
            {svg}
            <span className="total-percent">{percent}</span>
          </div>
          <p className="total-text">{text}</p>
          <p className="total-title">{title}</p>
        </li>
   
    </>
  )
}
export default TotalItem;
