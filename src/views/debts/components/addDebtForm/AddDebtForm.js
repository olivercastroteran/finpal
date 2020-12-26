import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import '../../../../shared/FormFormat.scss';
import { addDebt } from '../../../../store/actions/financeActions';

const AddDebtsForm = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const dispatch = useDispatch();
  const [debt, setDebt] = useState({
    id: uuidv4(),
    type: 'toMe',
    name: '',
    description: '',
    amount: '',
    date: '',
  });

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
          <option value="toMe">To Me</option>
          <option value="fromMe">From Me</option>
        </select>
      </div>

      <div className="input-field">
        <input
          type="text"
          placeholder="Debt Name"
          id="debtName"
          autoComplete="off"
          name="name"
          onChange={handleChange}
          value={debt.name}
          required
        />
        <label htmlFor="debtName">Debt Name</label>
      </div>

      <div className="input-field">
        <input
          type="text"
          placeholder="Description"
          id="debtDescription"
          autoComplete="off"
          name="description"
          onChange={handleChange}
          value={debt.description}
          required
        />
        <label htmlFor="debtDescription">Description</label>
      </div>

      <div className="input-field">
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Amount"
          name="amount"
          onChange={handleChange}
          value={debt.amount}
          required
        />
        <label htmlFor="debtDescription">Amount</label>
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

      <button className="form-format__btn">Add</button>
    </form>
  );
};

export default AddDebtsForm;
