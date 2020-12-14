import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeLanguage,
  toggleDarkMode,
  toggleModal,
} from '../../store/actions/settingsActions';
import Modal from '../UI/modal/Modal';
import ToggleBtn from '../UI/toggleBtn/ToggleBtn';
import { english, spanish } from '../../languages';

const SettingsForm = () => {
  const isModalOpen = useSelector((state) => state.settings.isModalOpen);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const dispatch = useDispatch();

  const saveSettingsHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      dispatch(toggleModal());
    }, 300);
  };

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.settings });
    } else if (language === 'spanish') {
      setContent({ ...spanish.settings });
    }
    // eslint-disable-next-line
  }, [language]);

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <Modal show={isModalOpen}>
      <div className="modal__title">
        <h2>{content?.title}</h2>
        <span onClick={() => dispatch(toggleModal())}>x</span>
      </div>
      <form className="modal__info" onSubmit={saveSettingsHandler}>
        <div className="modal__setting">
          <label>{content?.language}</label>
          <select
            //defaultValue={querydifficulty}
            onChange={handleLanguage}
          >
            <option value="english">English</option>
            <option value="spanish">Español</option>
          </select>
        </div>
        <div className="modal__setting">
          <label>{content?.darkMode}</label>
          <ToggleBtn
            isToggleOn={isDarkMode}
            changeToggle={() => dispatch(toggleDarkMode())}
          />
        </div>
        <button className="modal__btn">{content?.btn}</button>
      </form>
    </Modal>
  );
};

export default SettingsForm;
