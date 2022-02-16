import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as taskActions from '../state/tasks/actions';
import * as taskSelectors from '../state/tasks/selectors';

const useTasks = () => {
  const tasksById = useSelector(taskSelectors.tasksById);
  const dispatch = useDispatch();
  const tasks = useMemo(() => Object.keys(tasksById).map((key) => tasksById[key]));

  useEffect(() => {
    dispatch(taskActions.loadTasksRequest());
  }, [dispatch]);

  return {
    tasksById,
    tasks
  }
};

export default useTasks;
