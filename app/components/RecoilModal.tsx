import React from 'react';
import useModalRecoilStore from '../hooks/useModalRecoilStore';

type ModalName = '회원가입' | '깃헙가입' | '구글가입';

export default function RecoilModal({ modalName }: { modalName: ModalName }) {
  const recoilModal = useModalRecoilStore(modalName); // { isOpen, open, close }

  if (!recoilModal.isOpen) return null;
  console.log('RECOIL - modal opened!');

  return (
    <div className='modal-container'>
      <div>RecoilModal content</div>
      <button onClick={recoilModal.close}>close</button>
    </div>
  );
}
