import ReportFilter from "./ReportFilter/ReportFilter"
import "./report.scss"
import ReportItem from "./ReportItem/ReporItem"

function Report() {
  return (
    <>
      <div className="report-wrap">
        <ReportFilter />
        <ul className="reportlist">
          <ReportItem />
        </ul>
      </div>
    </>
  )
}
export default Report
