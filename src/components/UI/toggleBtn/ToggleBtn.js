import './ToggleBtn.scss';

const ToggleBtn = ({ isToggleOn, changeToggle }) => {
  return (
    <div
      className={isToggleOn ? 'toggle-btn on' : 'toggle-btn'}
      onClick={changeToggle}
    >
      <div className="toggle-btn__ball"></div>
      <div className="toggle-btn__slide"></div>
    </div>
  );
};

export default ToggleBtn;
