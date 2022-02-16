import { fork, all } from "redux-saga/effects";
import taskSagas from './tasks/sagas';

export function* watchSagas() {
  yield all([fork(taskSagas)]);
}
