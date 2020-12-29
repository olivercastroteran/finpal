import '../../../../shared/FormFormat.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { english, spanish } from '../../../../languages';
import { addStockItem } from '../../../../store/actions/financeActions';

const AddStockForm = () => {
  const isLocked = useSelector((state) => state.firebase.profile.isLocked);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const dispatch = useDispatch();
  const [stockItem, setStockItem] = useState({
    id: uuidv4(),
    code: '',
    name: '',
    price: 0,
    quantity: 0,
  });

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.stock.addForm });
    } else if (language === 'spanish') {
      setContent({ ...spanish.stock.addForm });
    }
  }, [language]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(stockItem);
    dispatch(addStockItem(stockItem));
    setStockItem({
      id: uuidv4(),
      code: '',
      name: '',
      price: 0,
      quantity: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'price') {
      setStockItem({ ...stockItem, price: +e.target.value });
      return;
    } else if (name === 'quantity') {
      setStockItem({ ...stockItem, quantity: +e.target.value });
    }
    setStockItem({ ...stockItem, [name]: value });
  };

  return (
    <form
      className={isDarkMode ? 'form-format dark' : 'form-format'}
      onSubmit={handleSubmit}
    >
      <div className="input-field">
        <input
          type="text"
          placeholder={content?.code}
          id="codeItem"
          autoComplete="off"
          name="code"
          onChange={handleChange}
          value={stockItem.code}
          required
        />
        <label htmlFor="codeItem">{content?.code}</label>
      </div>

      <div className="input-field">
        <input
          type="text"
          placeholder={content?.name}
          id="nameItem"
          autoComplete="off"
          name="name"
          onChange={handleChange}
          value={stockItem.name}
          required
        />
        <label htmlFor="nameItem">{content?.name}</label>
      </div>

      <div className="input-field">
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder={content?.price}
          name="price"
          onChange={handleChange}
          value={stockItem.price}
          required
        />
        <label htmlFor="debtDescription">{content?.price}</label>
      </div>

      <div className="input-field">
        <input
          type="number"
          min="1"
          step="1"
          placeholder={content?.quantity}
          name="quantity"
          onChange={handleChange}
          value={stockItem.quantity}
          required
        />
        <label htmlFor="debtDescription">{content?.quantity}</label>
      </div>

      {!isLocked ? (
        <button className="form-format__btn">{content?.btn}</button>
      ) : (
        <p>{language === 'english' ? 'App Locked' : 'App Bloqueada'}</p>
      )}
    </form>
  );
};

export default AddStockForm;
