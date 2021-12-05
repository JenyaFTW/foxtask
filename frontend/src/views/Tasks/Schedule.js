import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Schedule.scss';

const Schedule = (props) => {
    const [schedule, setSchedule] = useState([]);
    const scheduleSpan = [];
    const hoursSpanArray = [];
    let count = 0;

    const handleClick = key => {
        const temp = [...schedule];
        const day = Math.floor(key / 24);
        const hour = key % 24;
        temp[day][hour] = temp[day][hour] ? 0 : 1;
        setSchedule(temp);
    }

    for (let i = 0; i < 24; i++) {
        hoursSpanArray.push(<span key={i} className="table__item">{i}</span>);
    }
    for (let i = 0; i < 7; i++) {
        schedule.push([]);
        scheduleSpan.push([]);
        for (let j = 0; j < 24; j++) {
            const key = count++;
            schedule[i].push(0);
            scheduleSpan[i].push(<span key={key} className={ !schedule[Math.floor(key / 24)][key % 24] ? "table__block" : "table__block-select"} onClick={() => handleClick(key)}></span>)
        }
    }

    return (
        <div id="schedule" className="schedule__outter">
            <div className="schedule__wrapper">
                <div className="schedule__container">
                    <div className="schedule__header">
                        <span className="schedule__title">Set your working hours</span>
                        <FontAwesomeIcon className="schedule__icon" icon={faTimes} onClick={() => props.setScheduleOpen(false)}/>
                    </div>
                    <div className="schedule__table__wrapper">
                        <div className="schedule__table">
                            <div className="table__whitespace"></div>
                            <div className="table__hours">
                                {hoursSpanArray}
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
                                {scheduleSpan}
                            </div>
                        </div>
                    </div>
                    <div className="schedule__button__wrapper">
                        <div className="schedule__button" onClick={() => props.setScheduleOpen(false)}>Generate</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;