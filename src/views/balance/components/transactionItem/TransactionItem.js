import { useState } from 'react';
import { useSelector } from 'react-redux';
import './TransactionItem.scss';
import { TrashCanIcon } from '../../../../assets/icons';

const TransactionItem = ({ type, name, description, amount }) => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const [isItemOpen, setIsItemOpen] = useState(false);

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
        <span>$ {amount}</span>
      </div>

      {isItemOpen && (
        <div className="transaction-item__bottom">
          <p>{description}</p>
          <TrashCanIcon className="delete-btn" />
        </div>
      )}
    </div>
  );
};

export default TransactionItem;
