import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SidebarLink.scss';

const SidebarLink = ({ url, text, icon }) => {
  const isSidebarOpen = useSelector((state) => state.settings.isSidebarOpen);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);

  return (
    <li>
      <NavLink
        exact
        to={url}
        className={
          text === 'Dashboard' || 'Menu'
            ? `sidebar-link dashboard-icon ${isDarkMode && 'dark'}`
            : `sidebar-link ${isDarkMode && 'dark'}`
        }
      >
        <div className="sidebar-link__icon">{icon}</div>
        {isSidebarOpen && <p className="sidebar-link__text">{text}</p>}
      </NavLink>
    </li>
  );
};

export default SidebarLink;
