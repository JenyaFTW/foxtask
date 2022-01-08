import './ActionButton.scss';

const ActionButton = ({ onClick = () => {}, hover = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`action__button ${hover ? 'action__button--hoveralbe' : ''}`}>
      Create Task
    </button>
  );
};

export default ActionButton;
