'use client';

import Button from './components/Button';
import Modal from './components/Modal';
import useModalZustandStore from './hooks/useModalZustandStore';

export default function Home() {
  const zustandModal = useModalZustandStore();

  const onOpenModalClick = () => {
    zustandModal.open('hello!');
  };

  return (
    <>
      <Button onClick={onOpenModalClick}>Click me</Button>;
      <Modal />
    </>
  );
}
