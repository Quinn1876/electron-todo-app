import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from '../action-types';
// import { IpcRenderer } from 'electron';
import api from '../../api';

function* loadTasks() {
  try {
    const response = yield call(api.getTasks);
    console.log(response.data)
    yield put(actions.loadTasksSuccess(response.data));
  } catch (err) {
    console.log(err);
    yield put(actions.loadTasksError(err));
  }
}

export default function* () {
  yield takeLatest(actionTypes.LOAD_TASKS_REQUEST, loadTasks);
}
