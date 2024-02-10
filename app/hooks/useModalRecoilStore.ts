import { atom, useRecoilState } from 'recoil';

type ModalName = '회원가입' | '깃헙가입' | '구글가입';

const modalStore = atom({
  key: 'modalStore',
  default: {
    회원가입: false,
    깃헙가입: false,
    구글가입: false,
  },
});

const useModalRecoilStore = (modalName: ModalName) => {
  const [isOpenState, setIsOpenState] =
    useRecoilState<Record<ModalName, boolean>>(modalStore);
  const isOpen = isOpenState[modalName];

  const open = () => setIsOpenState({ ...isOpenState, [modalName]: true });
  const close = () => setIsOpenState({ ...isOpenState, [modalName]: false });

  return {
    isOpen,
    open,
    close,
  };
};

export default useModalRecoilStore;
