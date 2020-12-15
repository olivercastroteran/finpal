import { useEffect, useState } from 'react';
import './RecentMovements.scss';
import { useSelector } from 'react-redux';
import { english, spanish } from '../../../../languages';

const RecentMovements = () => {
  const language = useSelector((state) => state.settings.language);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (language === 'english') {
      setTitle(english.dashboard.recentMovementsTitle);
    } else if (language === 'spanish') {
      setTitle(spanish.dashboard.recentMovementsTitle);
    }
    // eslint-disable-next-line
  }, [language]);

  return (
    <div className="recent-movements">
      <h2>{title}</h2>
    </div>
  );
};

export default RecentMovements;
