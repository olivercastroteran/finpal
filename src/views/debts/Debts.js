import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Debts.scss';
import { DataImg } from '../../assets/images';
import { Header } from '../../components';
import DatePicker from '../../components/datePicker/DatePicker';
import AddDebtsForm from './components/addDebtForm/AddDebtForm';
import DebtsTable from './components/debtsTable/DebtsTable';

const Debts = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!uid) history.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  const getDate = (date) => {
    setSelectedDate(date);
  };

  const getSearchTerm = (searchTxt) => {
    setSearchTerm(searchTxt);
  };

  return (
    <div className="debts content">
      <Header getSearchTerm={getSearchTerm} />
      <div className="debts__top">
        <DatePicker getDate={getDate} selectedDate={selectedDate} />
        <AddDebtsForm />
        <DataImg />
      </div>
      <div className="debts__bottom">
        <DebtsTable selectedDate={selectedDate} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Debts;
