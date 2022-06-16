import { FC, useRef } from 'react';
import { useClickAway } from 'react-use';
import { IModalProps } from './interfaces';

const Modal: FC<IModalProps> = ({
    children,
    showModal,
    setShowModal
}): JSX.Element => {
    // refs
    const modalRef = useRef<HTMLDivElement>(null);

    useClickAway(modalRef, () => setShowModal(false));

    return (
        <div
            className={`bg-bg-modal w-5/6 md:w-4/6 lg:w-3/6 xl:2/6 mx-auto shadow-lg shadow-gray-300  overflow-clip rounded transition-all duration-[400ms] ${
                showModal ? 'translate-y-0' : 'opacity-0 -translate-y-96'
            } max-w-lg`}
            ref={modalRef}
        >
            {children}
        </div>
    );
};

export default Modal;
