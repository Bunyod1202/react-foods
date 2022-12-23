import TotalList from "./TotalList/TotalList";
import "./total.scss"
import Report from "./Report/Report";
import { TotalHeader } from "./totolHeader/TotalHeader";

function Total(){
    return(
        <div className="total-wrap">
            <TotalHeader/>
            <TotalList />
            <Report />
        </div>
    )
}
export default Total;