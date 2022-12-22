import TotalList from "./TotalList/TotalList";
import "./total.scss"
import Report from "./Report/Report";

function Total(){
    return(
        <div className="total-wrap">
            <TotalList />
            <Report />
        </div>
    )
}
export default Total;