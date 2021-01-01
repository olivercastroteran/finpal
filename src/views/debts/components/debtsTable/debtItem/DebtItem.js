import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatMoney } from '../../../../../shared/utility';
import { removeDebt } from '../../../../../store/actions/financeActions';
import { toggleDebtEditModal } from '../../../../../store/actions/settingsActions';
import './DebtItem.scss';
import { english, spanish } from '../../../../../languages';

const DebtItem = ({ id, type, name, description, amount, date }) => {
  const isLocked = useSelector((state) => state.firebase.profile.isLocked);
  const [difference, setDifference] = useState('');
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const dispatch = useDispatch();

  const debtItem = { id, type, name, description, amount, date };

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.debts.item });
    } else if (language === 'spanish') {
      setContent({ ...spanish.debts.item });
    }
  }, [language]);

  const dateArr = date.split('-');
  const d = new Date();
  const month = '' + (d.getMonth() + 1);
  const year = d.getFullYear();

  const getDifference = useCallback(() => {
    const yearsDiff = year - parseInt(dateArr[0]);
    const monthDiff = month - parseInt(dateArr[1]);

    if (yearsDiff > 1) {
      setDifference('plus-twelve');
    } else if (yearsDiff === 1) {
      const m = parseInt(dateArr[1]);
      if (month - m >= 0) {
        setDifference('plus-twelve');
      } else if (m - month <= 6) {
        setDifference('plus-six');
      }
    } else if (monthDiff >= 6) {
      setDifference('plus-six');
    }
  }, [dateArr, month, year]);

  useEffect(() => {
    getDifference();
  }, [getDifference]);

  return (
    <div className="debt-item">
      <span
        className={
          difference
            ? `debt-item__notification ${difference}`
            : 'debt-item__notification'
        }
      ></span>
      <p>{type === 'toMe' ? `${content?.type1}` : `${content?.type2}`}</p>
      <p>{name}</p>
      <p id="item-desc">{description}</p>
      <p>
        {formatMoney(amount)[0]}
        <small>{formatMoney(amount)[1]}</small>
      </p>
      <p>{date}</p>
      {!isLocked ? (
        <div className="debt-item__actions">
          <button
            className="edit btn"
            onClick={() => dispatch(toggleDebtEditModal(debtItem))}
          >
            {content.btns && content.btns[0]}
          </button>
          <button className="paid btn" onClick={() => dispatch(removeDebt(id))}>
            {content.btns && content.btns[1]}
          </button>
        </div>
      ) : (
        <div className="debt-item__actions">
          <p>{language === 'english' ? 'Locked' : 'Bloqueada'}</p>
        </div>
      )}
    </div>
  );
};

export default DebtItem;
