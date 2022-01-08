import React from "react";
import { useState } from "react";
import IconNotificationOff from "../../assets/notificationOff.svg";
import IconNotificationOn from "../../assets/notificationOn.svg";
import IconCheckMarkDone from "../../assets/checkMarkDone.svg";
import IconOpenFullTasks from "../../assets/openFullTasks.svg";
import IconCheckDown from "../../assets/checkMarkDown.svg";
import "./Task.scss";

const Task = ({name, date, type, subtasks}) =>{
    const calendar = 'Default Calendar';
    const tag = 'Work';
    const [notification, setNotification] = useState(false);

    const notificationClick = () => {
        setNotification(!notification);
    }

    return(
        <div className="task">
            <div className="task__header">
                <span className="header__name">{name}</span>
                <div className="header__icons">
                    <img onClick={notificationClick} alt="Logo" src={notification ? IconNotificationOn : IconNotificationOff} />
                    {subtasks ? '' : <img alt="Done tasks" src={IconCheckMarkDone}/> }
                    <img alt="Open full tasks" src={IconOpenFullTasks}/>
                </div>
            </div>
            <div className="task__body">
                <div className="body__date">
                    <span>{date}</span>
                    <div className="body__divider"></div>
                    <span>From {calendar}</span>
                </div>
                <div className="body__tags">
                    <span className="body__tag">{tag}</span>
                    <span className="body__tag">{tag}</span>
                    <span className="body__tag">{tag}</span>
                </div>
                    {subtasks ?
                        <div className="multitask">
                        {subtasks ? subtasks.map(({name, date}, index) => {
                            return(
                                <div className="task subtask" key={index}>
                                    <div className="task__header">
                                        <span className="header__name">{name}</span>
                                        <div className="header__icons">
                                            <img alt="Button check down" src={IconCheckDown}/>
                                        </div>
                                    </div>
                                    <div className="task__body">
                                        <div className="body__date">
                                            <span>{date}</span>
                                            <div className="body__divider"></div>
                                            <span>From {calendar}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : ''}
                        </div>
                    : ''}
                    
                <div className="task__type">
                    <span>{type}</span>
                </div>
            </div>
        </div>
    )
}

export default Task;