import { createSlice } from '@reduxjs/toolkit';

let id = 0;

// create action and reducer with a single method
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    // action: function
    addTask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    },
    completeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = true;
    },
  },
});

console.log(taskSlice);

export const { addTask, removeTask, completeTask } = taskSlice.action;

export default taskSlice.reducer;
