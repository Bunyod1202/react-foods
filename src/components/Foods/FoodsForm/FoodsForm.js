import { Select } from "../../ui/select/Select";
import "./foodsform.scss"

function FoodsForm(){
    return(
        <div className="foodsform-box">
            <h2 className="foodsform-title">Choose Disshes</h2>
            <form >
                <Select className="foodsform-select">
                    <option >Dine in</option>
                    <option >Dine in</option>
                    <option >Dine in</option>
                    <option >Dine in</option>
                    <option >Dine in</option>
                </Select>
            </form>
        </div>
    )
}
export default FoodsForm;