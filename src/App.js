import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { Balance, Dashboard, Debts, NotFound, Stock, User } from './views';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleSettingsModal,
  toggleAddTransactionModal,
} from './store/actions/settingsActions';
import SettingsForm from './components/settingsForm/SettingsForm';
import AddTransation from './components/addTransaction/AddTransaction';

function App() {
  const modals = useSelector((state) => state.settings.modals);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const dispatch = useDispatch();

  console.log('app');

  return (
    <BrowserRouter>
      <div className={isDarkMode ? 'app dark' : 'app'}>
        <Sidebar />

        {modals.isSettingsOpen && (
          <div
            className="backdrop"
            onClick={() => dispatch(toggleSettingsModal())}
          ></div>
        )}

        {modals.isAddTransactionOpen && (
          <div
            className="backdrop"
            onClick={() => dispatch(toggleAddTransactionModal())}
          ></div>
        )}

        <SettingsForm />
        <AddTransation />

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/balance" component={Balance} />
          <Route path="/debts" component={Debts} />
          <Route path="/stock" component={Stock} />
          <Route path="/user" component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
