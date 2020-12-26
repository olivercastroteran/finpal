import { useSelector } from 'react-redux';
import DebtItem from './debtItem/DebtItem';
import './DebtsTable.scss';

const DebtsTable = ({ selectedDate }) => {
  const debts = useSelector((state) => state.finance.debts);
  // const data = {
  //   type: 'toMe',
  //   name: 'Netflix',
  //   description: 'Myshel needed money for Netflix account',
  //   amount: 14.99,
  //   date: '2020-12',
  // };
  return (
    <div className="debts-table">
      <div className="debts-table__header">
        <h3>Type</h3>
        <h3>Name</h3>
        <h3 id="desc">Description</h3>
        <h3>Amount</h3>
        <h3>Date</h3>
        <h3>Actions</h3>
      </div>
      <div className="debts-table__content">
        {!selectedDate ||
        selectedDate === 'Show All' ||
        selectedDate === 'Mostrar Todo'
          ? debts?.map((debt) => <DebtItem key={debt.id} {...debt} />)
          : debts
              ?.filter((debt) => debt.date === selectedDate)
              .map((debt) => <DebtItem key={debt.id} {...debt} />)}
        {/* <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />2
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} />
        <DebtItem {...data} /> */}
      </div>
    </div>
  );
};

export default DebtsTable;
