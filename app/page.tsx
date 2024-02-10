'use client';
import Button from './components/Button';
import ZustandModal from './components/ZustandModal';
import RecoilModal from './components/RecoilModal';
import useModalZustandStore from './hooks/useModalZustandStore';
import useModalRecoilStore from './hooks/useModalRecoilStore';

export default function Home() {
  const zustandModal = useModalZustandStore();
  const recoilModal = useModalRecoilStore('구글가입');

  const onOpenZustandModalClick = () => {
    zustandModal.open('hello!');
  };

  const onOpenRecoilModalClick = () => {
    recoilModal.open();
  };

  return (
    <>
      <Button onClick={onOpenZustandModalClick}>Open Zustand modal</Button>;
      <Button onClick={onOpenRecoilModalClick}>Open Recoil modal</Button>
      <ZustandModal />
      <RecoilModal modalName='구글가입' />
    </>
  );
}
