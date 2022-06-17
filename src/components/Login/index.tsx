import { FC } from 'react';
import LoginForm from './components/Form';
import { ILoginProps } from './interfaces';

const Login: FC<ILoginProps> = (): JSX.Element => {
    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default Login;
