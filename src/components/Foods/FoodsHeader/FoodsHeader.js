import { NavLink } from 'react-router-dom';
import { Input } from '../../ui/input/Input';
import './foodsheader.scss';

export const FoodsHeader = () => {
  return (
    <div>
      <div className="header-top">
        <div className="content-wrapper">
          <h2 className='content-title'>Jaegar Resto  </h2>
          <p className='content-text'>Tuesday, 2 Feb 2021</p>
        </div>
        <form>
          <Input className='input-search' placeholder='Search for food, coffe, etc..' type="search" />
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

