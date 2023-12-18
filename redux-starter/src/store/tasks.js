import { createAction, createReducer } from '@reduxjs/toolkit';

// Actions

export const addTask = createAction('ADD_TASK');
export const removeTask = createAction('REMOVE_TASK');
export const completeTask = createAction('COMPLETE_TASK');
console.log(test({ task: 'Task 1' }));

// export const addTask = (task) => {
//   return { type: ADD_TASK, payload: { task: task } };
// };

// Reducer

let id = 0;

export default createReducer([], {
  [addTask.type]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      completed: false,
    });
  },
  [removeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state.splice(index, 1);
  },
  [completeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state[index].completed = true;
  },
});

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case addTask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];
//     case removeTask.type:
//       return state.filter((task) => task.id !== action.payload.id);

//     case completeTask.type:
//       return state.map((task) =>
//         task.id === action.payload.id
//           ? {
//               ...task,
//               completed: true,
//             }
//           : task,
//       );

//     default:
//       return state;
//   }

// if (action.type === 'ADD_TASK') {
//   return [
//     ...state,
//     {
//       id: ++id,
//       task: action.payload.task,
//       completed: false,
//     },
//   ];
// } else if (action.type === 'REMOVE_TASK') {
//   return state.filter((task) => task.id !== action.payload.id);
// }
// return state;
// }
