import { useEffect } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import {
  Auth,
  Balance,
  Dashboard,
  Debts,
  NotFound,
  Stock,
  User,
} from './views';
import {
  toggleSettingsModal,
  toggleDebtEditModal,
  toggleAddModal,
  toggleEditModal,
  toggleAppLockModal,
} from './store/actions/settingsActions';
import Backdrop from './components/UI/backdrop/Backdrop';
import { AddTransaction, EditTransaction, SettingsForm } from './components';
import useFirestore from './hooks/useFirestore';
import { syncData } from './store/actions/financeActions';
import EditDebt from './components/editDebt/EditDebt';
import AppLockModal from './components/appLockModal/AppLockModal';

function App() {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const modals = useSelector((state) => state.settings.modals);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const dispatch = useDispatch();
  const { doc } = useFirestore(uid);

  useEffect(() => {
    if (doc.finance) {
      console.log('app rendered');
      dispatch(syncData(doc.finance));
    }
  }, [uid, doc.finance, dispatch]);

  const { isSettingsOpen, isAddOpen, isLockedOpen, edit, debt } = modals;

  return (
    <BrowserRouter>
      <div className={isDarkMode ? 'app dark' : 'app'}>
        <Sidebar />

        {isSettingsOpen && (
          <Backdrop clicked={() => dispatch(toggleSettingsModal())} />
        )}

        {isAddOpen && <Backdrop clicked={() => dispatch(toggleAddModal())} />}

        {isLockedOpen && (
          <Backdrop clicked={() => dispatch(toggleAppLockModal())} />
        )}

        {edit.isOpen && (
          <Backdrop clicked={() => dispatch(toggleEditModal())} />
        )}

        {debt.isOpen && (
          <Backdrop clicked={() => dispatch(toggleDebtEditModal())} />
        )}

        <SettingsForm />
        <AddTransaction />
        <AppLockModal />
        <EditTransaction item={edit.item} />
        <EditDebt item={debt.item} />

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/auth" component={Auth} />
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
