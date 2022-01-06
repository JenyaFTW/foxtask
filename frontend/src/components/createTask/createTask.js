import "./createTask.scss";

const CreateTask = ({visible, onClose}) => {
    if (!visible) return null;
    return(
        <div className="modal">
            <div className="modal__dialog">
                <div>
                    <span>New task</span>
                    <button onClick={onClose}>&times;</button>
                </div>
            </div>
        </div>
    )
}

export default CreateTask;


