import { Types } from "../types";

export const getTasks = () => ({
    type: Types.Tasks.GET_TASKS
});

export const getTasksFail = payload => ({
    type: Types.Tasks.GET_TASKS_FAIL,
    payload
});

export const setTasks = payload => ({
    type: Types.Tasks.SET_TASKS,
    payload
});

export const createTask = payload => ({
    type: Types.Tasks.CREATE_TASK,
    payload
});

export const createTaskFail = payload => ({
    type: Types.Tasks.CREATE_TASK_FAIL,
    payload
});

export const createTaskSuccess = payload => ({
    type: Types.Tasks.CREATE_TASK_SUCCESS,
    payload
});

export const generateTimetable = payload => ({
    type: Types.Tasks.GENERATE_TIMETABLE,
    payload
});

export const generateTimetableFail = payload => ({
    type: Types.Tasks.GENERATE_TIMETABLE_FAIL,
    payload
});

export const generateTimetableSuccess = payload => ({
    type: Types.Tasks.GENERATE_TIMETABLE_SUCCESS,
    payload
});

export const setWorkTime = payload => ({
    type: Types.Tasks.SET_WORK_TIME,
    payload
});

export const getWorkTime = () => ({
    type: Types.Tasks.GET_WORK_TIME
});

const initialState = {
    tasks: [],
    workTime: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.Tasks.SET_TASKS:
            return { ...state, tasks: action.payload };
        case Types.Tasks.SET_WORK_TIME:
            return { ...state, workTime: action.payload };
        default:
            return state;
    }
};