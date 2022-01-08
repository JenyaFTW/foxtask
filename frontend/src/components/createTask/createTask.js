import RenderTimeDo from "../renderTimeDo/RenerTimeDo";
import { useState } from 'react';

import "./CreateTask.scss";
import CloseIcon from "../../assets/close.svg";


const CreateTask = ({visible, onClose}) => {
    if (!visible) return null;

    const [isForm, setForm] = useState(null);
    const [isVisible, setVisible] = useState('Automatic');
    const [isTaskName, setTaskName] = useState('');
    const [isDescription, setDescription] = useState('');

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
                    <textarea placeholder="Enter your task name" className="btn__modal" value={isTaskName} onChange={(e) => setTaskName(e.target.value)}></textarea>
                    <label>Description</label>
                    <textarea placeholder="Enter your task description" className="btn__modal btn__description__modal" value={isDescription} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <label>Manage time</label>
                    <div className="btn__modal btn__swich__modal">
                        <button className={`btn__header__modal btn__swich ${isVisible === 'Automatic' ? 'active__btn__modal' : ''}`} onClick={() => setVisible('Automatic')}>Automatically</button>
                        <button className={`btn__header__modal btn__swich ${isVisible === 'Manually' ? 'active__btn__modal' : ''}`} onClick={() => setVisible('Manually')}>Manually</button>
                    </div>
                    <RenderTimeDo visible={isVisible}
                                  isForm={isForm}
                                  setForm={setForm}/>
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
