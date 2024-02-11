import React from 'react';
import { useRecoilValue } from 'recoil';
import RecoilModal from './RecoilModal';
import { modalStore } from '../hooks/useModalRecoilStore';

type Modals = {
  [key: string]: JSX.Element;
};

type ModalKeys = {
  [key: string]: boolean;
};

const Switch = ({ modals }: { modals: Modals }) => {
  const modalKeys = useRecoilValue<ModalKeys>(modalStore);

  const openedModal = Object.keys(modalKeys).find(
    (key) => modalKeys[key] === true
  ) as '구글가입' | '깃헙가입' | '회원가입';

  return modals[openedModal] || null;
};

export default function Modals() {
  return (
    <Switch
      modals={{
        구글가입: <RecoilModal modalName='구글가입' />,
        깃헙가입: <RecoilModal modalName='깃헙가입' />,
        회원가입: <RecoilModal modalName='회원가입' />,
      }}
    />
  );
}
