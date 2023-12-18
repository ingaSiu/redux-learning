import { addTask, completeTask, fetchTodo, removeTask } from './store/tasks';

import store from './store/configureStore';

const unsubscribe = store.subscribe(() => {
  console.log('Updated', store.getState());
});

store.dispatch(addTask('Task 1'));
store.dispatch(addTask('Task 2'));
console.log(store.getState());

// unsubscribe();
store.dispatch(completeTask(2));

store.dispatch(removeTask(1));
store.dispatch(fetchTodo());
console.log(store.getState());

