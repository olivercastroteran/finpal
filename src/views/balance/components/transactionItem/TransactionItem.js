import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TransactionItem.scss';
import { EditIcon, TrashCanIcon } from '../../../../assets/icons';
import {
  removeExpense,
  removeIncome,
} from '../../../../store/actions/financeActions';
import { toggleEditModal } from '../../../../store/actions/settingsActions';
import { formatMoney } from '../../../../shared/utility';

const TransactionItem = ({ id, type, name, description, amount, date }) => {
  const isLocked = useSelector((state) => state.firebase.profile.isLocked);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const [isItemOpen, setIsItemOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (type === 'income') {
      dispatch(removeIncome(id));
    } else if (type === 'expense') {
      dispatch(removeExpense(id));
    }
  };

  const handleEdit = () => {
    const item = { id, type, name, description, amount, date };

    dispatch(toggleEditModal(item));
  };

  return (
    <div
      className={
        type === 'income'
          ? `transaction-item income ${isDarkMode && 'dark'}`
          : `transaction-item expense  ${isDarkMode && 'dark'}`
      }
    >
      <div
        className="transaction-item__top"
        onClick={() => setIsItemOpen(!isItemOpen)}
      >
        <span>{name}</span>
        <span>
          {formatMoney(amount)[0]}
          <small>{formatMoney(amount)[1]}</small>
        </span>
      </div>

      {isItemOpen && (
        <div className="transaction-item__bottom">
          <p>{description}</p>
          <span>{date}</span>
          {!isLocked && (
            <div className="item-btns">
              <EditIcon className="edit-btn" onClick={handleEdit} />
              <TrashCanIcon className="delete-btn" onClick={handleDelete} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionItem;
