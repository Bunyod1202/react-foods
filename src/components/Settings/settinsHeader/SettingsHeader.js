import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Select } from '../../ui/select/Select';
import './foodsheader.scss';

export const SettingsHeader = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
  const postproduct = async () => {
    const data = await axios.get("http://172.17.13.155:5000/category")
    const dataFilter = data.data.filter(item => item.id !== 1)
    setData(dataFilter);
  }
  postproduct()

  },[])

  return (
    <div>
      <div className="header-top">
        <div className="content-wrapper">
          <h2 className='content-title'>Products Management</h2>
          <p className='content-text'>Tuesday, 2 Feb 2021</p>
        </div>
        <form>
        <Select className="reportfilter-btn">
            <option value="">Manage Categories</option>
            <option value="">Manage Categories</option>
            <option value="">Manage Categories</option>
          </Select>
          </form>
      </div>
      <div className="header-bottom">
        <ul className='filter-list'>
       
          <li className='filter-item'>
            <NavLink end className={({ isActive }) =>
              isActive ? "filter-link  filter-link-active" : "filter-link"
            }   to="">Hot Dishes</NavLink>
          </li>
          <li className='filter-item'>
            <NavLink className={({ isActive }) =>
              isActive ? "filter-link  filter-link-active" : "filter-link"
            }  to="colddishes">Cold Dishes</NavLink>
          </li>
          <li className='filter-item'>
            <NavLink className={({ isActive }) =>
              isActive ? "filter-link  filter-link-active" : "filter-link"
            }  to="soup">Soup</NavLink>
          </li>
          <li className='filter-item'>
            <NavLink className={({ isActive }) =>
              isActive ? "filter-link  filter-link-active" : "filter-link"
            }  to="grill">Grill</NavLink>
          </li>
          <li className='filter-item'>
            <NavLink className={({ isActive }) =>
              isActive ? "filter-link  filter-link-active" : "filter-link"
            }  to="appetizer">Appetizer</NavLink>
          </li>
          <li className='filter-item'>
            <NavLink className={({ isActive }) =>
              isActive ? "filter-link  filter-link-active" : "filter-link"
            }  to="dessert">Dessert</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

