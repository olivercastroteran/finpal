import './Sidebar.scss';
import { FinPalImgLight, FinPalImgDark } from '../../assets/images';
import { SettingsIcon, ArrowIcon } from '../../assets/icons';
import { Link } from 'react-router-dom';
import { links } from './components/data/data';
import SidebarLink from './components/sidebarLinks/SidebarLink';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <FinPalImgLight />
        </Link>
      </div>

      <ul className="sidebar__menu">
        {links.map((link) => (
          <SidebarLink key={link.id} {...link} />
        ))}
        <div className="settings--btn">
          <SettingsIcon />
        </div>
      </ul>

      <div className="sidebar__btn">
        <ArrowIcon />
      </div>
    </nav>
  );
};

export default Sidebar;
