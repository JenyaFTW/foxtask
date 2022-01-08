import CreateTask from '../createTask/createTask.js';
import ActionButton from '../actionButton/ActionButton.js';
import { useState, useEffect } from 'react';

import './allAndCreate.scss';

const allAndCreate = () => {
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  const onOpen = () => setModal(true);

  const onKeydown = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  return (
    <div className="header__tasks">
      <div className="count__tasks">2 Tasks 2 All-day events</div>
      <ActionButton onClick={onOpen} />
      <CreateTask visible={isModal} onClose={onClose} />
    </div>
  );
};

export default allAndCreate;
