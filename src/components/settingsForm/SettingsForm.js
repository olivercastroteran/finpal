import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleDarkMode,
  toggleModal,
} from '../../store/actions/settingsActions';
import Modal from '../UI/modal/Modal';
import ToggleBtn from '../UI/toggleBtn/ToggleBtn';

const SettingsForm = () => {
  const isModalOpen = useSelector((state) => state.settings.isModalOpen);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const dispatch = useDispatch();
  const [language, setLanguage] = useState('english');

  const saveSettingsHandler = (e) => {
    e.preventDefault();
    console.log(language);
  };

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <Modal show={isModalOpen}>
      <div className="modal__title">
        <h2>Settings</h2>
        <span onClick={() => dispatch(toggleModal())}>x</span>
      </div>
      <form className="modal__info" onSubmit={saveSettingsHandler}>
        <div className="modal__setting">
          <label>Language</label>
          <select
            //defaultValue={querySettings?.difficulty}
            onChange={handleLanguage}
          >
            <option value="english">English</option>
            <option value="español">Español</option>
          </select>
        </div>
        <div className="modal__setting">
          <label>Dark Mode</label>
          <ToggleBtn
            isToggleOn={isDarkMode}
            changeToggle={() => dispatch(toggleDarkMode())}
          />
        </div>
        <button className="modal__btn">SAVE</button>
      </form>
    </Modal>
  );
};

export default SettingsForm;
