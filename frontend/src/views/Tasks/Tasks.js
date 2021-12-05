import './Tasks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import AddTask from './addtask';
const Tasks = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <div id="tasks" className="tasks__wrapper">
            <div className="tasks__header">
                <div className="header__filter">
                    Sort by
                </div>
                <div className="header__action">
                    <div className="header__new header__button" onClick={() => {setPopupOpen(!popupOpen);}}>
                        <span>Create Task</span>
                        <FontAwesomeIcon className="header__icon" icon={faPlusSquare} />
                    </div>
                    { popupOpen && <AddTask popupOpen={popupOpen} setPopupOpen={setPopupOpen} />}
                    <div className="header__generate header__button">
                        <span>Generate Schedule</span>
                        <FontAwesomeIcon className="header__icon" icon={faCalendarAlt} />
                    </div>
                </div>
            </div>
            <div className="tasks__body">
                <div className="tasks__item"></div>
                <div className="tasks__item"></div>
                <div className="tasks__item"></div>
                <div className="tasks__item"></div>
                <div className="tasks__item"></div>
            </div>
        </div>
    );
};

export default Tasks;