import { Dispatch, SetStateAction } from 'react';

export interface IModalContentProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
