import { AnimationControls } from 'framer-motion';
import { Dispatch, SetStateAction, ReactNode } from 'react';

export interface IModalContextProviderProps {
    children: ReactNode;
}

export interface IModalContextProviderValue {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    isModalVisible: boolean;
    closeModal: () => void;
    openModal: (modalName: string) => void;
    currentShowingModal: string | null;
    modalAnimationControl: AnimationControls;
}
