import { FC } from 'react';
import { IModalContentProps } from './interfaces';

const ModalContent: FC<IModalContentProps> = ({ setShowModal }) => {
    return (
        <>
            {/* header */}
            <div className="border-b border-gray-200">
                <h1 className="bg-sky-900 text-gray-100 py-3 text-xl md:text-2xl">
                    Modal Header
                </h1>
            </div>

            {/* body */}
            <div className="border-b border-gray-200">
                <p className="text-gray-700 p-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam quis dolore quia itaque maiores molestiae, officia
                    illum amet? Quasi, dolorem.
                </p>
            </div>

            {/* footer */}
            <div className="py-3 flex items-center justify-center md:justify-end">
                <button
                    type="reset"
                    className="text-gray-100 bg-red-500 ml-4 mr-2 px-4 py-2 rounded inline-block"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>

                <button
                    type="submit"
                    className="text-gray-100 bg-sky-600 ml-2 mr-4 p-2 rounded inline-block"
                    onClick={() => setShowModal(false)}
                >
                    Confirm
                </button>
            </div>
        </>
    );
};

export default ModalContent;
