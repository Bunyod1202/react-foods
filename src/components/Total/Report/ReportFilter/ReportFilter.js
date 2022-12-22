import "./reportfilter.scss"
import { Button } from "../../../ui/button/Button"

function ReportFilter() {
  return (
    <>
      <div className="reportfilter-wrap">
        <div className="reportfilter-box">
          <h3 className="reportfilter-title">Order Report</h3>
          <Button className="reportfilter-btn">Filter</Button>
        </div>
        <div className="reportfilter-title-box">
          <h3 className="reportfilter-menu-title">Customer</h3>
          <h3 className="reportfilter-menu-title">Menu</h3>
          <h3 className="reportfilter-menu-title">Total Payment</h3>
          <h3 className="reportfilter-menu-title">Status</h3>
        </div>
      </div>
    </>
  )
}
export default ReportFilter
