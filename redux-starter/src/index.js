import { addTask, completeTask, removeTask } from './store/tasks';

import { addEmployee } from './store/employess';
import store from './store/configureStore';

// const unsubscribe = store.subscribe(() => {
//   console.log('Updated', store.getState());
// });

// store.dispatch(addTask({ task: 'Task 1' }));
// store.dispatch(addTask({ task: 'Task 2' }));
// console.log(store.getState());

// // unsubscribe();
// store.dispatch(completeTask({ id: 2 }));

// store.dispatch(removeTask({ id: 1 }));
// // store.dispatch(fetchTodo());
// console.log(store.getState());

store.dispatch(addEmployee({ name: 'Yuuta' }));
store.dispatch({ type: 'SHOW_ERROR', payload: { error: 'User not found' } });

