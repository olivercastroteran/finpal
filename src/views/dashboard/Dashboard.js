import './Dashboard.scss';
import Header from '../../components/header/Header';
import { Banner, GlobalInfo, RecentMovements } from './components/';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);

  return (
    <div
      className={isDarkMode ? 'dashboard content dark' : 'dashboard content'}
    >
      <div className="dashboard__top">
        <Header />
      </div>
      <div className="dashboard__bottom">
        <div className="dashboard__bottom--left">
          <Banner />
          <GlobalInfo />
        </div>
        <div className="dashboard__bottom--right">
          <RecentMovements />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
