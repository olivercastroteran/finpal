import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditIcon, SaveIcon } from '../../../../../assets/icons';
import { formatMoney } from '../../../../../shared/utility';
import { editStockItem } from '../../../../../store/actions/financeActions';

const StockItemEdit = ({
  id,
  code,
  name,
  price,
  quantity,
  changeEdit,
  isEditingActive,
}) => {
  const isLocked = useSelector((state) => state.firebase.profile.isLocked);
  const dispatch = useDispatch();
  const [editedItem, setEditedItem] = useState({
    id,
    code,
    name,
    price,
    quantity,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editStockItem(editedItem));
    changeEdit();
  };

  return (
    <form className="stock-item" onSubmit={handleSubmit}>
      {!isLocked && (
        <EditIcon
          onClick={changeEdit}
          className={isEditingActive ? 'stock-edit active' : 'stock-edit'}
        />
      )}

      <div className="input-field code-txt">
        <input
          type="text"
          value={editedItem.code}
          onChange={(e) =>
            setEditedItem({ ...editedItem, code: e.target.value })
          }
        />
      </div>

      <div className="input-field">
        <input
          type="text"
          value={editedItem.name}
          onChange={(e) =>
            setEditedItem({ ...editedItem, name: e.target.value })
          }
        />
      </div>

      <div className="input-field">
        <input
          type="number"
          min="0"
          step="0.01"
          value={editedItem.price}
          onChange={(e) =>
            setEditedItem({ ...editedItem, price: e.target.value })
          }
        />
      </div>
      <div className="input-field">
        <span
          className="input-field__btn"
          onClick={() =>
            setEditedItem({ ...editedItem, quantity: editedItem.quantity - 1 })
          }
        >
          &#x2212;
        </span>
        <p>{editedItem.quantity}</p>
        <span
          className="input-field__btn"
          onClick={() =>
            setEditedItem({ ...editedItem, quantity: +editedItem.quantity + 1 })
          }
        >
          +
        </span>
      </div>
      <p>
        {formatMoney(editedItem.price * editedItem.quantity)[0]}
        <small>{formatMoney(editedItem.price * editedItem.quantity)[1]}</small>
      </p>
      <button className="stock-item__edit-btn">
        <SaveIcon className="stock-icon save" />
      </button>
    </form>
  );
};

export default StockItemEdit;
