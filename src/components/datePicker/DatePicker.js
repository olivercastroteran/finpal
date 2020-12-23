import { useState } from 'react';
import { useSelector } from 'react-redux';
import './DatePicker.scss';

const DatePicker = ({ getDate, selectedDate }) => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getDate(date);
    setDate('');
  };

  return (
    <form
      className={isDarkMode ? 'date-picker dark' : 'date-picker'}
      onSubmit={handleSubmit}
    >
      <input
        type="month"
        className="date"
        min="2000-01"
        max="2100-12"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        required
      />
      <button className="date-picker__btn">
        {language === 'english' ? 'Set Date' : 'Definir Fecha'}
      </button>
      {selectedDate && (
        <span className="date-picker__selected">{selectedDate}</span>
      )}
    </form>
  );
};

export default DatePicker;
