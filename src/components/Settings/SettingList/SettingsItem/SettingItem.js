import React from 'react'
import './settingitem.scss'
import { NavLink } from 'react-router-dom'

export const SettingItem = ({ img, title, text, link }) => {
  return (
    <li className="setting-item">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'setting-link setting-link-active' : 'setting-link'
        }
        end
        to={link}
      >
        {img}
        <div className="setting-box">
          <h3 className="setting-title">{title}</h3>
          <p className="setting-text">{text}</p>
        </div>
      </NavLink>
    </li>
  )
}
