import { put, select } from "@redux-saga/core/effects";
import axios from "axios";
import { createTaskFail, createTaskSuccess, getTasksFail, setTasks, setWorkTime } from "../../ducks/task";

export function* handleGetTasks() {
    try {
        const authToken = yield select(state => state.auth.authToken);
        const res = yield axios.get('http://api.foxtask.xyz:3000/task', {
            headers: {
                'Authorization': `bearer ${authToken}`
            }
        });

        yield put(setTasks(res.data));
    } catch (ex) {
        yield put(getTasksFail(ex));
    }
}

export function* handleCreateTask({ payload }) {
    try {
        const authToken = yield select(state => state.auth.authToken);
        const res = yield axios.post('http://api.foxtask.xyz:3000/task', payload, {
            headers: {
                'Authorization': `bearer ${authToken}`
            }
        });
        yield put(createTaskSuccess(res.data));
    } catch (ex) {
        yield put(createTaskFail(ex));
    }
}

export function* handleGenerateTimetable({ payload }) {
    yield put(setWorkTime(payload));
    const authToken = yield select(state => state.auth.authToken);
    const res = yield axios.post('http://api.foxtask.xyz:3000/table', { table: payload }, {
        headers: {
            'Authorization': `bearer ${authToken}`
        }
    });
    console.log(res.data);
}

export function* handleGetWorkTime() {
    const workTime = JSON.parse(localStorage.getItem('workTime'));
    if (workTime) {
        yield put(setWorkTime(workTime));
    }
}

export function* handleSetWorkTime({ payload }) {
    localStorage.setItem('workTime', JSON.stringify(payload));
}