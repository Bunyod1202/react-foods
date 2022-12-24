import { Select } from '../../ui/select/Select'
import ApexCharts from '../mostorderdeagram/Deagram'
import './mostorderbottom.scss'

export const MostOrderBottom = () => {
  return (
    <div className='most-order-bottom'>
       <div className="most-header">
        <h3 className='most-header-title'>Most Type of Order</h3>
        <Select className="foodsform-select">
          <option value="Today">Today</option>
          <option value="Today">Today</option>
          <option value="Today">Today</option>
        </Select>
      </div>
      <ApexCharts/>
    </div>
  )
}
