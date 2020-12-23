import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Debts.scss';
import { DataImg } from '../../assets/images';
import { Header } from '../../components';
import DatePicker from '../../components/datePicker/DatePicker';
import AddDebtsForm from './components/addDebtForm/AddDebtForm';

const Debts = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    if (!uid) history.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  const getDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="debts content">
      <Header />
      <div className="debts__top">
        <DatePicker getDate={getDate} selectedDate={selectedDate} />
        <AddDebtsForm />
        <DataImg />
      </div>
    </div>
  );
};

export default Debts;
