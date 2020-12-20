import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditModal } from '../../store/actions/settingsActions';
import { editExpense, editIncome } from '../../store/actions/financeActions';
import Modal from '../UI/modal/Modal';
import { english, spanish } from '../../languages';

const EditTransaction = ({ item }) => {
  const edit = useSelector((state) => state.settings.modals.edit);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const addTransaction = (e) => {
    e.preventDefault();
    const editedItem = {
      id: item.id,
      type: item.type,
      name,
      description,
      amount,
      date,
    };

    if (item?.type === 'income') {
      dispatch(editIncome(editedItem));
    } else if (item?.type === 'expense') {
      dispatch(editExpense(editedItem));
    }

    setName('');
    setDescription('');
    setAmount('');
    setDate('');

    setTimeout(() => {
      dispatch(toggleEditModal());
    }, 300);
  };

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.edit });
    } else if (language === 'spanish') {
      setContent({ ...spanish.edit });
    }
    // eslint-disable-next-line
  }, [language]);

  return (
    <Modal show={edit.isOpen}>
      <div className="modal__title">
        <h2>
          {content?.title} N-{item?.id?.substring(0, 7)}
        </h2>
        <span onClick={() => dispatch(toggleEditModal())}>x</span>
      </div>
      <form className="modal__info" onSubmit={addTransaction}>
        <div className="modal__setting">
          <label>{content?.name}</label>
          <input
            type="text"
            placeholder={item?.name}
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="modal__setting">
          <label>{content?.description}</label>
          <input
            type="text"
            placeholder={item?.description}
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
            placeholder={item?.amount}
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

export default EditTransaction;
