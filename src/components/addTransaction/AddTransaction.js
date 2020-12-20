import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { toggleAddModal } from '../../store/actions/settingsActions';
import Modal from '../UI/modal/Modal';
import { english, spanish } from '../../languages';
import { addIncome, addExpense } from '../../store/actions/financeActions';

const AddTransaction = () => {
  const isAddOpen = useSelector((state) => state.settings.modals.isAddOpen);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const [type, setType] = useState('income');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const addTransaction = (e) => {
    e.preventDefault();
    const item = {
      id: uuidv4(),
      type,
      name,
      description,
      amount,
      date,
    };

    if (type === 'income') {
      dispatch(addIncome(item));
    } else if (type === 'expense') {
      dispatch(addExpense(item));
    }

    setName('');
    setDescription('');
    setAmount(0);
    setDate('');

    setTimeout(() => {
      dispatch(toggleAddModal());
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
    <Modal show={isAddOpen}>
      <div className="modal__title">
        <h2>{content?.title}</h2>
        <span onClick={() => dispatch(toggleAddModal())}>x</span>
      </div>
      <form className="modal__info" onSubmit={addTransaction}>
        <div className="modal__setting">
          <label>{content?.type}</label>
          <select
            defaultValue="income"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">{content.types && content.types[0]}</option>
            <option value="expense">{content.types && content.types[1]}</option>
          </select>
        </div>

        <div className="modal__setting">
          <label>{content?.name}</label>
          <input
            type="text"
            placeholder={content?.name}
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="modal__setting">
          <label>{content?.description}</label>
          <input
            type="text"
            placeholder={content?.description}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </div>

        <div className="modal__setting">
          <label>{content?.amount}</label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder={content?.amount}
            onChange={(e) => setAmount(+e.target.value)}
            value={amount}
            required
          />
        </div>

        <div className="modal__setting">
          <label>{content?.date}</label>
          <input
            type="month"
            min="2000-01"
            max="2100-12"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </div>

        <button className="modal__btn">{content?.btn}</button>
      </form>
    </Modal>
  );
};

export default AddTransaction;
