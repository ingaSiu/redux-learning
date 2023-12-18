import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employess';
import taskReducer from './tasks';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
});

export default store;
