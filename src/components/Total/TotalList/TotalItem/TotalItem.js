
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
          <h3 className="total-title">{title}</h3>
        </li>
   
    </>
  )
}
export default TotalItem;
