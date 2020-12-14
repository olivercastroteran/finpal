import './Modal.scss';
import { useSelector } from 'react-redux';

const Modal = ({ show, children }) => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);

  return (
    <div className={show ? `modal show ${isDarkMode && 'dark'}` : 'modal'}>
      {children}
    </div>
  );
};

export default Modal;
