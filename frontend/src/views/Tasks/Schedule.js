import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import './Schedule.scss';
import { useDispatch, useSelector } from 'react-redux';
import { generateTimetable, getWorkTime } from '../../redux/ducks/task';

const Schedule = (props) => {
    const dispatch = useDispatch();
    const workSchedule = useSelector(state => state.task.workTime);
    const [workTime, setWorkTime] = useState([]);

    useEffect(() => {
        dispatch(getWorkTime());
    }, []);

    useEffect(() => {
        setWorkTime(workSchedule);
    }, [workSchedule]);

    const handleClick = (i, j) => {
        const temp = workTime.splice(0);
        temp[i][j] = temp[i][j] ? 0 : 1;
        setWorkTime(temp);
    }

    const handleSubmit = () => {
        dispatch(generateTimetable(workTime));
        props.setScheduleOpen(false);
    };

    return (
        <div id="schedule" className="schedule__outter">
            <div className="schedule__wrapper">
                <div className="schedule__container">
                    <div className="schedule__header">
                        <span className="schedule__title">Set your working hours</span>
                        <FontAwesomeIcon className="schedule__icon" icon={faTimes} onClick={() => props.setScheduleOpen(false)} />
                    </div>
                    <div className="schedule__table__wrapper">
                        <div className="schedule__table">
                            <div className="table__whitespace"></div>
                            <div className="table__hours">
                                {
                                    workTime[0] && workTime[0].map((_, idx) => {
                                        return (
                                            <span key={idx} className="table__item">{idx + 1}</span>
                                        );
                                    })
                                }
                            </div>
                            <div className="table__days">
                                <span className="table__item">ПН</span>
                                <span className="table__item">ВТ</span>
                                <span className="table__item">СР</span>
                                <span className="table__item">ЧТ</span>
                                <span className="table__item">ПТ</span>
                                <span className="table__item">СБ</span>
                                <span className="table__item">ВС</span>
                            </div>
                            <div className="table__table">
                                {
                                    workTime[0] && workTime[0].map((el, idx) => {
                                        return (
                                            <span key={idx} className={!workTime[0][idx] ? "table__block" : "table__block-select"} onClick={() => handleClick(0, idx)}></span>
                                        );
                                    })
                                }
                                {
                                    workTime[1] && workTime[1].map((el, idx) => {
                                        return (
                                            <span key={idx} className={!workTime[1][idx] ? "table__block" : "table__block-select"} onClick={() => handleClick(1, idx)}></span>
                                        );
                                    })
                                }
                                {
                                    workTime[2] && workTime[2].map((el, idx) => {
                                        return (
                                            <span key={idx} className={!workTime[2][idx] ? "table__block" : "table__block-select"} onClick={() => handleClick(2, idx)}></span>
                                        );
                                    })
                                }
                                {
                                    workTime[3] && workTime[3].map((el, idx) => {
                                        return (
                                            <span key={idx} className={!workTime[3][idx] ? "table__block" : "table__block-select"} onClick={() => handleClick(3, idx)}></span>
                                        );
                                    })
                                }
                                {
                                    workTime[4] && workTime[4].map((el, idx) => {
                                        return (
                                            <span key={idx} className={!workTime[4][idx] ? "table__block" : "table__block-select"} onClick={() => handleClick(4, idx)}></span>
                                        );
                                    })
                                }
                                {
                                    workTime[5] && workTime[5].map((el, idx) => {
                                        return (
                                            <span key={idx} className={!workTime[5][idx] ? "table__block" : "table__block-select"} onClick={() => handleClick(5, idx)}></span>
                                        );
                                    })
                                }
                                {
                                    workTime[6] && workTime[6].map((el, idx) => {
                                        return (
                                            <span key={idx} className={!workTime[6][idx % 24] ? "table__block" : "table__block-select"} onClick={() => handleClick(6, idx)}></span>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="schedule__button__wrapper">
                        <div className="schedule__button" onClick={handleSubmit}>Generate</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;