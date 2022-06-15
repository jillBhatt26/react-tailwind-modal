import { FC, useState } from 'react';
import Modal from './components/Modal';

const App: FC = (): JSX.Element => {
    // component states
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="text-center h-screen py-1 bg-body">
            <h1 className="text-4xl text-gray-700 my-5">Modal App</h1>

            <button
                className="text-xl pt-1 pb-2 px-3 bg-slate-800 text-white rounded my-5
        "
                onClick={() => setShowModal(!showModal)}
            >
                Open
            </button>

            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default App;
