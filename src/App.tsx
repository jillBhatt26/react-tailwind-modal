import { FC } from 'react';
import Login from '@components/Login';
import Modal from '@common/Modal';
import ModalHeader from '@common/Modal/components/Header';
import { useModalContext } from '@contexts/Modal';
import SignUp from '@components/SignUp';

const App: FC = (): JSX.Element => {
    // context
    const { openModal, currentShowingModal } = useModalContext();

    return (
        <div className="text-center h-screen py-1 bg-body">
            <h1 className="text-4xl text-gray-700 my-5">Modal App</h1>

            <button
                className="text-xl pt-1 pb-2 px-3 bg-slate-800 text-white rounded my-5 mx-5
        "
                onClick={() => openModal('login')}
            >
                Login
            </button>

            <button
                className="text-xl pt-1 pb-2 px-3 bg-slate-800 text-white rounded my-5
        "
                onClick={() => openModal('signup')}
            >
                Sign Up
            </button>

            <Modal>
                {currentShowingModal && (
                    <>
                        <ModalHeader
                            title={currentShowingModal!.toUpperCase()}
                        />
                        {currentShowingModal === 'login' && <Login />}
                        {currentShowingModal === 'signup' && <SignUp />}
                    </>
                )}
            </Modal>
        </div>
    );
};

export default App;
