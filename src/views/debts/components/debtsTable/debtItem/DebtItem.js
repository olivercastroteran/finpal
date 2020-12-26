import { formatMoney } from '../../../../../shared/utility';
import './DebtItem.scss';

const DebtItem = ({ type, name, description, amount, date }) => {
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
        <button className="edit btn">Edit</button>
        <button className="paid btn">Paid</button>
      </div>
    </div>
  );
};

export default DebtItem;
