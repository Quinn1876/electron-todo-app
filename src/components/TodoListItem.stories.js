import React from 'react';
import styleProvider from '../utils/style-provider';
import TodoListItem from './TodoListItem';
import { states as taskStates } from '../api/models/task';
/**
 * Default export contains information
 * about the story.
 * It can have the following fields:
 *  - component       - the component itself
 *  - title           - How the component is referred to in the sidebar of the app
 *  - excludeStories  - exports from this file that should not be rendered
 *  - argTypes        - specify the args behaviour in each story
 */
export default {
  component: TodoListItem,
  title: 'Todo ListItem',
};

export const Default = () => styleProvider(
  <TodoListItem
    listItem={{
      id: '1',
      title: 'Test Task Title',
      state: taskStates.TASK_IN_PROGRESS,
    }}
  />
);

export const Completed = () => styleProvider(
  <TodoListItem
    listItem={{
      id: '1',
      title: 'Test Task Title',
      state: taskStates.TASK_COMPLETE,
    }}
  />
);

export const Archived = () => styleProvider(
  <TodoListItem
    listItem={{
      id: '1',
      title: 'Test Task Title',
      state: taskStates.TASK_ARCHIVED,
    }}
  />
);
