
import { SettingList } from "../components/Settings/SettingList/SettingList"
import { Route, Routes } from "react-router-dom"
import { Setting } from "../components/Settings/Setting"
export const Settings = () => {
  return (
    <div className="set">
      <div className="header-setings">
        <h3 className='header-setings-title'>Settings</h3>
      </div>
      <div className="setings-wrapper">
        <SettingList />
        <div className="setings-inner">

          <Routes>
            
            <Route path='apperence' element={<p>Settiaaaaaaaaaaaaaaaaaaaaaaaangs</p>} />
            <Route path="restaurant" element={<p>Restaurant</p>} />
            <Route path='settingaddlist/*' element={<Setting />} />
            {/* <Route path='settingaddlist' element={<Navigate to="settingaddlist/*" replace={true} />} /> */}
            <Route path="notification" element={<p>notification</p>} />
            <Route path="security" element={<p>security</p>} />
            <Route path="about" element={<p>about</p>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
