import { FC, createContext, useState, useMemo, useContext } from 'react';

import {
    IModalContextProviderProps,
    IModalContextProviderValue
} from './interfaces';

const ModalContext = createContext<IModalContextProviderValue | null>(null);

const ModalContextProvider: FC<IModalContextProviderProps> = ({ children }) => {
    // context states
    const [showModal, setShowModal] = useState<boolean>(false);

    // context values
    const values: IModalContextProviderValue = {
        showModal,
        setShowModal
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
