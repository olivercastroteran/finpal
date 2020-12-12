import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SidebarLink.scss';

const SidebarLink = ({ id, url, text, icon }) => {
  const isSidebarOpen = useSelector((state) => state.settings.isSidebarOpen);

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
        {isSidebarOpen && <p className="sidebar-link__text">{text}</p>}
      </NavLink>
    </li>
  );
};

export default SidebarLink;
