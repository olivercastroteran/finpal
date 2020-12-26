import { useDispatch } from 'react-redux';
import { formatMoney } from '../../../../../shared/utility';
import { removeDebt } from '../../../../../store/actions/financeActions';
import { toggleDebtEditModal } from '../../../../../store/actions/settingsActions';
import './DebtItem.scss';

const DebtItem = ({ id, type, name, description, amount, date }) => {
  const dispatch = useDispatch();

  const debtItem = { id, type, name, description, amount, date };

  return (
    <div className="debt-item">
      <p>{type === 'toMe' ? 'To Me' : 'From Me'}</p>
      <p>{name}</p>
      <p id="item-desc">{description}</p>
      <p>
        {formatMoney(amount)[0]}
        <small>{formatMoney(amount)[1]}</small>
      </p>
      <p>{date}</p>
      <div className="debt-item__actions">
        <button
          className="edit btn"
          onClick={() => dispatch(toggleDebtEditModal(debtItem))}
        >
          Edit
        </button>
        <button className="paid btn" onClick={() => dispatch(removeDebt(id))}>
          Paid
        </button>
      </div>
    </div>
  );
};

export default DebtItem;
