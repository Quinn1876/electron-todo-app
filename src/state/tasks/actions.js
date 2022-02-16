import * as actionTypes from '../action-types';

export const loadTasksRequest = () => ({
  type: actionTypes.LOAD_TASKS_REQUEST,
});

export const loadTasksSuccess = (tasks) => ({
  type: actionTypes.LOAD_TASKS_SUCCESS,
  payload: { tasks },
});


export const loadTasksError = (payload) => ({
  type: actionTypes.LOAD_TASKS_FAILURE,
  payload
});
