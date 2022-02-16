import React from 'react';
import styleProvider from '../utils/style-provider';
import TodoList from './TodoList';
import { states as taskStates } from '../api/models/task';

/**
* Default export contains information
* about the story.
* It can have the following fields:
* - component 			 - the component itself
* - title 			 - How the component is referred to in the side bar
* - excludeStories 			 - exports from this file that should not be rendered
* - argTypes 			 - specify the args behaviour in each story
*/
export default {
  component: TodoList,
  title: 'Todo List',
};

export const Empty = () => styleProvider(
  <TodoList />
);

export const OneItem = () => styleProvider(
  <TodoList
    todos={[
      {
        id: '1',
        title: 'Test Task Title',
        state: taskStates.TASK_IN_PROGRESS,
      }
    ]}
  />
);

const todo__IN_PROGRESS = (id) => ({
  id,
  title: 'Test Task Title',
  state: taskStates.TASK_IN_PROGRESS,
});

export const ManyItems = () => styleProvider(
  <TodoList
    todos={[
      todo__IN_PROGRESS(1),
      todo__IN_PROGRESS(2),
      todo__IN_PROGRESS(3),
      todo__IN_PROGRESS(4),
      todo__IN_PROGRESS(5),
    ]}
  />
)
