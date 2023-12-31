import { useDispatch, useSelector } from 'react-redux';

import { loadTasks } from '../store/tasks';
import { useEffect } from 'react';

const Tasks = () => {
  const { tasks, loading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <p key={task.id}>{task.task}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Tasks;
