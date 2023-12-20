import StoreContext from './contexts/storeContext';
import Tasks from './components/Tasks';
import store from './store/configureStore';

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div>
        <Tasks />
      </div>
    </StoreContext.Provider>
  );
};

export default App;

