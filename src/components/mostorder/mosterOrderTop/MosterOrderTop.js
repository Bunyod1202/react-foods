import './mosterordertop.scss'
import {Select} from '../../ui/select/Select'
import { MostOrderList } from '../mostorderlist/MostOrderList'
import {Button} from '../../ui/button/Button'
export const MosterOrderTop = () => {
  return (
    <div className='most-top'>
      <div className="most-header">
        <h3 className='most-header-title'>Most Ordered</h3>
        <Select className="foodsform-select">
          <option value="Today">Today</option>
          <option value="Today">Today</option>
          <option value="Today">Today</option>
        </Select>
      </div> 
      <MostOrderList />
      <Button className="btn-view"  > View All</Button>
    </div>
  )
}
