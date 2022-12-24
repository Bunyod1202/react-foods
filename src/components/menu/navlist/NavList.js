import {
  BackIcon,
  BallIcon,
  HomeIcon,
  PersonIcon,
  PieceIcon,
  SmsIcon,
  TuningIcon,
} from '../../../assets/icons/Icons'
import { NavItem } from '../navitem/NavItem'
import './navlist.scss'

export const NavList = () => {
  const navlists = [
    {
      id: 1,
      icon: <HomeIcon />,
      link: '/home',
    },
    {
      id: 2,
      icon: <PersonIcon />,
      link: '/person',
    },
    {
      id: 3,
      icon: <PieceIcon />,
      link: '/piece',
    },
    {
      id: 4,
      icon: <SmsIcon />,
      link: '/sms',
    },
    {
      id: 5,
      icon: <BallIcon />,
      link: '/ball',
    },
    {
      id: 6,
      icon: <TuningIcon />,
      link: '/settings',
    },
    {
      id: 7,
      icon: <BackIcon />,
      link: '/back',
    },
  ]
  return (
    <ul>
      {navlists.map((item) => (
        <NavItem key={item.id} icon={item.icon} link={item.link} />
      ))}
    </ul>
  )
}
