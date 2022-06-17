import { FC } from 'react';
import { IModalHeaderProps } from './interfaces';

const ModalHeader: FC<IModalHeaderProps> = ({ title }): JSX.Element => {
    return (
        <div className="border-b border-gray-200">
            <h1 className="bg-sky-900 text-gray-100 py-3 text-xl md:text-2xl">
                {title}
            </h1>
        </div>
    );
};

export default ModalHeader;
