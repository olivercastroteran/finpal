import { useEffect, useState } from 'react';
import './RecentMovements.scss';
import { useSelector } from 'react-redux';
import { english, spanish } from '../../../../languages';
import RecentMovementItem from './RecentMovementItem';

const RecentMovements = ({ searchTerm }) => {
  const language = useSelector((state) => state.settings.language);
  const recentMovements = useSelector((state) => state.finance.recentMovements);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (language === 'english') {
      setTitle(english.dashboard.recentMovementsTitle);
    } else if (language === 'spanish') {
      setTitle(spanish.dashboard.recentMovementsTitle);
    }
    // eslint-disable-next-line
  }, [language]);

  function reverseArr(input) {
    let ret = [];
    for (let i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }

  let recentMovementsReversed = reverseArr(recentMovements);

  return (
    <div className="recent-movements">
      <h2>{title}</h2>
      {!searchTerm || searchTerm === ''
        ? recentMovementsReversed.map((item) => (
            <RecentMovementItem key={Math.random()} {...item} />
          ))
        : recentMovementsReversed
            .filter((item) => item?.info?.name?.includes(searchTerm))
            .map((item) => (
              <RecentMovementItem key={Math.random()} {...item} />
            ))}
    </div>
  );
};

export default RecentMovements;
