import "./reportfilter.scss"

import { Select } from "../../../ui/select/Select"

function ReportFilter() {
  return (
    <>
      <div className="reportfilter-wrap">
        <div className="reportfilter-box">
          <h3 className="reportfilter-title">Order Report</h3>
          <Select className="reportfilter-btn">
            <option value="">Filter</option>
            <option value="">wefsed</option>
            <option value="">fwefwef</option>
          </Select>
        </div>
        <div className="reportfilter-title-box">
          <p className="reportfilter-menu-title">Customer</p>
          <p className="reportfilter-menu-title">Menu</p>
          <p className="reportfilter-menu-title">Total Payment</p>
          <p className="reportfilter-menu-title">Status</p>
        </div>
      </div>
    </>
  )
}
export default ReportFilter
