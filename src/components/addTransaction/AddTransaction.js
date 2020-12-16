import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddTransactionModal } from '../../store/actions/settingsActions';
import Modal from '../UI/modal/Modal';
import { english, spanish } from '../../languages';
import { addIncome, addExpense } from '../../store/actions/financeActions';

const SettingsForm = () => {
  const isAddTransactionOpen = useSelector(
    (state) => state.settings.modals.isAddTransactionOpen
  );
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const [type, setType] = useState('income');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const addTransaction = (e) => {
    e.preventDefault();

    if (type === 'income') {
      dispatch(addIncome({ type, name, description, amount }));
    } else if (type === 'expense') {
      dispatch(addExpense({ type, name, description, amount }));
    }
    setTimeout(() => {
      dispatch(toggleAddTransactionModal());
    }, 300);
  };

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.addTransaction });
    } else if (language === 'spanish') {
      setContent({ ...spanish.addTransaction });
    }
    // eslint-disable-next-line
  }, [language]);

  return (
    <Modal show={isAddTransactionOpen}>
      <div className="modal__title">
        <h2>{content?.title}</h2>
        <span onClick={() => dispatch(toggleAddTransactionModal())}>x</span>
      </div>
      <form className="modal__info" onSubmit={addTransaction}>
        <div className="modal__setting">
          <label>{content?.type}</label>
          <select defaultValue={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">{content.types && content.types[0]}</option>
            <option value="expense">{content.types && content.types[1]}</option>
          </select>
        </div>

        <div className="modal__setting">
          <label>{content?.name}</label>
          <input
            type="text"
            placeholder="Transaction"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="modal__setting">
          <label>{content?.description}</label>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </div>

        <div className="modal__setting">
          <label>{content?.amount}</label>
          <input
            type="number"
            onChange={(e) => setAmount(+e.target.value)}
            value={amount}
            required
          />
        </div>

        <button className="modal__btn">{content?.btn}</button>
      </form>
    </Modal>
  );
};

export default SettingsForm;
