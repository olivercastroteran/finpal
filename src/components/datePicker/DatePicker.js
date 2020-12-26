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
        {language === 'english' ? 'Select Date' : 'Definir Fecha'}
      </button>
      <button
        className="date-picker__btn"
        type="button"
        onClick={() =>
          getDate(language === 'english' ? 'Show All' : 'Mostrar Todo')
        }
      >
        {language === 'english' ? 'Show All' : 'Mostrar Todo'}
      </button>
      {selectedDate && (
        <span className="date-picker__selected">{selectedDate}</span>
      )}
    </form>
  );
};

export default DatePicker;
