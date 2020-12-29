import { useSelector } from 'react-redux';
import { EditIcon } from '../../../../../assets/icons';

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

  return (
    <div className="stock-item">
      {!isLocked && (
        <EditIcon
          onClick={changeEdit}
          className={isEditingActive ? 'stock-edit active' : 'stock-edit'}
        />
      )}
      <p>{code}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <p>{(price * quantity).toFixed(2)}</p>
      <p>Edit</p>
    </div>
  );
};

export default StockItemEdit;
