import { useState } from 'react';
import './FinPalCard.scss';
import CardImg from '../../assets/images/card.svg';
import ToggleBtn from '../UI/toggleBtn/ToggleBtn';
import { formatMoney } from '../../shared/utility';

const FinPalCard = ({ amount }) => {
  const [isCardBlock, setIsCardBlock] = useState(false);

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
        isToggleOn={isCardBlock}
        changeToggle={() => setIsCardBlock(!isCardBlock)}
      />
    </div>
  );
};

export default FinPalCard;
