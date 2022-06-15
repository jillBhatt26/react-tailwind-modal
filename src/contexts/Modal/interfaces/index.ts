import { Dispatch, SetStateAction, ReactNode } from 'react';

export interface IModalContextProviderProps {
    children: ReactNode;
}

export interface IModalContextProviderValue {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
