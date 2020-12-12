import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FinPalImgLight, FinPalImgDark } from '../../assets/images';
import { SettingsIcon, ArrowIcon } from '../../assets/icons';
import { links } from './components/data/data';
import SidebarLink from './components/sidebarLinks/SidebarLink';
import { toggleSidebar } from '../../store/actions/settingsActions';

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.settings.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <nav className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
      <div className="sidebar__logo">
        <Link to="/">
          <FinPalImgLight />
          {isSidebarOpen && <h1>FinPal</h1>}
        </Link>
      </div>

      <ul className="sidebar__menu">
        {links.map((link) => (
          <SidebarLink key={link.id} {...link} />
        ))}
        <li>
          <div className="sidebar-link btn">
            <SettingsIcon />
            {isSidebarOpen && <p>Settings</p>}
          </div>
        </li>
      </ul>

      <div className="sidebar__btn" onClick={() => dispatch(toggleSidebar())}>
        <ArrowIcon className={isSidebarOpen ? 'arrow open' : 'arrow'} />
      </div>
    </nav>
  );
};

export default Sidebar;
