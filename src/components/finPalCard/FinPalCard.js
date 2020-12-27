import './FinPalCard.scss';
import CardImg from '../../assets/images/card.svg';
import ToggleBtn from '../UI/toggleBtn/ToggleBtn';
import { formatMoney } from '../../shared/utility';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAppLockModal } from '../../store/actions/settingsActions';

const FinPalCard = ({ amount }) => {
  const isLocked = useSelector((state) => state.firebase.profile.isLocked);
  const dispatch = useDispatch();

  const style = {
    backgroundImage: `url(${CardImg})`,
  };

  return (
    <div className="finpal-card" style={style}>
      <div className="finpal-card__money">
        <p>
          {formatMoney(amount)[0]}
          <small>{formatMoney(amount)[1]}</small>
        </p>
      </div>
      <ToggleBtn
        isToggleOn={isLocked}
        changeToggle={() => dispatch(toggleAppLockModal())}
      />
    </div>
  );
};

export default FinPalCard;
