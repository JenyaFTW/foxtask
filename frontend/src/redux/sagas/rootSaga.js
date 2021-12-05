import { takeLatest } from 'redux-saga/effects';
import { Types } from '../types';
import { handleGetUser, handleLogin, handleLogout, handleSignup } from './handlers/auth';
import { handleGetTasks, handleCreateTask, handleGenerateTimetable, handleGetWorkTime, handleSetWorkTime } from './handlers/task';

export function* watcherSaga() {
    yield takeLatest(Types.Auth.LOGIN, handleLogin);
    yield takeLatest(Types.Auth.SIGNUP, handleSignup);
    yield takeLatest(Types.Auth.GET_USER, handleGetUser);
    yield takeLatest(Types.Auth.LOGOUT, handleLogout);

    yield takeLatest(Types.Tasks.GET_TASKS, handleGetTasks);
    yield takeLatest(Types.Tasks.CREATE_TASK, handleCreateTask);
    yield takeLatest(Types.Tasks.GENERATE_TIMETABLE, handleGenerateTimetable);

    yield takeLatest(Types.Tasks.SET_WORK_TIME, handleSetWorkTime);
    yield takeLatest(Types.Tasks.GET_WORK_TIME, handleGetWorkTime);
}