import { useEffect, useState } from 'react';
import './Balance.scss';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import AddBtn from '../../components/UI/addBtn/AddBtn';
import { TransactionItem } from './components';
import { english, spanish } from '../../languages';
import { toggleAddModal } from '../../store/actions/settingsActions';
import { useHistory } from 'react-router-dom';
import DatePicker from '../../components/datePicker/DatePicker';
import { TreasureImg } from '../../assets/images';

const Balance = () => {
  const isLocked = useSelector((state) => state.firebase.profile.isLocked);
  const uid = useSelector((state) => state.firebase.auth.uid);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const finance = useSelector((state) => state.finance);
  const [content, setContent] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!uid) history.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.balance });
    } else if (language === 'spanish') {
      setContent({ ...spanish.balance });
    }
  }, [language]);

  const getDate = (date) => {
    setSelectedDate(date);
  };

  const getSearchTerm = (searchTxt) => {
    setSearchTerm(searchTxt);
  };

  let searchArrInc = finance?.incomes;
  let searchArrExp = finance?.expenses;

  if (searchTerm !== '') {
    searchArrInc = searchArrInc.filter((inc) => inc?.name.includes(searchTerm));
    searchArrExp = searchArrExp.filter((exp) => exp?.name.includes(searchTerm));
  }

  return (
    <div className={isDarkMode ? 'balance content dark' : 'balance content'}>
      <Header getSearchTerm={getSearchTerm} />

      <DatePicker getDate={getDate} selectedDate={selectedDate} />

      <div className="balance__lists">
        <div className="balance__incomes">
          <h2>{content?.incomes}</h2>
          <div className="balance__incomes--list">
            {!selectedDate ||
            selectedDate === 'Show All' ||
            selectedDate === 'Mostrar Todo'
              ? searchArrInc?.map((income) => (
                  <TransactionItem key={income.id} {...income} />
                ))
              : searchArrInc
                  ?.filter((inc) => inc.date === selectedDate)
                  .map((inc) => <TransactionItem key={inc.id} {...inc} />)}
          </div>
        </div>

        <div className="balance__expenses">
          <h2>{content?.expenses}</h2>
          <div className="balance__expenses--list">
            {!selectedDate ||
            selectedDate === 'Show All' ||
            selectedDate === 'Mostrar Todo'
              ? searchArrExp?.map((expense) => (
                  <TransactionItem key={expense.id} {...expense} />
                ))
              : searchArrExp
                  ?.filter((exp) => exp.date === selectedDate)
                  .map((exp) => <TransactionItem key={exp.id} {...exp} />)}
          </div>
        </div>

        <TreasureImg className="treasure-img" />
      </div>

      {!isLocked && (
        <AddBtn
          text={content?.btnText}
          symbol="+"
          clicked={() => dispatch(toggleAddModal())}
        />
      )}
    </div>
  );
};

export default Balance;
