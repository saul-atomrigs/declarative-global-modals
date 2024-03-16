### 왜 useModal hook으로 빼내는지?
- 하나의 모달 컴포넌트 내에서 모달의 열린 상태(`isOpen`)를 갖고 있고, 이 상태를 제어하는 액션 (`onOpen`)이 바깥의 버튼 컴포넌트에 담겨있는 상황을 가정해보자. 이 둘의 종속성을 끊는게 좋다. 그러려면 전역 상태관리로 따로 빼주는것이 좋다.
- 또 다른 이점은 여러 컴포넌트에서 공용으로 모달을 열고 닫을 수 있게 된다.

### 코드
```ts
// useModal.ts
import { create } from 'zustand';

interface UseModalZustandStore {
  isOpen: boolean;
  content: React.ReactNode | null;
  open: (content: React.ReactNode) => void;
  close: () => void;
}

const useModalZustandStore = create<UseModalZustandStore>((set) => ({
  isOpen: false,
  content: null,
  open: (content) => set((state) => ({ ...state, isOpen: true, content })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));

export default useModalZustandStore;
```
```ts
// Modal.tsx
import React from 'react';
import useModalZustandStore from '../hooks/useModalZustandStore';

const ZustandModal = () => {
  const zustandModal = useModalZustandStore(); // { isOpen, content, open, close }

  if (!zustandModal.isOpen) return null;
  console.log('ZUSTAND - modal opened!');

  return (
    <div className='modal-container'>
      <div className='modal-content'>{zustandModal.content}</div>
      <button onClick={zustandModal.close}>Close</button>
    </div>
  );
};

export default ZustandModal;
```
```ts
// page.tsx
'use client';
import Button from './components/Button';
import ZustandModal from './components/ZustandModal';
import useModalZustandStore from './hooks/useModalZustandStore';

export default function Home() {
  // zustand
  const zustandModal = useModalZustandStore();

  const onOpenZustandModalClick = () => {
    zustandModal.open('hello!');
  };

  return (
    <>
      <Button onClick={onOpenZustandModalClick}>Open Zustand modal</Button>;
      <ZustandModal />
    </>
  );
}
```
