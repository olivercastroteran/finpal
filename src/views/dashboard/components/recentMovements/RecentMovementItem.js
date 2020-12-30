import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './RecentMovements.scss';

const RecentMovementItem = ({ type, info }) => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const [msg, setMsg] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (type[0] === 'income') {
      let newMsg = '';
      if (type[1] === 'added') {
        language === 'english'
          ? (newMsg = 'Income Added')
          : (newMsg = 'Ingreso Añadido');
        setMsg(newMsg);
      } else if (type[1] === 'removed') {
        language === 'english'
          ? (newMsg = 'Income Removed')
          : (newMsg = 'Ingreso Removido');
        setMsg(newMsg);
      } else if (type[1] === 'edited') {
        language === 'english'
          ? (newMsg = 'Income Edited')
          : (newMsg = 'Ingreso Editado');
        setMsg(newMsg);
      }
    } else if (type[0] === 'expense') {
      let newMsg = '';
      if (type[1] === 'added') {
        language === 'english'
          ? (newMsg = 'Expense Added')
          : (newMsg = 'Gasto Añadido');
        setMsg(newMsg);
      } else if (type[1] === 'removed') {
        language === 'english'
          ? (newMsg = 'Expense Removed')
          : (newMsg = 'Gasto Removido');
        setMsg(newMsg);
      } else if (type[1] === 'edited') {
        language === 'english'
          ? (newMsg = 'Expense Edited')
          : (newMsg = 'Gasto Editado');
        setMsg(newMsg);
      }
    } else if (type[0] === 'debt') {
      let newMsg = '';
      if (type[1] === 'added') {
        language === 'english'
          ? (newMsg = 'Debt Added')
          : (newMsg = 'Deuda Añadida');
        setMsg(newMsg);
      } else if (type[1] === 'removed') {
        language === 'english'
          ? (newMsg = 'Debt Removed')
          : (newMsg = 'Deuda Removida');
        setMsg(newMsg);
      } else if (type[1] === 'edited') {
        language === 'english'
          ? (newMsg = 'Debt Edited')
          : (newMsg = 'Deuda Editada');
        setMsg(newMsg);
      }
    } else if (type[0] === 'stock') {
      let newMsg = '';
      if (type[1] === 'added') {
        language === 'english'
          ? (newMsg = 'Stock Item Added')
          : (newMsg = 'Stock Item Añadido');
        setMsg(newMsg);
      } else if (type[1] === 'removed') {
        language === 'english'
          ? (newMsg = 'Stock Item Removed')
          : (newMsg = 'Stock Item Removido');
        setMsg(newMsg);
      } else if (type[1] === 'edited') {
        language === 'english'
          ? (newMsg = 'Stock Item Edited')
          : (newMsg = 'Stock Item Editado');
        setMsg(newMsg);
      }
    }
  }, [type, language]);

  let classes = 'recent-movements__item ';

  switch (type[0]) {
    case 'income':
      classes += 'income';
      break;
    case 'expense':
      classes += 'expense';
      break;
    case 'debt':
      classes += 'debt';
      break;
    case 'stock':
      classes += 'stock';
      break;
    default:
      break;
  }

  return (
    <div
      className={isDarkMode ? classes + ' dark' : classes}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p>{msg}</p>
      {isOpen && (
        <p className="msg-info">
          <span>{language === 'english' ? 'name:' : 'nombre:'}</span>{' '}
          {info.name}
        </p>
      )}
    </div>
  );
};

export default RecentMovementItem;
