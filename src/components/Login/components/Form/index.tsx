import { FC } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

const LoginForm: FC = (): JSX.Element => {
    return (
        <form className="bg-formBG px-2">
            <div className="px-2 pt-1">
                <div className="relative flex flex-wrap items-stretch my-2 w-full">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <FaUserAlt />
                    </span>
                    <input
                        type="text"
                        placeholder="Username or Email"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    />
                </div>
                <div className="relative flex flex-wrap items-stretch my-2 w-full">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <RiLockPasswordFill />
                    </span>
                    <input
                        type="text"
                        placeholder="Password"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    />
                </div>
            </div>

            <div className="pt-1 pb-2 flex items-center justify-center md:justify-end">
                <button
                    type="reset"
                    className="text-gray-100 bg-red-500 ml-2 mr-1 px-4 py-2 rounded inline-block"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="text-gray-100 bg-sky-600 p-2 ml-1 mr-2 rounded inline-block"
                >
                    Log In
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
