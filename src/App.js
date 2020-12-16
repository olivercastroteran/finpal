import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { Balance, Dashboard, Debts, NotFound, Stock, User } from './views';
import {
  toggleSettingsModal,
  toggleAddModal,
  toggleEditModal,
} from './store/actions/settingsActions';
import Backdrop from './components/UI/backdrop/Backdrop';
import { AddTransaction, EditTransaction, SettingsForm } from './components';

function App() {
  const modals = useSelector((state) => state.settings.modals);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const dispatch = useDispatch();

  const { isSettingsOpen, isAddOpen, edit } = modals;

  return (
    <BrowserRouter>
      <div className={isDarkMode ? 'app dark' : 'app'}>
        <Sidebar />

        {isSettingsOpen && (
          <Backdrop clicked={() => dispatch(toggleSettingsModal())} />
        )}

        {isAddOpen && <Backdrop clicked={() => dispatch(toggleAddModal())} />}

        {edit.isOpen && (
          <Backdrop clicked={() => dispatch(toggleEditModal())} />
        )}

        <SettingsForm />
        <AddTransaction />
        <EditTransaction item={edit.item} />

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
