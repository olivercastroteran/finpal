import './ToggleBtn.scss';

const ToggleBtn = ({ isToggleOn, changeToggle }) => {
  return (
    <div className={isToggleOn ? 'toggle-btn on' : 'toggle-btn'}>
      <div className="toggle-btn__ball" onClick={changeToggle}></div>
      <div className="toggle-btn__slide"></div>
    </div>
  );
};

export default ToggleBtn;
