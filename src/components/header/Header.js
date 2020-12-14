import { useEffect, useState } from 'react';
import './Header.scss';
import { useSelector } from 'react-redux';
import { SearchIcon, UserIcon } from '../../assets/icons';
import { english, spanish } from '../../languages';
import { Link } from 'react-router-dom';

const Header = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (language === 'english') {
      setText(english.header);
    } else if (language === 'spanish') {
      setText(spanish.header);
    }
    // eslint-disable-next-line
  }, [language]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div className={isDarkMode ? 'header dark' : 'header'}>
      <form className="header__search" onSubmit={handleSearch}>
        <SearchIcon />
        <input
          type="text"
          placeholder={text}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Link to="/user" className="header__user">
        <span>Oliver CT</span>
        <UserIcon />
      </Link>
    </div>
  );
};

export default Header;
