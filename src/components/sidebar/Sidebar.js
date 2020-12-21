import { useEffect, useState } from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FinPalImgLight, FinPalImgDark } from '../../assets/images';
import { SettingsIcon, ArrowIcon } from '../../assets/icons';
import { links } from './components/data/data';
import SidebarLink from './components/sidebarLinks/SidebarLink';
import {
  toggleSettingsModal,
  toggleSidebar,
} from '../../store/actions/settingsActions';
import { english, spanish } from '../../languages';

const Sidebar = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const isSidebarOpen = useSelector((state) => state.settings.isSidebarOpen);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (language === 'english') {
      setContent([...english.sidebar]);
    } else if (language === 'spanish') {
      setContent([...spanish.sidebar]);
    }
    // eslint-disable-next-line
  }, [language]);

  return (
    <nav className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
      <div className="sidebar__logo">
        <Link to="/">
          {isDarkMode ? <FinPalImgDark /> : <FinPalImgLight />}
          {isSidebarOpen && <h1>FinPal</h1>}
        </Link>
      </div>

      <ul className="sidebar__menu">
        {auth.uid &&
          links.map((link, i) => (
            <SidebarLink key={link.id} {...link} text={content && content[i]} />
          ))}
        <li onClick={() => dispatch(toggleSettingsModal())}>
          <div className="sidebar-link btn">
            <SettingsIcon />
            {isSidebarOpen && (
              <p>{language === 'english' ? 'Settings' : 'Ajustes'}</p>
            )}
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
