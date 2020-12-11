import { NavLink } from 'react-router-dom';
import './SidebarLink.scss';

const SidebarLink = ({ id, url, text, icon }) => {
  return (
    <li>
      <NavLink
        exact
        to={url}
        className={
          text === 'Dashboard' ? 'sidebar-link dashboard-icon' : 'sidebar-link'
        }
      >
        <div className="sidebar-link__icon">{icon}</div>
        {/* <p className="sidebar-link__text">{text}</p> */}
      </NavLink>
    </li>
  );
};

export default SidebarLink;
