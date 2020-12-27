import './Modal.scss';
import { useSelector } from 'react-redux';

const Modal = ({ show, children, isLocked }) => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);

  return (
    <div
      className={
        show
          ? `modal show ${isDarkMode && 'dark'} ${isLocked && 'locked'}`
          : `modal ${isLocked && 'locked'}`
      }
    >
      {children}
    </div>
  );
};

export default Modal;
