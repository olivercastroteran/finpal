import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { Balance, Dashboard, Debts, NotFound, Stock } from './views';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from './store/actions/settingsActions';
import Modal from './components/UI/modal/Modal';

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
        <Modal show={isModalOpen}>
          <h2>Settings</h2>
        </Modal>
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
