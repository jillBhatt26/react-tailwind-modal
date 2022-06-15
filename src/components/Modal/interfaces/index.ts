import { Dispatch, SetStateAction } from 'react';

export interface IModalProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
