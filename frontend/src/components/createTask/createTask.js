import RenderTimeDo from "../renderTimeDo/RenerTimeDo";
import { useState } from 'react';

import "./CreateTask.scss";
import CloseIcon from "../../assets/close.svg";


const CreateTask = ({visible, onClose}) => {
    if (!visible) return null;

    const [isVisible, setVisible] = useState('Automatic');
    const [isTaskName, setTaskName] = useState('Enter your task name');
    const [isDescription, setDescription] = useState('Enter your task description');

    return(
        <div className="fixed__overlay">
            <div className="modal">
                <div className="modal__dialog">
                    <div className="header__modal">
                        <span>New task</span>
                        <button className="btn__header__modal" onClick={onClose}>
                            <img src={CloseIcon}></img>
                        </button>
                    </div>
                    <label>Name</label>
                    <textarea className="btn__modal" value={isTaskName} onChange={(e) => setTaskName(e.target.value)}></textarea>
                    <label>Description</label>
                    <textarea className="btn__modal btn__description__modal" value={isDescription} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <label>Manage time</label>
                    <div className="btn__modal btn__swich__modal">
                        <button className="btn__header__modal btn__swich active__btn__modal" onClick={() => setVisible('Automatic')}>Automatically</button>
                        <button className="btn__header__modal btn__swich" onClick={() => setVisible('Manually')}>Manually</button>
                    </div>
                    <RenderTimeDo visible={isVisible}/>
                    <label>Tags</label>
                    <div className="tags__modal">
                        <span className="tag__modal">Work</span>
                        <span className="tag__modal">Рождество Христово</span>
                        <button className="tag__add__modal">Add +</button>
                    </div>
                    <div className="btn__footer__modal">
                        <button  className="btn__cansel__modal">Cansel</button>
                        <button  className="btn__create__modal">Create Task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTask;
