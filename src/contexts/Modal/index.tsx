import { FC, createContext, useState, useMemo, useContext } from 'react';

import {
    IModalContextProviderProps,
    IModalContextProviderValue
} from './interfaces';

const ModalContext = createContext<IModalContextProviderValue | null>(null);

const ModalContextProvider: FC<IModalContextProviderProps> = ({ children }) => {
    // context states
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [currentShowingModal, setCurrentShowingModal] = useState<
        string | null
    >(null);

    const closeModal = () => {
        setShowModal(false);
        setCurrentShowingModal(null);
        setIsModalVisible(false);
    };

    const openModal = (modalName: string) => {
        setShowModal(true);
        setCurrentShowingModal(modalName);
        setIsModalVisible(true);
    };

    // context values
    const values: IModalContextProviderValue = {
        showModal,
        setShowModal,
        isModalVisible,
        closeModal,
        openModal,
        currentShowingModal
    };

    return useMemo(
        () => (
            <ModalContext.Provider value={values}>
                {children}
            </ModalContext.Provider>
        ),
        // eslint-disable-next-line
        [values]
    );
};

export const useModalContext = () => {
    const context = useContext(ModalContext) as IModalContextProviderValue;

    if (!context) {
        throw new Error(
            'useModalContext must be used within a ModalContextProvider'
        );
    }

    return context;
};

export default ModalContextProvider;
