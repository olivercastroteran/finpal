import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsLocked } from '../../store/actions/financeActions';
import { toggleAppLockModal } from '../../store/actions/settingsActions';
import Modal from '../UI/modal/Modal';

const AppLockModal = () => {
  const pin = useSelector((state) => state.firebase.profile.pin);
  const [code, setCode] = useState('');
  const [btnMsg, setBtnMsg] = useState('Enter');
  const [isFourDigits, setIsFourDigits] = useState(false);
  const language = useSelector((state) => state.settings.language);
  const dispatch = useDispatch();
  const isLockedOpen = useSelector(
    (state) => state.settings.modals.isLockedOpen
  );

  const handleClick = (e) => {
    setCode(code + e.target.value);
    if (code.length >= 3) {
      setIsFourDigits(true);
    }
  };

  const handleEnter = () => {
    if (code === pin) {
      setBtnMsg(`${language === 'english' ? 'Correct' : 'Correcto'}`);
      dispatch(toggleIsLocked());
      setTimeout(() => {
        setBtnMsg('Enter');
        dispatch(toggleAppLockModal());
      }, 1000);
    } else if (code !== pin) {
      setBtnMsg(`${language === 'english' ? 'Incorrect' : 'Incorrecto'}`);
      setTimeout(() => {
        setBtnMsg('Enter');
      }, 1000);
    }
    setCode('');
    setIsFourDigits(false);
  };

  return (
    <Modal show={isLockedOpen} isLocked={true}>
      <div className="code">
        {code.length === 0
          ? `${language === 'english' ? 'Enter Pin' : 'Ingresar Pin'}`
          : '*'.repeat(code.length)}
      </div>
      <div className="row">
        <button onClick={handleClick} disabled={isFourDigits} value="1">
          1
        </button>
        <button onClick={handleClick} disabled={isFourDigits} value="2">
          2
        </button>
        <button onClick={handleClick} disabled={isFourDigits} value="3">
          3
        </button>
      </div>
      <div className="row">
        <button onClick={handleClick} disabled={isFourDigits} value="4">
          4
        </button>
        <button onClick={handleClick} disabled={isFourDigits} value="5">
          5
        </button>
        <button onClick={handleClick} disabled={isFourDigits} value="6">
          6
        </button>
      </div>
      <div className="row">
        <button onClick={handleClick} disabled={isFourDigits} value="7">
          7
        </button>
        <button onClick={handleClick} disabled={isFourDigits} value="8">
          8
        </button>
        <button onClick={handleClick} disabled={isFourDigits} value="9">
          9
        </button>
      </div>
      <div className="row">
        <button
          onClick={() => {
            setCode('');
            setIsFourDigits(false);
          }}
          className="code-btn delete"
        >
          {`${language === 'english' ? 'Delete' : 'Borrar'}`}
        </button>
        <button onClick={handleClick} disabled={isFourDigits} value="0">
          0
        </button>
        <button onClick={handleEnter} className="code-btn enter">
          {btnMsg}
        </button>
      </div>
    </Modal>
  );
};

export default AppLockModal;
