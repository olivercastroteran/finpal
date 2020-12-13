import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { Balance, Dashboard, Debts, NotFound, Stock } from './views';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from './store/actions/settingsActions';
import SettingsForm from './components/settingsForm/SettingsForm';

function App() {
  const isModalOpen = useSelector((state) => state.settings.isModalOpen);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        {isModalOpen && (
          <div
            className="backdrop"
            onClick={() => dispatch(toggleModal())}
          ></div>
        )}

        <SettingsForm />

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/balance" component={Balance} />
          <Route path="/debts" component={Debts} />
          <Route path="/stock" component={Stock} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
