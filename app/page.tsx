'use client';
import Button from './components/Button';
import ZustandModal from './components/ZustandModal';
import RecoilModal from './components/RecoilModal';
import useModalZustandStore from './hooks/useModalZustandStore';
import useModalRecoilStore from './hooks/useModalRecoilStore';
import Modals from './components/Modals';

export default function Home() {
  // zustand
  const zustandModal = useModalZustandStore();

  const onOpenZustandModalClick = () => {
    zustandModal.open('hello!');
  };

  // recoil
  const recoilModalGoogle = useModalRecoilStore('구글가입');
  const recoilModalEmail = useModalRecoilStore('회원가입');

  const onOpenRecoilModalClick = () => {
    recoilModalGoogle.open();
  };

  const onOpenRecoilModalEmailClick = () => {
    recoilModalEmail.open();
  };

  return (
    <>
      <Button onClick={onOpenZustandModalClick}>Open Zustand modal</Button>;
      <Button onClick={onOpenRecoilModalClick}>
        Open Recoil (Google) modal
      </Button>
      <Button onClick={onOpenRecoilModalEmailClick}>
        Open Recoil (Email) modal
      </Button>
      <ZustandModal />
      {/* <RecoilModal modalName='구글가입' /> */}
      <Modals /> {/* recoil modals switcher */}
    </>
  );
}
