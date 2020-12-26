import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDebtEditModal } from '../../store/actions/settingsActions';
import { editDebt } from '../../store/actions/financeActions';
import Modal from '../UI/modal/Modal';
import { english, spanish } from '../../languages';

const EditDebt = ({ item }) => {
  const debt = useSelector((state) => state.settings.modals.debt);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const editDebtItem = (e) => {
    e.preventDefault();
    const editedItem = {
      id: item.id,
      type: item.type,
      name,
      description,
      amount,
      date,
    };

    dispatch(editDebt(editedItem));

    setName('');
    setDescription('');
    setAmount('');
    setDate('');

    setTimeout(() => {
      dispatch(toggleDebtEditModal());
    }, 300);
  };

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.editDebt });
    } else if (language === 'spanish') {
      setContent({ ...spanish.editDebt });
    }
    // eslint-disable-next-line
  }, [language]);

  return (
    <Modal show={debt.isOpen}>
      <div className="modal__title">
        <h2>{content?.title}</h2>
        <span onClick={() => dispatch(toggleDebtEditModal())}>x</span>
      </div>
      <form className="modal__info" onSubmit={editDebtItem}>
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

export default EditDebt;
