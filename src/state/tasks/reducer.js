import * as actionTypes from '../action-types';

const initialState = {
  byId: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CLEAR_TASKS:
      return { ...initialState };

    case actionTypes.LOAD_TASKS_SUCCESS:
      return {
        ...state,
        byId: payload.tasks.reduce(
          (tasks, task) => ({
            ...tasks, [task.id]: task
          })
          , {}
        ),
      }
    default:
      return state;
  };
};
