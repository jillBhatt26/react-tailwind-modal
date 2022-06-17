import { FC } from 'react';
import Login from '@components/Login';
import Modal from '@common/Modal';
import ModalHeader from '@common/Modal/components/Header';
import { useModalContext } from '@contexts/Modal';

const App: FC = (): JSX.Element => {
    // context
    const { showModal, openModal } = useModalContext();

    return (
        <div className="text-center h-screen py-1 bg-body">
            <h1 className="text-4xl text-gray-700 my-5">Modal App</h1>

            <button
                className="text-xl pt-1 pb-2 px-3 bg-slate-800 text-white rounded my-5
        "
                onClick={() => openModal()}
            >
                Open
            </button>

            <Modal showModal={showModal}>
                <ModalHeader title="Log In" />
                <Login showModal={showModal} />
            </Modal>
        </div>
    );
};

export default App;
