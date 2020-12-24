import './DebtItem.scss';

const DebtItem = () => {
  return (
    <div className="debt-item">
      <p>To Me</p>
      <p>Netflix</p>
      <p id="item-desc">
        Myshel needed money for her netflix account with some extra letters
      </p>
      <p>14.99 $us</p>
      <p>2020-12</p>
      <div className="debt-item__actions">
        <button className="edit btn">Edit</button>
        <button className="paid btn">Paid</button>
      </div>
    </div>
  );
};

export default DebtItem;
