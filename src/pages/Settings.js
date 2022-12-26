
import { SettingList } from "../components/Settings/SettingList/SettingList"
import { Outlet } from "react-router-dom"
export const Settings = () => {
  return (
    <div className="set">
      <div className="header-setings">
        <h3 className='header-setings-title'>Settings</h3>
      </div>
      <div className="setings-wrapper">
        <SettingList />
        <div className="setings-inner">
       <Outlet/>
        </div>
      </div>
    </div>
  )
}
