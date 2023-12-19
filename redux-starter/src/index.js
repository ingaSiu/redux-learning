import { deleteTask, loadTasks, updateCompleted } from './store/tasks';

import { addNewTask } from './store/tasks';
import axios from 'axios';
import { fetchTasks } from './store/tasks';
import { getTasks } from './store/tasks';
import store from './store/configureStore';

// const gettingTasks = async () => {
//   try {
//     //calling Api
//     const response = await axios.get('http://localhost:5000/api/tasks');
//     console.log(response);
//     // dispatch action
//     store.dispatch(getTasks({ tasks: response.data }));
//   } catch (error) {
//     store.dispatch({ type: 'SHOW_ERROR', payload: { error: error.message } });
//   }
// };

// gettingTasks();

// store.dispatch(fetchTasks());

store.dispatch(loadTasks());
//store.dispatch(addNewTask({ task: 'Complete this exercise' }));

store.dispatch(updateCompleted({ id: 6, completed: true }));

store.dispatch(deleteTask({ id: 7 }));
