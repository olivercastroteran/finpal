import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditIcon, TrashCanIcon } from '../../../../../assets/icons';
import { formatMoney } from '../../../../../shared/utility';
import { removeStockItem } from '../../../../../store/actions/financeActions';
import StockItemEdit from '../stockItemEdit/StockItemEdit';

const StockItem = ({ id, code, name, price, quantity }) => {
  const isLocked = useSelector((state) => state.firebase.profile.isLocked);
  const language = useSelector((state) => state.settings.language);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const item = { id, code, name, price, quantity };

  const changeEdit = () => {
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    return (
      <StockItemEdit
        {...item}
        changeEdit={changeEdit}
        isEditingActive={isEditing}
      />
    );
  }

  return (
    <div className="stock-item">
      {!isLocked && (
        <EditIcon
          onClick={changeEdit}
          className={isEditing ? 'stock-edit active' : 'stock-edit'}
        />
      )}
      <p className="code-txt">{code}</p>
      <p>{name}</p>
      <p>
        {formatMoney(price)[0]}
        <small>{formatMoney(price)[1]}</small>
      </p>
      <p>{quantity}</p>
      <p>
        {formatMoney(quantity * price)[0]}
        <small>{formatMoney(quantity * price)[1]}</small>
      </p>
      {!isLocked ? (
        <TrashCanIcon
          className="stock-icon delete"
          onClick={() => dispatch(removeStockItem(id))}
        />
      ) : (
        <p>{language === 'english' ? 'Locked' : 'Bloqueada'}</p>
      )}
    </div>
  );
};

export default StockItem;
