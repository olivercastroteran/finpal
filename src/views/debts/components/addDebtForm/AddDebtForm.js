import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import '../../../../shared/FormFormat.scss';
import { addDebt } from '../../../../store/actions/financeActions';
import { english, spanish } from '../../../../languages';

const AddDebtsForm = () => {
  const isLocked = useSelector((state) => state.firebase.profile.isLocked);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const dispatch = useDispatch();
  const [debt, setDebt] = useState({
    id: uuidv4(),
    type: 'toMe',
    name: '',
    description: '',
    amount: '',
    date: '',
  });

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.debts.addForm });
    } else if (language === 'spanish') {
      setContent({ ...spanish.debts.addForm });
    }
  }, [language]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(debt);
    dispatch(addDebt(debt));
    setDebt({
      id: uuidv4(),
      type: 'toMe',
      name: '',
      description: '',
      amount: '',
      date: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'amount') {
      setDebt({ ...debt, amount: +e.target.value });
      return;
    }
    setDebt({ ...debt, [name]: value });
  };

  return (
    <form
      className={isDarkMode ? 'form-format dark' : 'form-format'}
      onSubmit={handleSubmit}
    >
      <div className="input-field">
        <select
          name="type"
          value={debt.type}
          style={{ width: 'fit-content', transform: 'translateY(-2px)' }}
          onChange={handleChange}
        >
          <option value="toMe">{content.types && content?.types[0]}</option>
          <option value="fromMe">{content.types && content?.types[1]}</option>
        </select>
      </div>

      <div className="input-field">
        <input
          type="text"
          placeholder={content?.name}
          id="debtName"
          autoComplete="off"
          name="name"
          onChange={handleChange}
          value={debt.name}
          required
        />
        <label htmlFor="debtName">{content?.name}</label>
      </div>

      <div className="input-field">
        <input
          type="text"
          placeholder={content?.description}
          id="debtDescription"
          autoComplete="off"
          name="description"
          onChange={handleChange}
          value={debt.description}
          required
        />
        <label htmlFor="debtDescription">{content?.description}</label>
      </div>

      <div className="input-field">
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder={content?.amount}
          name="amount"
          onChange={handleChange}
          value={debt.amount}
          required
        />
        <label htmlFor="debtDescription">{content?.amount}</label>
      </div>

      <div className="input-field">
        <input
          style={{ width: 'fit-content', transform: 'translateY(-4px)' }}
          type="month"
          min="2000-01"
          max="2100-12"
          name="date"
          onChange={handleChange}
          value={debt.date}
          required
        />
      </div>

      {!isLocked ? (
        <button className="form-format__btn">{content?.btn}</button>
      ) : (
        <p>{language === 'english' ? 'App Locked' : 'App Bloqueada'}</p>
      )}
    </form>
  );
};

export default AddDebtsForm;
