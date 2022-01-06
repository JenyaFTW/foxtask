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
            <div className="header__task">
                <span className="name__task">{name}</span>
                <div className="icon__task">
                    <img onClick={notificationClick} alt="Logo" src={notification ? IconNotificationOn : IconNotificationOff} />
                    {subtasks ? '' : <img alt="Done tasks" src={IconCheckMarkDone}/> }
                    <img alt="Open full tasks" src={IconOpenFullTasks}/>
                </div>
            </div>
            <div className="body__task">
                <div  className="date__calendar__task">
                    <span>{date}</span>
                    <div className="divider__task"> </div>
                    <span>From {calendar}</span>
                </div>
                <div className="tags__task">
                    <span className="tag__task">{tag}</span>
                    <span className="tag__task">{tag}</span>
                    <span className="tag__task">{tag}</span>
                </div>
                    {subtasks ? subtasks.map(({name, date}, index) => {
                        return(
                            <div className="multiTasks__task" key={index}>
                                <div className="subtask__task">
                                    <div className="name__date__task">
                                        <span className="name__task">{name}</span>
                                        <div  className="date__calendar__task">
                                            <span>{date}</span>
                                            <div className="divider__task"> </div>
                                            <span>From {calendar}</span>
                                        </div>
                                    </div>
                                    <img alt="Button check down" src={IconCheckDown} />
                                </div>
                            </div>
                        )
                    }) : ''}
                <span className="type__task">{type}</span>
            </div>
        </div>
    )
}

export default Task;