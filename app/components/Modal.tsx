import React from 'react';
import useModalZustandStore from '../hooks/useModalZustandStore';

const Modal = () => {
  const zustandModal = useModalZustandStore();

  if (!zustandModal.isOpen) return null;
  console.log('modal opened!');

  return (
    <div className='modal-container'>
      <div className='modal-content'>{zustandModal.content}</div>
      <button onClick={zustandModal.close}>Close</button>
    </div>
  );
};

export default Modal;
