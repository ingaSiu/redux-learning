import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employess';
import error from '../middleware/error';
import log from '../middleware/log';
import taskReducer from './tasks';

// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log, error],
});

export default store;
