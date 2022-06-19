import { FC, useRef } from 'react';
import { useClickAway } from 'react-use';
import { useModalContext } from '@contexts/Modal';
import { IModalProps } from './interfaces';
import { motion, AnimatePresence } from 'framer-motion';

const Modal: FC<IModalProps> = ({ children }): JSX.Element => {
    // refs
    const modalRef = useRef<HTMLDivElement>(null);

    const { closeModal, modalAnimationControl } = useModalContext();

    useClickAway(modalRef, closeModal);

    return (
        <AnimatePresence>
            <motion.div
                className={`bg-bg-modal w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto shadow-lg shadow-gray-300 overflow-clip rounded`}
                ref={modalRef}
                animate={modalAnimationControl}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Modal;
