import './AddBtn.scss';

const AddBtn = ({ text, symbol, clicked }) => {
  return (
    <button className="add-btn" onClick={clicked}>
      {text} <span>{symbol}</span>
    </button>
  );
};

export default AddBtn;
