import { MostOrderBottom } from './mosterorderbottom/MostOrderBottom'
import { MosterOrderTop } from './mosterOrderTop/MosterOrderTop'
import './mostorder.scss'


export const MostOrder = () => {
  return (
    <div className='most-order'>
      <MosterOrderTop />
      <MostOrderBottom/>
    </div>
  )
}
