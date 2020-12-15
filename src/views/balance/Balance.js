import { useEffect, useState } from 'react';
import './Balance.scss';
import Header from '../../components/header/Header';
import { useSelector } from 'react-redux';
import AddBtn from '../../components/UI/addBtn/AddBtn';
import { english, spanish } from '../../languages';

const Balance = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.balance });
    } else if (language === 'spanish') {
      setContent({ ...spanish.balance });
    }
  }, [language]);

  return (
    <div className={isDarkMode ? 'balance content dark' : 'balance content'}>
      <Header />
      <div className="balance__lists">
        <div className="balance__incomes">
          <h2>{content?.incomes}</h2>
          <div className="balance__incomes--list">
            <h4>Item</h4>
          </div>
        </div>

        <div className="balance__expenses">
          <h2>{content?.expenses}</h2>
          <div className="balance__expenses--list">item</div>
        </div>
      </div>

      <AddBtn text={content?.btnText} symbol="+" />
    </div>
  );
};

export default Balance;
