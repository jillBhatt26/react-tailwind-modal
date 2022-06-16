import { FC } from 'react';
import LoginForm from './components/Form';
import ModalHeader from './components/Header';
import { ILoginProps } from './interfaces';

const Login: FC<ILoginProps> = (): JSX.Element => {
    return (
        <div>
            <ModalHeader title="Log In" />
            <LoginForm />
        </div>
    );
};

export default Login;
