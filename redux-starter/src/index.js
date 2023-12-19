import axios from 'axios';
import { getTasks } from './store/tasks';
import store from './store/configureStore';

const gettingTasks = async () => {
  try {
    //calling Api
    const response = await axios.get('http://localhost:5000/api/tasks');
    console.log(response);
    // dispatch action
    store.dispatch(getTasks({ tasks: response.data }));
  } catch (error) {
    store.dispatch({ type: 'SHOW_ERROR', payload: { error: error.message } });
  }
};

gettingTasks();

