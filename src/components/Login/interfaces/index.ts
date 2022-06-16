import { Dispatch, SetStateAction } from 'react';

export interface ILoginProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
