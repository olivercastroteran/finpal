import { useEffect, useState } from 'react';
import './Balance.scss';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import AddBtn from '../../components/UI/addBtn/AddBtn';
import { TransactionItem } from './components';
import { english, spanish } from '../../languages';
import { toggleAddTransactionModal } from '../../store/actions/settingsActions';

const Balance = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const finance = useSelector((state) => state.finance);
  const [content, setContent] = useState({});
  const dispatch = useDispatch();

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
            {finance?.incomes?.map((income) => (
              <TransactionItem key={income.id} {...income} />
            ))}
          </div>
        </div>

        <div className="balance__expenses">
          <h2>{content?.expenses}</h2>
          <div className="balance__expenses--list">
            {finance?.expenses?.map((expense) => (
              <TransactionItem key={expense.id} {...expense} />
            ))}
          </div>
        </div>
      </div>

      <AddBtn
        text={content?.btnText}
        symbol="+"
        clicked={() => dispatch(toggleAddTransactionModal())}
      />
    </div>
  );
};

export default Balance;
