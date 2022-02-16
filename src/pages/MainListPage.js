import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import useTasks from '../hooks/tasks';

const MainListPage = () => {
  const { tasks, tasksById } = useTasks();
  console.log(`tasksById: ${JSON.stringify(tasksById)}`)
  console.log(`tasks: ${tasks}`)
  return (
    <div>
      <TodoList todos={tasks} />
    </div>
  );
};

export default MainListPage;
