import './settinglist.scss'
import {
  Appereance,
  Restaurant,
  Management,
  Notifications,
  Security,
  About,
} from '../../../assets/icons/Icons'
import { SettingItem } from './SettingsItem/SettingItem'

export const SettingList = () => {
  const settingsInfo = [
    {
      id: 1,
      img: <Appereance />,
      title: 'Appereance',
      text: 'Dark and Light mode, Font size',
      link: 'settings',
    },
    {
      id: 2,
      img: <Restaurant />,
      title: 'Your Restaurant',
      text: 'Dark and Light mode, Font size',
      link: 'restaurant',
    },
    {
      id: 3,
      img: <Management />,
      title: 'Products Management',
      text: 'Manage your product, pricing, etc',
      link: '',
    },
    {
      id: 4,
      img: <Notifications />,
      title: 'Notifications',
      text: 'Customize your notifications',
      link: 'notification',
    },
    {
      id: 5,
      img: <Security />,
      title: 'Security',
      text: 'Configure Password, PIN, etc',
      link: 'security',
    },
    {
      id: 6,
      img: <About />,
      title: 'About Us',
      text: 'Find out more about Posly',
      link: 'about',
    },
  ]
  return (
    <>
      <ul className="setting-list">
        {settingsInfo.map((item) => (
          <SettingItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
            link={item.link}
          />
        ))}
      </ul>
    </>
  )
}
