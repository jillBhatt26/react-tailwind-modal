import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IModalProps {
    children: ReactNode;
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
