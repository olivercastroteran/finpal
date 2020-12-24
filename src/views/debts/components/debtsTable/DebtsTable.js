import './DebtsTable.scss';

const DebtsTable = () => {
  return (
    <div className="debts-table">
      <div className="debts-table__header">
        <h3>Type</h3>
        <h3>Name</h3>
        <h3 id="desc">description</h3>
        <h3>Amount</h3>
        <h3>Date</h3>
        <h3>Actions</h3>
      </div>
      <div className="debts-table__content"></div>
    </div>
  );
};

export default DebtsTable;
